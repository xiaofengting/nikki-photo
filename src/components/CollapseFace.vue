<script setup lang="ts">
import { ref } from 'vue'
import { imgSrc } from '../partData'

const props = defineProps<{
  heart: boolean
  tear: boolean
  star: boolean
  red: boolean
}>()
type faceimg = 'heart' | 'tear' | 'star' | 'red'
const arr: faceimg[] = ['heart', 'tear', 'star', 'red']

const showTab = ref(false)
function switchShow() {
  showTab.value = !showTab.value
}
const emit = defineEmits<{
  (e: 'chooseFace', item: faceimg): void
}>()
function chooseUnitPart(item: faceimg) {
  emit('chooseFace', item)
}
</script>

<template>
  <div class="collapse-tab">
    <div role="tab">
      <div role="button" class="collapse-header" @click="switchShow">
        <svg
          :class="{ 'svg-active': showTab }"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
        <div class="collapse-title">脸颊</div>
      </div>
    </div>
    <div role="tabpanel" class="collapse-wrap" :class="{ active: showTab }">
      <div
        v-for="item in arr"
        class="collapse-img"
        :class="{ active: props[item] }"
        :style="`background-image: url(${imgSrc}/face/${item}-check.png);`"
        @click="chooseUnitPart(item)"
      ></div>
      <p class="collapse-extra-info" style="width: 120px">说明：此处多选</p>
    </div>
  </div>
</template>
<style></style>
