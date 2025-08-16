<template>
  <div class="flex justify-center items-center h-full">
    <div class="relative bottom-30 flex-col">
      <div class="flex justify-center">
        <img src="../assets/big_grok.svg" class="size-50 inline-block" />
      </div>

      <TextInput />

      <div class="more-btns flex justify-center py-4">
        <el-button plain size="large" round>编辑图像</el-button>
        <el-button plain size="large" round>新闻播报员</el-button>
        <el-button plain size="large" round>角色设定</el-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import TextInput from '@/components/TextInput.vue'
</script>
<style scoped></style>
