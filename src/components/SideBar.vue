<template>
  <div class="bg-grokgray-400 flex flex-col items-center py-4">
    <div class="wrapper rounded w-7/8 my-4">
      <img
        src="../assets/grok.svg"
        class="size-10 hover:bg-grokgray-600 right-2 relative rounded-2xl p-1 cursor-pointer"
      />
    </div>

    <div class="tools-list flex flex-col items-start w-7/8">
      <el-button
        size="large"
        :icon="IconSlot"
        round
        class="flex !justify-start w-full !hover:bg-amber-100 !text-stone-900"
        >搜索<span class="text-gray-400 ml-1">Ctrl+K</span></el-button
      >
      <div class="tools-text my-4 w-full">
        <ListItem v-for="(item, index) in list" :title="item.title" :icon="item.icon" :key="index" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconSlot from '@/components/IconSearch.vue'
import ListItem from '@/components/ListItem.vue'
import { ref } from 'vue'

function getImageUrl(name: string) {
  // `import.meta.url` 是当前模块的 URL，Vite 会基于它来正确解析相对路径
  return new URL(`../assets/icons/${name}`, import.meta.url).href
}
const list = ref([
  { icon: getImageUrl('chat.svg'), title: '聊天' },
  { icon: getImageUrl('voice.svg'), title: '语音' },
  { icon: getImageUrl('file.svg'), title: '文件' },
  { icon: getImageUrl('task.svg'), title: '任务' },
  { icon: getImageUrl('project.svg'), title: '项目' },
  { icon: getImageUrl('history.svg'), title: '历史记录' },
])
</script>
<style scoped lang="sass"></style>
