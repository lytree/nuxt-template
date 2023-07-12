<template>
  <div class="login-scan-container">
    <div ref="qrcodeRef"></div>
    <div class="font12 mt20 login-msg">
      <i class="iconfont icon-saoyisao mr5"></i>
      <span>{{ $t('message.scan.text') }}</span>
    </div>
  </div>
</template>

<script setup lang="ts" name="loginScan">
import { ref, onMounted, nextTick } from 'vue'
import QRCode from 'qrcodejs2-fixes'

// 定义变量内容
const qrcodeRef = ref<HTMLElement | null>(null)

// 初始化生成二维码
const initQrcode = () => {
  nextTick(() => {
    ;(<HTMLElement>qrcodeRef.value).innerHTML = ''
    new QRCode(qrcodeRef.value, {
      text: `https://qm.qq.com/cgi-bin/qm/qr?k=iNzyqsBsyQKuIxGEznL3PYwLzWOcqmJE&jump_from=webapi`,
      width: 260,
      height: 260,
      colorDark: '#000000',
      colorLight: '#ffffff',
    })
  })
}
// 页面加载时
onMounted(() => {
  initQrcode()
})
</script>

<style scoped>
.login-scan-animation, .login-scan-container .login-msg, .login-scan-container {
  opacity: 0;
  animation-name: error-num;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.login-scan-container {
  padding: 0 20px 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  animation-delay: 0.1s;
}
.login-scan-container :deep(img) {
  margin: auto;
}
.login-scan-container .login-msg {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--el-text-color-placeholder);
  animation-delay: 0.2s;
}
</style>
