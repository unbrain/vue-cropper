<script setup lang="ts">
// import { VueCropper } from "./components/VueCropper";
import { VueCropper } from '../dist/vue-cropper.js';
import ImgUrl from './assets/005N9ag4ly1hbtu38y3dqj34tc2uy4qr.jpg';
import 'cropperjs/dist/cropper.css';
import { ref } from "vue";

const containerStyle = {
  display: 'block',
  'max-width': '80vw',
  height: '60vh'
}

const container = ref();

const curOptions: Cropper.Options = {
  viewMode: 1,
  scalable: false,
  zoomOnWheel: false,
  zoomable: false,
  rotatable: false,
  ready: () => {
    console.log('ready');
    const cropper = container.value.cropper;
    console.log(cropper.getCroppedCanvas().toDataURL());
  }
}
</script>

<template>
  <VueCropper :style="containerStyle" :src="ImgUrl" :options="curOptions" ref="container" />
</template>

<style scoped></style>
