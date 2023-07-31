<script lang="ts" setup>
import { onMounted, ref } from "vue";

const $backdrop = ref(null);
const emit = defineEmits(['close']);

const updateBackdropSize = (): void => {
  $backdrop.value.style.width = document.documentElement.clientWidth + 'px';
  $backdrop.value.style.height = document.documentElement.clientHeight + 'px';
}

const onCloseBackdrop = (): void => {
  emit('close');
  document.body.style.overflow = '';
}

onMounted((): void => {
  updateBackdropSize();

  window.addEventListener('resize', updateBackdropSize);
  document.body.style.overflow = 'hidden';
});
</script>

<template>
  <div ref="$backdrop" @click="onCloseBackdrop" class="backdrop"></div>
</template>

<style lang="scss" scoped>
.backdrop {
  position: absolute;
  z-index: 900;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .5);
}
</style>