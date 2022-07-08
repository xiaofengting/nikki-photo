<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  title: string
  colorful: boolean
  activeColor?: string
  checked: string
}>()
let colorPicks = ref([
  { name: 'pink', value: '#ffc3be' },
  { name: 'orange', value: '#fecbb3' },
  { name: 'purple', value: '#d9cfed' },
  { name: 'brown', value: '#c2958b' }
])

const emit = defineEmits<{
  (e: 'chooseBgColor', title: string, color: string): void
}>()
function chooseBgColor(color: string) {
  emit('chooseBgColor', props.title, color)
}
</script>

<template>
  <div class="save-tab">
    <div role="tab">
      <div class="save-header">
        <svg v-if="checked === title" class="save-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
          viewBox="0 0 24 24" fill="none" stroke="#ffa9a3" stroke-width="3" stroke-linecap="round"
          stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <svg v-else class="save-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
          fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
        <div class="collapse-title">{{ title }}</div>
        <div v-if="colorful" class="collapse-color">
          <div v-for="item in colorPicks" class="collapse-color-item" :class="{ active: activeColor === item.name }"
            :style="`--color-pick: ${item.value}`" @click.stop="chooseBgColor(item.name)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.save-header {
  display: flex;
  align-items: center;
  background-color: #fff;
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  border: 1px black solid;
  box-sizing: border-box;
  padding: 0 20px;
  margin-top: 3px;
  border-radius: 4px;
}

.save-header .save-svg {
  margin-right: 10px;
}
</style>
