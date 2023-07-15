<script setup lang="ts">
const online = useOnline()
</script>

<template>
  <div class="h-full w-full">
    <NuxtLayout name="admin">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
