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
  front: string
  bg: string
  bgColor: string
  fw: string
  fwColor: string
  heart: boolean
  tear: boolean
  star: boolean
  red: boolean
}>()
</script>

<template>
  <div class="photo-sticker">
    <img class="photo-part" v-if="bg" :src="`${imgSrc}/bg/${bg}${bgColor}.png`" />
    <img class="photo-part" v-if="fw" :src="`${imgSrc}/fw/${fw}${fwColor}.png`" />
    <img class="photo-part" :src="`${imgSrc}/hair/${hair}${hairColor}.png`" />
    <img class="photo-part" :src="`${imgSrc}/body.png`" />
    <img class="photo-part" :src="`${imgSrc}/dress/${dress}.png`" />
    <img class="photo-part" :src="`${imgSrc}/eye/${eye}${eyeColor}.png`" />
    <img class="photo-part" :src="`${imgSrc}/eyebrow/${eyebrow}${eyebrowColor}.png`" />
    <img class="photo-part" :src="`${imgSrc}/mouth/${mouth}${mouthColor}.png`" />
    <img class="photo-part" :src="`${imgSrc}/frontHair/${frontHair}${frontHairColor}.png`" />
    <img class="photo-part" v-if="hand" :src="`${imgSrc}/hand/${hand}.png`" />
    <img class="photo-part" v-if="ts" :src="`${imgSrc}/ts/${ts}.png`" />
    <img class="photo-part" v-if="front" :src="`${imgSrc}/front/${front}.png`" />
    <img class="photo-part" v-if="heart" :src="`${imgSrc}/face/heart.png`" />
    <img class="photo-part" v-if="tear" :src="`${imgSrc}/face/tear.png`" />
    <img class="photo-part" v-if="star" :src="`${imgSrc}/face/star.png`" />
    <img class="photo-part" v-if="red" :src="`${imgSrc}/face/red.png`" />
  </div>
</template>

<style>
.photo-part {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: contain;
}
</style>
