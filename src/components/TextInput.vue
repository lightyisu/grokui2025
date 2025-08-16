<template>
  <div class="queryBar relative">
    <el-input
      v-model="textarea"
      :rows="3"
      class="!w-250"
      type="textarea"
      placeholder="你想知道什么？"
      resize="none"
      @input="sendBtnIcon = 1"
      @blur="sendBtnIcon = 0"
    />
    <div class="tool-box absolute bottom-0 px-6 py-4 flex items-center">
      <el-button circle>
        <img src="../assets//icons/fileupload.svg" />
      </el-button>
      <div class="relative mx-4 mode-select" ref="mode_select">
        <el-select v-model="mode_value" ref="selectRef">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            <div class="out_wrapper flex items-center">
              <div class="inline-block p-2">
                <ion-icon size="small" style="color: black" :name="item.icon"></ion-icon>
              </div>
              <div class="text_wrapper flex-col">
                <div class="font-bold">{{ item.label }}</div>
                <div>{{ item.desc }}</div>
              </div>
            </div>
          </el-option>
          <template #prefix>
            <ion-icon size="small" style="color: black" :name="currentModeIcon"></ion-icon>
          </template>
        </el-select>
      </div>
    </div>
    <div class="send-box absolute bottom-0 right-0 px-6 py-4">
      <el-button class="send-btn" circle color="black">
        <template #icon>
          <ion-icon v-show="sendBtnIcon == 0" name="radio-button-off-outline"></ion-icon>
          <ion-icon v-show="sendBtnIcon == 1" name="arrow-up-outline"></ion-icon>
        </template>
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
const mode_select = ref<HTMLDivElement | null>(null)
const selectRef = ref()
const textarea = ref('')
const mode_select_op_show = ref(false)
const sendBtnIcon = ref(0)
const options = [
  {
    value: 'Option1',
    label: '自动',
    desc: '选择最佳模式',
    icon: 'rocket-outline',
  },
  {
    value: 'Option2',
    label: '快速(GPT-5-nano)',
    desc: '快速回应(使用openai/gpt-5-nano)',
    icon: 'flash-outline',
  },
  {
    value: 'Option3',
    label: '质量(使用GPT-5-mini)',
    desc: '努力思考(使用openai/gpt-5-mini)',
    icon: 'ribbon-outline',
  },
  {
    value: 'Option4',
    label: '使用Qwen3',
    desc: 'alibaba/qwen-3-235b',
    icon: 'layers-outline',
  },
]
const mode_value = ref(options[0].value)
const currentModeIcon = computed(() => {
  return options.find((item) => item.value == mode_value.value)?.icon
})
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

<style scoped lang="scss"></style>
