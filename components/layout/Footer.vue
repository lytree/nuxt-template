<template>
  <dark-mode-container class="flex-center footer flex-shrink-0">
    <div text=" xl gray4" m-5 flex="~ gap3" justify-center>
      <NuxtLink i-carbon-campsite to="/" />
      <a i-carbon-logo-github href="https://github.com/antfu/vitesse-nuxt3" target="_blank" />
      <DarkToggle />
    </div>
  </dark-mode-container>
</template>
<style scoped>
.footer {
  position: absolute;
  z-index: 999;
  height: 56px;
  padding-left: 36px;
  transition-duration: 300;
  transition-timing-function: ease-in-out;
  transition-property: 'padding-left';
  left: 0;
  bottom: 0;
  flex-shrink: 0;
  box-sizing: 'border-box';
  width: '100%';
}
</style>