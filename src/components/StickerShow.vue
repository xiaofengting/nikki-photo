<script setup lang="ts">
import { imgSrc } from '../partData'
const props = defineProps<{
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
    <img class="photo-part" v-if="bg" :src="`${imgSrc}/bg/${bg}${bgColor}.png`" />
    <img class="photo-part" v-if="fw" :src="`${imgSrc}/fw/${fw}${fwColor}.png`" />
    <img class="photo-part" v-if="front" :src="`${imgSrc}/front/${front}.png`" />
    <img
      class="photo-part photo-left"
      v-if="doubleMode"
      :src="`${imgSrc}/hair/${hairLeft}${hairColorLeft}.png`"
    />
    <img class="photo-part photo-right" :src="`${imgSrc}/hair/${hair}${hairColor}.png`" />
    <img class="photo-part photo-left" v-if="doubleMode" :src="`${imgSrc}/body.png`" />
    <img
      class="photo-part photo-left"
      v-if="doubleMode"
      :src="`${imgSrc}/dress/${dressLeft}.png`"
    />
    <img
      class="photo-part photo-left"
      v-if="doubleMode"
      :src="`${imgSrc}/eye/${eyeLeft}${eyeColorLeft}.png`"
    />
    <img
      class="photo-part photo-left"
      v-if="doubleMode"
      :src="`${imgSrc}/eyebrow/${eyebrowLeft}${eyebrowColorLeft}.png`"
    />
    <img
      class="photo-part photo-left"
      v-if="doubleMode"
      :src="`${imgSrc}/mouth/${mouthLeft}${mouthColorLeft}.png`"
    />
    <img
      class="photo-part photo-left"
      v-if="doubleMode"
      :src="`${imgSrc}/frontHair/${frontHairLeft}${frontHairColorLeft}.png`"
    />
    <img
      class="photo-part photo-left"
      v-if="doubleMode && handLeft"
      :src="`${imgSrc}/hand/${handLeft}.png`"
    />
    <img
      class="photo-part photo-left"
      v-if="doubleMode && tsLeft"
      :src="`${imgSrc}/ts/${tsLeft}.png`"
    />
    <img
      class="photo-part photo-left"
      v-if="doubleMode && heartLeft"
      :src="`${imgSrc}/face/heart.png`"
    />
    <img
      class="photo-part photo-left"
      v-if="doubleMode && tearLeft"
      :src="`${imgSrc}/face/tear.png`"
    />
    <img
      class="photo-part photo-left"
      v-if="doubleMode && starLeft"
      :src="`${imgSrc}/face/star.png`"
    />
    <img
      class="photo-part photo-left"
      v-if="doubleMode && redLeft"
      :src="`${imgSrc}/face/red.png`"
    />
    <img class="photo-part photo-right" :src="`${imgSrc}/body.png`" />
    <img class="photo-part photo-right" :src="`${imgSrc}/dress/${dress}.png`" />
    <img class="photo-part photo-right" :src="`${imgSrc}/eye/${eye}${eyeColor}.png`" />
    <img class="photo-part photo-right" :src="`${imgSrc}/eyebrow/${eyebrow}${eyebrowColor}.png`" />
    <img class="photo-part photo-right" :src="`${imgSrc}/mouth/${mouth}${mouthColor}.png`" />
    <img
      class="photo-part photo-right"
      :src="`${imgSrc}/frontHair/${frontHair}${frontHairColor}.png`"
    />
    <img class="photo-part photo-right" v-if="hand" :src="`${imgSrc}/hand/${hand}.png`" />
    <img class="photo-part photo-right" v-if="ts" :src="`${imgSrc}/ts/${ts}.png`" />
    <img class="photo-part photo-right" v-if="heart" :src="`${imgSrc}/face/heart.png`" />
    <img class="photo-part photo-right" v-if="tear" :src="`${imgSrc}/face/tear.png`" />
    <img class="photo-part photo-right" v-if="star" :src="`${imgSrc}/face/star.png`" />
    <img class="photo-part photo-right" v-if="red" :src="`${imgSrc}/face/red.png`" />
  </div>
</template>

<style>
.photo-part {
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
