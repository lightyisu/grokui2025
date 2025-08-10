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
          <el-button circle>
            <img src="../assets//icons/fileupload.svg" />
          </el-button>
          <el-button class="!border-none" round
            ><img src="../assets/icons/rocket.svg" />&nbsp;自动<span class="m-2"
              ><ion-icon name="chevron-down-outline"></ion-icon></span
          ></el-button>
        </div>
        <div class="send-box absolute bottom-0 right-0 px-6 py-4">
          <el-button class="send-btn" circle color="black" />
        </div>
      </div>
      <div class="more-btns flex justify-center py-4">
        <el-button plain size="large" round>编辑图像</el-button>
        <el-button plain size="large" round>新闻播报员</el-button>
        <el-button plain size="large" round>角色设定</el-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const textarea = ref('')
</script>
<style scoped></style>
