<template>
  <div class="flex flex-row w-full h-screen">
    <Sidebar class="basis-1/6" />
    <div class="bg-grokgray-400 basis-5/6">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/SideBar.vue'
</script>

<style scoped></style>
