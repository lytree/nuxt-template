<template>
  <l-dark-mode-container class="footer absolute flex-center flex-shrink-0 shadow-xl lg:pl-64">
    <div text="xl gray4" m-5 flex="~ gap3" class="justify-center">
      <NuxtLink i-carbon-campsite to="/" />
      <a i-carbon-logo-github href="https://github.com/antfu/vitesse-nuxt3" target="_blank" />
      <l-dark-toggle />
    </div>
  </l-dark-mode-container>
</template>

<style scoped>
.footer {
  height: 56px;
  z-index: 20;
  left: 0;
  bottom: 0;
  box-sizing: 'border-box';
  width: '100%';
}
</style>
