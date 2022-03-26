<script setup lang="ts">
import { PartNormalData, unitName, colorUnitName, imgSrc } from './partData'
import StickerShow from './components/StickerShow.vue'
import CollapseNormal from './components/CollapseNormal.vue'
import CollapseFace from './components/CollapseFace.vue'
import SaveTab from './components/SaveTab.vue'
import html2canvas from 'html2canvas'
import { ref } from 'vue'

const isFinal = ref(false)
const finalUrl = ref('')
const saving = ref(false)

function toImage() {
  isFinal.value = true
  finalUrl.value = ''
  saving.value = true
  setTimeout(() => {
    html2canvas(document.getElementById('left-block')!, {
      backgroundColor: null,
      useCORS: true
    }).then((canvas) => {
      let url = canvas.toDataURL('image/png')
      finalUrl.value = url
      setTimeout(() => {
        saving.value = false
      }, 1000)
    })
  }, 100)
}
function hideShow() {
  isFinal.value = false
}

const parts = ref({
  eye: 'highlight1',
  eyeColor: 'pink',
  eyebrow: 'ptm',
  eyebrowColor: 'pink',
  mouth: 'close1',
  mouthColor: 'pink',
  frontHair: 'wlh',
  frontHairColor: 'pink',
  hair: 'smwd',
  hairColor: 'pink',
  dress: 'zcdgb',
  hand: '',
  ts: 'rabitEar',
  front: '',
  bg: '',
  bgColor: 'pink',
  fw: '',
  fwColor: 'pink',
  heart: false,
  tear: false,
  star: false,
  red: false,
  saveMobile: '',
  savePC: ''
})

function choosePart(unit: unitName, item: string) {
  parts.value[unit] = item
}
function chooseColor(unit: colorUnitName, color: string) {
  if (unit === 'frontHairColor') {
    parts.value.hairColor = color
  }
  parts.value[unit] = color
}
type faceimg = 'heart' | 'tear' | 'star' | 'red'
function chooseFace(item: faceimg) {
  parts.value[item] = !parts.value[item]
}

const saveColor = ref({
  saveMobile: 'pink',
  savePC: 'pink'
})
const checkSave = ref('大头贴')
function changeCheckSave(name: string, color: string) {
  checkSave.value = name
  if (name === '手机壁纸' && color) saveColor.value.saveMobile = color
  else if (name === '电脑壁纸' && color) saveColor.value.savePC = color
}

function calcImgStyle() {
  if (checkSave.value === '手机壁纸') {
    return `--bg-image: url(${imgSrc}/mobilebg/${saveColor.value.saveMobile}.jpg);`
  } else if (checkSave.value === '电脑壁纸') {
    return `--bg-image: url(${imgSrc}/pcbg/${saveColor.value.savePC}.jpg);`
  }
  return ''
}
</script>

<template>
  <div
    :class="{
      'photo-saving': saving,
      'photo-vanilla': checkSave === '大头贴',
      'photo-mobile': checkSave === '手机壁纸',
      'photo-pc': checkSave === '电脑壁纸'
    }"
    :style="calcImgStyle()"
  >
    <div id="left-block" class="left-block">
      <sticker-show v-bind="parts" />
    </div>
    <div class="right-block">
      <SaveTab :check-save="checkSave" @save-image="toImage" @change-check-save="changeCheckSave" />
      <CollapseFace
        :heart="parts.heart"
        :tear="parts.tear"
        :star="parts.star"
        :red="parts.red"
        @choose-face="chooseFace"
      />
      <CollapseNormal
        v-for="item in PartNormalData"
        v-bind="item"
        :active="parts[item.unit]"
        :active-color="parts[item.unitColor || 'frontHairColor']"
        @choose-part="choosePart"
        @choose-color="chooseColor"
      />
    </div>
  </div>
  <transition name="final">
    <div v-if="isFinal" class="final-cover" @click="hideShow">
      <img :src="finalUrl" />
    </div>
  </transition>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  height: 100vh;
  width: 100vw;
  min-height: 200px;
  background-color: #ffd0cf;
  background-image: url(/assets/screen-bg.png);
  background-size: cover;
  background-position: center;
  --font-color: #333;
}
.photo-vanilla,
.photo-mobile,
.photo-pc {
  display: flex;
  height: 100vh;
  width: 100vw;
}

.right-block {
  margin-left: 20px;
  flex-grow: 1;
  height: 100vh;
  overflow-y: auto;
  overflow-x: auto;
}

.final-cover {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.photo-vanilla .final-cover img {
  height: 70vmin;
  width: 70vmin;
  margin: 0 auto;
}
.photo-mobile .final-cover img {
  height: 100vmin;
  width: 56.25vmin;
  margin: 0 auto;
}
.photo-pc .final-cover img {
  height: 56.25vmin;
  width: 100vmin;
  margin: 0 auto;
}
.final-enter-active,
.final-leave-active {
  transition: opacity 0.3s ease;
}

.final-enter-from,
.final-leave-to {
  opacity: 0;
}

.collapse-tab {
  border-bottom: 1px solid #ebeef5;
  user-select: none;
}
.collapse-header {
  display: flex;
  align-items: center;
  height: 48px;
  line-height: 48px;
  background-color: #fff;
  cursor: pointer;
  padding-left: 20px;
}
.collapse-header .svg-active {
  transform: rotate(90deg);
}
.collapse-title {
  width: 100px;
}
.collapse-wrap {
  will-change: height;
  overflow: hidden;
  height: 0;
  display: flex;
  flex-wrap: wrap;
}
.collapse-wrap.active {
  height: 100%;
}
.collapse-img {
  height: 80px;
  width: 80px;
  margin: 5px;
  padding: 5px;
  box-sizing: border-box;
  cursor: pointer;
  background-color: #fff;
  border: 5px rgba(0, 0, 0, 0) solid;
  border-radius: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.collapse-img.active {
  border: 5px #ffabbb solid;
}
.collapse-color {
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.collapse-color-item {
  height: 20px;
  width: 20px;
  border-radius: 4px;
  background: var(--color-pick);
  box-sizing: border-box;
  border: 2px solid rgba(0, 0, 0, 1);
}
.collapse-color-item.active {
  border-color: #ffabbb;
}
.photo-vanilla .left-block {
  height: 70vmin;
  width: 70vmin;
}
.photo-vanilla .left-block .photo-sticker {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
}
.photo-vanilla .right-block {
  width: calc(100vw - 70vmin - 22px);
}
.photo-mobile .left-block {
  height: 100vmin;
  width: 56.25vmin;
  position: relative;
  background-size: cover;
  background-image: var(--bg-image);
}
.photo-mobile .left-block .photo-sticker {
  position: absolute;
  top: 52.42vmin;
  left: 15.55vmin;
  width: 25vmin;
  height: 25vmin;
}
.photo-mobile .right-block {
  width: calc(100vw - 56.25vmin - 22px);
}
.photo-pc .left-block {
  height: 50vmin;
  width: 88.89vmin;
  position: relative;
  background-size: cover;
  background-image: var(--bg-image);
}
.photo-pc .left-block .photo-sticker {
  position: absolute;
  top: 38.89vmin;
  left: 71.3vmin;
  width: 8.15vmin;
  height: 8.15vmin;
}
.photo-pc .right-block {
  width: calc(100vw - 88.89vmin - 22px);
}
/* 保存时重置图像 */
.photo-saving.photo-vanilla .left-block {
  width: 100vmax;
  height: 100vmax;
}
.photo-saving.photo-vanilla .right-block {
  display: none;
}
.photo-saving.photo-vanilla .left-block {
  width: 1000px !important;
  height: 1000px !important;
}
.photo-saving.photo-mobile .right-block {
  display: none;
}
.photo-saving.photo-mobile .left-block {
  width: 1440px !important;
  height: 2560px !important;
}
.photo-saving.photo-mobile .left-block .photo-sticker {
  top: 1343px;
  left: 398px;
  width: 644px;
  height: 644px;
}
.photo-saving.photo-pc .right-block {
  display: none;
}
.photo-saving.photo-pc {
  width: 1920px !important;
  height: 1080px !important;
}
.photo-saving.photo-pc .left-block {
  width: 1920px;
  height: 1080px;
}
.photo-saving.photo-pc .left-block .photo-sticker {
  top: 839px;
  left: 1542px;
  width: 175px;
  height: 175px;
}
@media screen and (max-width: 760px) {
  .photo-vanilla {
    flex-direction: column;
  }
  .photo-vanilla .left-block {
    margin: 0 auto;
  }
  .photo-vanilla .right-block {
    margin-left: 0;
    height: calc(100vh - 70vmin);
    width: 100%;
  }
  .photo-mobile {
    flex-direction: column;
  }
  .photo-mobile .left-block {
    margin: 0 auto;
  }
  .photo-mobile .right-block {
    height: calc(100vh - 100vmin);
    margin-left: 0;
    width: 100%;
  }
  .photo-pc {
    flex-direction: column;
  }
  .photo-pc .left-block {
    height: 56.25vmin;
    width: 100vmin;
  }
  .photo-pc .left-block .photo-sticker {
    top: 43.19vmin;
    left: 80.21vmin;
    width: 9.19vmin;
    height: 9.19vmin;
  }
  .photo-pc .right-block {
    height: calc(100vh - 56.25vmin);
    margin-left: 0;
    width: 100%;
  }
}

::-webkit-scrollbar {
  width: 10px;
  height: 1px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: pink;
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
  border-radius: 10px;
}
</style>
