<template>
  <div class="flex justify-center items-center h-full">
    <div class="relative bottom-30 flex-col">
      <div class="flex justify-center">
        <img src="../assets/big_grok.svg" class="size-50 inline-block" />
      </div>

      <div class="queryBar relative">
        <el-input
          v-model="textarea"
          :rows="3"
          class="!w-250"
          type="textarea"
          placeholder="你想知道什么？"
          resize="none"
        />
        <div class="tool-box absolute bottom-0 px-6 py-4">
          <el-button :icon="Search" circle />
          <el-button type="primary" round>Primary</el-button>
        </div>
        <div class="send-box absolute bottom-0 right-0 px-6 py-4">
          <el-button :icon="Search" circle />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const textarea = ref('')
</script>
<style scoped></style>
