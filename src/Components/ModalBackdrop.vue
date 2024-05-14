<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";

const $backdrop = ref(null);
const emit = defineEmits(['close']);

const updateBackdropSize = (): void => {
  $backdrop.value.style.width = document.documentElement.clientWidth + 'px';
  $backdrop.value.style.height = document.documentElement.clientHeight + 'px';
}

const onCloseBackdrop = (): void => {
  emit('close');
}

onMounted((): void => {
  updateBackdropSize();

  window.addEventListener('resize', updateBackdropSize);
});

onUnmounted((): void => {
  window.removeEventListener('resize', updateBackdropSize);
})
</script>

<template>
  <div ref="$backdrop" @click="onCloseBackdrop" class="backdrop"></div>
</template>

<style lang="scss" scoped>
.backdrop {
  position: fixed;
  z-index: 900;
  top: 0;
  left: 0;
  background: #000;
  opacity: .5;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
