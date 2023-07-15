<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { appName } from '~/constants'
import '@/assets/theme/index.css'
import mittBus from '@/utils/mitt'
import other from '@/utils/other'
import { useTagsViewRoutes } from '@/stores/tagsViewRoutes'
import { useThemeConfig } from '@/stores/themeConfig'


// 引入组件
const LockScreen = defineAsyncComponent(() => import('@/layouts/admin/lockScreen/index.vue'))
const Setings = defineAsyncComponent(() => import('@/layouts/admin/navBars/topBar/setings.vue'))
const CloseFull = defineAsyncComponent(() => import('@/layouts/admin/navBars/topBar/closeFull.vue'))
const Upgrade = defineAsyncComponent(() => import('@/layouts/admin/upgrade/index.vue'))



const nuxtApp = useNuxtApp()
// 定义变量内容
const { messages, locale } = useI18n()
const setingsRef = ref()
const route = useRoute()
const stores = useTagsViewRoutes()
const storesThemeConfig = useThemeConfig()

const { themeConfig } = storeToRefs(storesThemeConfig)
other.elSvg(nuxtApp)
useHead({
    title: appName,
})

// 设置锁屏时组件显示隐藏
const getLockScreen = computed(() => {
    // 防止锁屏后，刷新出现不相关界面
    return themeConfig.value.isLockScreen ? themeConfig.value.lockScreenTime > 1 : themeConfig.value.lockScreenTime >= 0
})


// 获取全局 i18n
const getGlobalI18n = computed(() => {
    return messages.value[locale.value]
})
// 页面加载时
onMounted(() => {
    nextTick(() => {
        // 监听布局配'置弹窗点击打开
        mittBus.on('openSetingsDrawer', () => {
            setingsRef.value.openDrawer()
        })
        // 获取缓存中的布局配置
        if (Local.get('themeConfig')) {
            storesThemeConfig.setThemeConfig({ themeConfig: Local.get('themeConfig') })
            document.documentElement.style.cssText = Local.get('themeConfigStyle')
        }
        // 获取缓存中的全屏配置
        if (Session.get('isTagsViewCurrenFull')) {
            stores.setCurrenFullscreen(Session.get('isTagsViewCurrenFull'))
        }
    })
})
// 页面销毁时，关闭监听布局配置/i18n监听
onUnmounted(() => {
    mittBus.off('openSetingsDrawer', () => { })
})// 监听路由的变化，设置网站标题
watch(
    () => route.path,
    () => {
        other.useTitle()
    },
    {
        deep: true,
    }
)
</script>

<template>
    <el-config-provider :locale="getGlobalI18n">
        <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" /> <!-- I'm here -->
        <NuxtPage />
        <Setings ref="setingsRef" v-show="getLockScreen" />
        <CloseFull v-if="!themeConfig.isLockScreen" />
    </el-config-provider>
</template>

<style>
html,
body,
#__nuxt {
    height: 100%;
    margin: 0;
    padding: 0;
}

html.dark {
    background: #101014;
    color: white;
}

html.light {
    background: #f6f9f8;
    color: black;
}
</style>
