<script setup lang="ts" name="layoutLogo">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useThemeConfig } from '@/stores/themeConfig'
import logoMini from '@/assets/logo-mini.svg'

// 定义变量内容
const storesThemeConfig = useThemeConfig()
const { themeConfig } = storeToRefs(storesThemeConfig)

// 设置 logo 的显示。classic 经典布局默认显示 logo
const setShowLogo = computed(() => {
  const { isCollapse, layout } = themeConfig.value
  return !isCollapse || layout === 'classic' || document.body.clientWidth < 1000
})

const showLogoMini = computed(() => {
  const { layout } = themeConfig.value
  return layout !== 'columns'
})

// logo 点击实现菜单展开/收起
function onThemeConfigChange() {
  if (themeConfig.value.layout === 'transverse')
    return false
  themeConfig.value.isCollapse = !themeConfig.value.isCollapse
}
</script>

<template>
  <div v-if="setShowLogo" class="layout-logo" @click="onThemeConfigChange">
    <img v-if="showLogoMini" :src="logoMini" class="layout-logo-medium-img">
    <span class="my-line-1">{{ themeConfig.globalTitle }}</span>
  </div>
  <div v-else class="layout-logo-size" @click="onThemeConfigChange">
    <img v-if="showLogoMini" :src="logoMini" class="layout-logo-size-img">
  </div>
</template>

<style scoped lang="scss">
.layout-logo {
  width: 220px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 21, 41, 0.02) 0px 1px 4px;
  color: var(--el-color-primary);
  font-size: 16px;
  cursor: pointer;
}
.layout-logo span {
  white-space: nowrap;
  display: inline-block;
}
.layout-logo:hover span {
  color: var(--color-primary-light-2);
}
.layout-logo-medium-img {
  width: 20px;
  margin-right: 5px;
}
.layout-logo-size {
  width: 100%;
  height: 50px;
  display: flex;
  cursor: pointer;
}
.layout-logo-size-img {
  width: 20px;
  margin: auto;
}
</style>
