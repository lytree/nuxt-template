<script setup lang="ts">
const online = useOnline()
definePageMeta({
  middleware: [
    function (to, from) {
      if (to.path === '/admin')
        return navigateTo({ path: '/admin/' })
    },
  ],
})
</script>

<template>
  <div>
    <NuxtLayout name="admin">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
