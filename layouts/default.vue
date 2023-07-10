<template>
  <div class="font-roboto h-screen min-h-full flex">
    <LayoutSidebar />
    <div class="flex flex-col flex-1 overflow-hidden">
      <LayoutHeader />
      <main class="px-10px text-center">
        <slot />
      </main>
      <LayoutFooter />
    </div>
  </div>
</template>
