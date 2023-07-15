<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue'

const MyCaptcha = defineAsyncComponent(() => import('./index.vue'))

const myCaptchaRef = ref()

// 刷新滑块验证码
function refresh() {
  myCaptchaRef.value?.refresh()
}

defineExpose({
  refresh,
})
</script>

<template>
  <el-dialog class="my-captcha" title="请完成安全验证" draggable append-to-body width="380px" v-bind="$attrs">
    <MyCaptcha ref="myCaptchaRef" v-bind="$attrs" />
  </el-dialog>
</template>

<style scoped lang="scss"></style>
