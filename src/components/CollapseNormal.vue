<script setup lang="ts">
import { ref } from 'vue'
import { unitName, colorUnitName } from '../partData'

const props = defineProps<{
  title: string
  unit: unitName
  arr: string[]
  colorful: boolean
  unitColor?: colorUnitName
  bgPositionX?: string
  bgPositionY?: string
  bgSize?: string
  active: string
  activeColor: string
}>()

const showTab = ref(false)
function switchShow() {
  showTab.value = !showTab.value
}
const emit = defineEmits<{
  (e: 'choosePart', unit: unitName, item: string): void
  (e: 'chooseColor', unitColor: colorUnitName, color: string): void
}>()
function chooseUnitPart(item: string) {
  emit('choosePart', props.unit, item)
}
function chooseUnitColor(color: string) {
  emit('chooseColor', props.unitColor || 'frontHairColor', color)
}
function stop() {}
function calcImgStyle(item: string) {
  if (props.unit === 'frontHair') {
    return `--before-image: url(/assets/frontHair/${
      item ? item + props.activeColor : 'none'
    }.png);`
  } else if (props.unitColor || props.unit === 'hair') {
    let str = `background-image: url(/assets/${
      item ? props.unit + '/' + item + props.activeColor : 'none'
    }.png);`
    if (item && props.bgPositionX) str += `background-position-x: ${props.bgPositionX};`
    if (item && props.bgPositionY) str += `background-position-y: ${props.bgPositionY};`
    if (item && props.bgSize) str += `background-size: ${props.bgSize};`
    return str
  } else if (props.unit === 'ts' || props.unit === 'front') {
    return `background-image: url(/assets/${
      item ? props.unit + '/' + item + '-check' : 'none'
    }.png);`
  }
  let str = `background-image: url(/assets/${item ? props.unit + '/' + item : 'none'}.png);`
  if (item && props.bgPositionX) str += `background-position-x: ${props.bgPositionX};`
  if (item && props.bgPositionY) str += `background-position-y: ${props.bgPositionY};`
  if (item && props.bgSize) str += `background-size: ${props.bgSize};`
  return str
}
let colorPicks = ref([
  { name: 'pink', value: '#ffc3be' },
  { name: 'orange', value: '#fecbb3' },
  { name: 'purple', value: '#d9cfed' }
])
if (props.unit === 'fw') {
  colorPicks.value.shift()
  colorPicks.value.unshift({
    name: 'pink',
    value: 'linear-gradient(135deg, #ffc3be 50%, #fff 50%)'
  })
  colorPicks.value.push({ name: 'black', value: '#75696c' })
} else if (props.unit === 'frontHair' || props.unit === 'eyebrow' || props.unit === 'bg') {
  colorPicks.value.push({ name: 'black', value: '#75696c' })
} else if (props.unit === 'eye' || props.unit === 'mouth') {
  colorPicks.value.push({ name: 'brown', value: '#c2958b' })
}
</script>

<template>
  <div
    class="collapse-tab"
    :class="{
      'collapse-img-hair': unit === 'hair',
      'collapse-img-frontHair': unit === 'frontHair'
    }"
  >
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
        <div class="collapse-title">{{ title }}</div>
        <div v-if="colorful" class="collapse-color" @click.stop="stop()">
          <div
            v-for="item in colorPicks"
            class="collapse-color-item"
            :class="{ active: activeColor === item.name }"
            :style="`--color-pick: ${item.value}`"
            @click.stop="chooseUnitColor(item.name)"
          ></div>
        </div>
      </div>
    </div>
    <div v-if="showTab" role="tabpanel" class="collapse-wrap" :class="{ active: showTab }">
      <div
        v-for="item in arr"
        class="collapse-img"
        :class="{ active: item === active }"
        :style="calcImgStyle(item)"
        @click="chooseUnitPart(item)"
      ></div>
      <p
        v-if="unit === 'fw' && activeColor === 'pink'"
        class="collapse-extra-info"
        style="width: 290px"
      >
        说明：后两项为透明，需选择上一项背景
      </p>
    </div>
  </div>
</template>
<style>
.collapse-img-frontHair .collapse-img::after,
.collapse-img-hair .collapse-img::after {
  content: '';
  position: absolute;
  background-size: cover;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.collapse-img-frontHair .collapse-img {
  background-image: url(/assets/body.png);
}
.collapse-img-frontHair .collapse-img::after {
  background-image: var(--before-image);
}
.collapse-img-hair .collapse-img::after {
  background-image: url(/assets/body.png);
}
.collapse-extra-info {
  line-height: 30px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px black solid;
  padding: 0 20px;
  margin: 5px 0;
  height: 30px;
}
</style>
