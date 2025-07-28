<template>
  <div class="flex flex-row w-full h-screen">
    <Sidebar class="basis-64" />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/SideBar.vue'
</script>

<style scoped></style>
