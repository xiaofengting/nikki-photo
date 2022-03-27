<script setup lang="ts">
const props = defineProps<{
  doubleMode: boolean
}>()
const emit = defineEmits<{
  (e: 'changeMode'): void
}>()
function changeMode() {
  emit('changeMode')
}
</script>

<template>
  <div class="double-tab">
    <div role="tab">
      <div role="button" class="collapse-header" @click="changeMode">
        <svg
          v-if="doubleMode"
          class="double-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffa9a3"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <svg
          v-else
          class="double-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
        合照模式
      </div>
    </div>
  </div>
</template>

<style>
.double-tab {
  position: relative;
}
.double-tab .double-svg {
  margin: 0 5px;
}
</style>
