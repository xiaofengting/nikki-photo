<script setup lang="ts">
import { ref } from 'vue'
import SaveOpinion from './SaveOpinion.vue'
const showTab = ref(false)
function switchShow() {
  showTab.value = !showTab.value
}
const props = defineProps<{
  checkSave: string
}>()
const emit = defineEmits<{
  (e: 'saveImage'): void
  (e: 'changeCheckSave', name: string, color: string): void
}>()
function saveImage() {
  emit('saveImage')
}
function changeCheckSave(name: string) {
  emit('changeCheckSave', name, '')
}
const saveColor = ref({
  saveMobile: 'pink',
  savePC: 'pink'
})
function chooseBgColor(name: string, color: string) {
  if (name === '手机壁纸' && color) saveColor.value.saveMobile = color
  else if (name === '电脑壁纸' && color) saveColor.value.savePC = color
  emit('changeCheckSave', name, color)
}
</script>

<template>
  <div class="collapse-tab">
    <div role="tab">
      <div role="button" class="collapse-header" @click="switchShow">
        <svg
          class="collapse-savetab-svg"
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
          <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
        </svg>
        保存为图片
      </div>
    </div>
    <div role="tabpanel" class="collapse-wrap collapse-save" :class="{ active: showTab }">
      <div class="collapse-extra-info" style="width: 290px">点击生成按钮，右键 / 长按图片保存</div>
      <SaveOpinion
        title="大头贴"
        :colorful="false"
        :checked="checkSave"
        @click="changeCheckSave('大头贴')"
      />
      <SaveOpinion
        title="手机壁纸"
        :colorful="true"
        :checked="checkSave"
        :active-color="saveColor.saveMobile"
        @click="changeCheckSave('手机壁纸')"
        @choose-bg-color="chooseBgColor"
      />
      <SaveOpinion
        title="电脑壁纸"
        :colorful="true"
        :checked="checkSave"
        :active-color="saveColor.savePC"
        @click="changeCheckSave('电脑壁纸')"
        @choose-bg-color="chooseBgColor"
      />
      <div class="collapse-extra-save" @click="saveImage">生 成</div>
    </div>
  </div>
</template>

<style>
.collapse-save {
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
  padding-left: 30px;
  --color-save: #e91e63;
  --color-save-hover: #ff508c;
}
.collapse-savetab-svg {
  margin: 0 5px;
}
.collapse-extra-save {
  background: var(--color-save);
  cursor: pointer;
  margin: 5px 0;
  padding: 6px 20px;
  color: #fff;
  border-radius: 15px;
  box-shadow: -1px 1px 8px rgba(0, 0, 0, 0.2);
}
.collapse-extra-save :hover {
  background: var(--color-save-hover);
  box-shadow: -2px 2px 16px rgba(0, 0, 0, 0.3);
}
</style>
