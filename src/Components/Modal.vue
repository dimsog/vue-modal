<template>
  <div>
    <div ref="$modal" class="modal" v-if="modalIsOpened">
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
import { onMounted, onUnmounted, ref, nextTick } from "vue";
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
  },
  width: {
    type: String,
    default: '600px'
  },
  height: {
    type: String,
    default: '400px'
  }
});

const $modal = ref(null);

const open = (): void => {
  modalIsOpened.value = true;

  nextTick((): void => {
    if ($modal.value === null) {
      return;
    }
    $modal.value.style.width = props.width;
    $modal.value.style.height = props.height;
    $modal.value.style.top = document.documentElement.clientHeight / 2 - $modal.value.clientHeight / 2;
    $modal.value.style.left = document.documentElement.clientWidth / 2 - $modal.value.clientWidth / 2;
  })
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
.modal {
  position: absolute;
  z-index: 1000;
  background: #fff;
  border-radius: 8px;
  border: 1px solid rgba(30, 29, 29, 0.16);
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.10);

  .modal-header {
    display: flex;

    .modal-header__title {
      padding: 1rem;
    }
  }

  .modal-body {
    padding: 1rem;
  }
}
</style>