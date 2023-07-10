<template>
  <div class="font-roboto h-screen min-h-full flex">
    <div class="flex flex-col flex-1 overflow-hidden">
      <main class="px-10px text-center">
        <slot />
      </main>
      <LayoutFooter />
    </div>
  </div>
</template>
