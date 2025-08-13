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
        <div class="tool-box absolute bottom-0 px-6 py-4 flex items-center">
          <el-button circle>
            <img src="../assets//icons/fileupload.svg" />
          </el-button>
          <div class="relative mx-4 mode-select" ref="mode_select">
            <el-select placeholder="自动" v-model="value" style="width: 120px" ref="selectRef">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                <div>{{ item.label }}</div>
                <div>{{ item.desc }}</div>
              </el-option>
            </el-select>
          </div>
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
import { onMounted, ref } from 'vue'
const mode_select = ref<HTMLDivElement | null>(null)
const selectRef = ref()
const textarea = ref('')
const mode_select_op_show = ref(false)

const value = ref('')
const options = [
  {
    value: 'Option1',
    label: '自动',
    desc: '选择最佳模式',
  },
  {
    value: 'Option2',
    label: '快速',
    desc: '快速回应(使用Grok3)',
  },
  {
    value: 'Option3',
    label: '专家模式',
    desc: '努力思考(使用Grok4)',
  },
  {
    value: 'Option4',
    label: 'Heavy',
    desc: '专家团队(使用Grok4 Heavy)',
  },
]

const handleClickOutside = (e: Event) => {
  if (!mode_select.value) return
  if (!mode_select.value.contains(e.target as Node)) {
    mode_select_op_show.value = false
  }
}
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('resize', () => {
    mode_select_op_show.value = false
  })
})
</script>
<style scoped></style>
