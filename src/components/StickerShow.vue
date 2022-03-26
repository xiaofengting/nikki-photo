<script setup lang="ts">
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
    <img class="photo-part" v-if="bg" :src="`/assets/bg/${bg}${bgColor}.png`" />
    <img class="photo-part" v-if="fw" :src="`/assets/fw/${fw}${fwColor}.png`" />
    <img class="photo-part" :src="`/assets/hair/${hair}${hairColor}.png`" />
    <img class="photo-part" src="/assets/body.png" />
    <img class="photo-part" :src="`/assets/dress/${dress}.png`" />
    <img class="photo-part" :src="`/assets/eye/${eye}${eyeColor}.png`" />
    <img class="photo-part" :src="`/assets/eyebrow/${eyebrow}${eyebrowColor}.png`" />
    <img class="photo-part" :src="`/assets/mouth/${mouth}${mouthColor}.png`" />
    <img class="photo-part" :src="`/assets/frontHair/${frontHair}${frontHairColor}.png`" />
    <img class="photo-part" v-if="hand" :src="`/assets/hand/${hand}.png`" />
    <img class="photo-part" v-if="ts" :src="`/assets/ts/${ts}.png`" />
    <img class="photo-part" v-if="front" :src="`/assets/front/${front}.png`" />
    <img class="photo-part" v-if="heart" :src="`/assets/face/heart.png`" />
    <img class="photo-part" v-if="tear" :src="`/assets/face/tear.png`" />
    <img class="photo-part" v-if="star" :src="`/assets/face/star.png`" />
    <img class="photo-part" v-if="red" :src="`/assets/face/red.png`" />
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
