<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import Cropper from "cropperjs";
onMounted(() => {
  cropper.value = new Cropper(image.value, props.options);
});

onUnmounted(() => {
  cropper.value.destroy();
});
const props = defineProps<{ src: string,  options?: Cropper.Options }>();
const image = ref();
let cropper = ref();



defineExpose({
  cropper,
})
</script>

<template>
  <div>
    <img ref="image" :src="src" />
  </div>
</template>
