<script setup lang="ts">
import { imgMap } from '../partData'
defineProps<{
  eye: string
  eyeColor: string
  eyebrow: string
  eyebrowColor: string
  mouth: string
  mouthColor: string
  frontHair: string
  frontHairColor: string
  hair: string
  hairColor: string
  dress: string
  hand: string
  ts: string
  heart: boolean
  tear: boolean
  star: boolean
  red: boolean
  front: string
  bg: string
  bgColor: string
  fw: string
  fwColor: string
  doubleMode?: boolean
  eyeLeft?: string
  eyeColorLeft?: string
  eyebrowLeft?: string
  eyebrowColorLeft?: string
  mouthLeft?: string
  mouthColorLeft?: string
  frontHairLeft?: string
  frontHairColorLeft?: string
  hairLeft?: string
  hairColorLeft?: string
  dressLeft?: string
  handLeft?: string
  tsLeft?: string
  heartLeft?: boolean
  tearLeft?: boolean
  starLeft?: boolean
  redLeft?: boolean
}>()
</script>

<template>
  <div class="photo-sticker" :class="{ 'double-mode': doubleMode }">
    <img v-if="bg" :src="imgMap[`${bg}${bgColor}`]" />
    <img v-if="fw" :src="imgMap[`${fw}${fwColor}`]" />
    <img class="photo-left" v-if="doubleMode" :src="imgMap[`${hairLeft}${hairColorLeft}`]" />
    <img class="photo-right" :src="imgMap[`${hair}${hairColor}`]" />
    <template v-if="doubleMode">
      <img class="photo-left" :src="imgMap['body']" />
      <img class="photo-left" :src="imgMap[`${dressLeft}`]" />
      <img class="photo-left" :src="imgMap[`${eyeLeft}${eyeColorLeft}`]" />
      <img class="photo-left" :src="imgMap[`${eyebrowLeft}${eyebrowColorLeft}`]" />
      <img class="photo-left" :src="imgMap[`${mouthLeft}${mouthColorLeft}`]" />
      <img class="photo-left" :src="imgMap[`${frontHairLeft}${frontHairColorLeft}`]" />
    </template>
    <img class="photo-left" v-if="doubleMode && handLeft" :src="imgMap[`${handLeft}`]" />
    <img class="photo-left" v-if="doubleMode && tsLeft" :src="imgMap[`${tsLeft}`]" />
    <img class="photo-left" v-if="doubleMode && heartLeft" :src="imgMap['heart']" />
    <img class="photo-left" v-if="doubleMode && tearLeft" :src="imgMap['tear']" />
    <img class="photo-left" v-if="doubleMode && starLeft" :src="imgMap['star']" />
    <img class="photo-left" v-if="doubleMode && redLeft" :src="imgMap['red']" />
    <img class="photo-right" :src="imgMap['body']" />
    <img class="photo-right" :src="imgMap[`${dress}`]" />
    <img class="photo-right" :src="imgMap[`${eye}${eyeColor}`]" />
    <img class="photo-right" :src="imgMap[`${eyebrow}${eyebrowColor}`]" />
    <img class="photo-right" :src="imgMap[`${mouth}${mouthColor}`]" />
    <img class="photo-right" :src="imgMap[`${frontHair}${frontHairColor}`]" />
    <img class="photo-right" v-if="hand" :src="imgMap[`${hand}`]" />
    <img class="photo-right" v-if="ts" :src="imgMap[`${ts}`]" />
    <img class="photo-right" v-if="heart" :src="imgMap['heart']" />
    <img class="photo-right" v-if="tear" :src="imgMap['tear']" />
    <img class="photo-right" v-if="star" :src="imgMap['star']" />
    <img class="photo-right" v-if="red" :src="imgMap['red']" />
    <img v-if="front" :src="imgMap[`${front}`]" />
  </div>
</template>

<style>
.photo-sticker img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.photo-left {
  transform: rotateY(180deg) translateX(33%);
}

.double-mode .photo-right {
  transform: translateX(33%);
}
</style>
