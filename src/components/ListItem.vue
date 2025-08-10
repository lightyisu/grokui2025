<template>
  <RouterLink :to="{ name }">
    <div class="hover:bg-grokgray-600 rounded-xl py-3 px-3.5">
      <div class="flex justify-start items-center">
        <img :src="icon" class="size-6 inline-block mr-2" />

        <span class="font-bold text-lg"> {{ title }}</span>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  icon: string
  name: string
}>()
</script>

<style scoped></style>
