<script lang="ts" setup>
const emit = defineEmits(['close']);

const onCloseButtonClick = () => {
  emit('close');
};
</script>

<template>
  <button type="button" @click.prevent="onCloseButtonClick">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M18 6l-12 12"></path>
      <path d="M6 6l12 12"></path>
    </svg>
  </button>
</template>

<style lang="scss" scoped>
button {
  svg {
    color: #b2b2b2;
    &:hover {
      color: #949494;
    }
    &:active {
      color: #707070;
    }
  }
}
</style>
