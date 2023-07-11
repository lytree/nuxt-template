<script setup lang="ts" name="layoutFooter">
// 此处需有内容（注释也得），否则缓存将失败
</script>

<template>
  <div class="layout-footer pb15">
    <div class="layout-footer-warp">
      <div>中台Admin</div>
      <div class="mt5">
        Copyright © 2022 中台Admin All rights reserved.
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout-footer {
  width: 100%;
  display: flex;
}
.layout-footer-warp {
  margin: auto;
  color: var(--el-text-color-secondary);
  text-align: center;
  animation: error-num 0.3s ease;
}
</style>
