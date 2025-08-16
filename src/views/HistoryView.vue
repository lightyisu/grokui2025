<template>
  <div>
    <el-select v-model="value" placeholder="Select" style="width: 240px">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option122222222222',
  },
  {
    value: 'Option2',
    label: 'Option2caca',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>

<style scoped lang="scss"></style>
