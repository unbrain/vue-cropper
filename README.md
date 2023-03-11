# vue-cropper

[Cropperjs](https://github.com/fengyuanchen/cropperjs) as Vue3 component

## Docs

- [Cropperjs](https://github.com/fengyuanchen/cropperjs)

## Installation

Install via pnpm

```
pnpm install vue-cropper-next
```

## Quick Example

```typescript
import { VueCropper } from '../dist/vue-cropper.js';
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

<template>
  <VueCropper :style="containerStyle" src="https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg" :options="curOptions" ref="container" />
</template>

<style scoped></style>
```
