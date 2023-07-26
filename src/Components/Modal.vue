<template>
  <div>
    <div class="modal">
      <div class="modal-header">
        <div class="modal-header__title">
          {{ title }}
        </div>
        <div class="modal-header__buttons">

        </div>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import { addModal, deleteModal } from "../utils/ModalStorage.js";

const modalIsOpened = ref(false);
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: false,
    default: null
  }
});

const open = (): void => {
  modalIsOpened.value = true;
};

const close = (): void => {
  modalIsOpened.value = false;
}

onMounted(():void => {
  addModal(props.name, {
    open,
    close
  });
});

onUnmounted((): void => {
  deleteModal(props.name);
});
</script>

<style lang="scss" scoped>

</style>