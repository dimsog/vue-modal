<script lang="ts" setup>
import ModalBackdrop from "./ModalBackdrop.vue";

import { onMounted, onUnmounted, ref, nextTick } from "vue";
import { addModal, deleteModal } from "../utils/ModalStorage.js";
import resizeModal from "../events/resizeModal";
import moveModal from "../events/moveModal";
import updateModalSizeAndPosition from "../utils/updateModalSizeAndPosition";
import { ModalPosition } from "../Types/ModalPosition";
import ModalFooter from "./ModalFooter.vue";

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
  },
  backdrop: {
    type: Boolean,
    default: false
  },
  resize: {
    type: Boolean,
    default: true
  }
});

const $modal = ref<HTMLElement | null>(null);
const $headerWrapper = ref<HTMLElement | null>(null);
const $header = ref<HTMLElement | null>(null);
let modalPosition: ModalPosition | null = null;

const open = (): void => {
  modalPosition = modalPosition || {
    x: document.documentElement.clientWidth / 2 - Number(props.width.replace('px', '')) / 2,
    y: window.innerHeight / 2 - Number(props.height.replace('px', '')) / 2,
    width: Number(props.width.replace('px', '')),
    height: Number(props.height.replace('px', ''))
  };
  modalIsOpened.value = true;

  nextTick(async () => {
    if ($modal.value === null || $headerWrapper.value === null) {
      return;
    }

    updateModalSizeAndPosition($modal.value, modalPosition);
    if (props.resize) {
      resizeModal($modal.value, (position: ModalPosition) => {
        modalPosition = position;
      });
    }
    moveModal($modal.value, (position: ModalPosition) => {
      modalPosition = position;
    })
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

<template>
  <div>
    <div ref="$modal" class="modal" :class="{'modal--hidden': !modalIsOpened}">
      <div ref="$headerWrapper" class="modal-header-wrapper">
        <div ref="$header" class="modal-header">
          <div class="modal-header__title">
            {{ title }}
          </div>
          <div class="modal-header__buttons">
            <button type="button" @click.prevent="close">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M18 6l-12 12"></path>
                <path d="M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <slot></slot>
    </div>

    <modal-backdrop v-if="props.backdrop && modalIsOpened" @close="close"></modal-backdrop>
  </div>
</template>

<style lang="scss" scoped>
.modal--hidden {
  display: none !important;
}
.modal {
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  position: fixed;
  z-index: 1000;
  background: #fff;
  border-radius: 8px;
  border: 1px solid rgba(30, 29, 29, 0.16);
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.10);
  overflow: hidden;

  .modal-header-wrapper {
    background: #f3f4f6;
    padding: .5rem .7rem;
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      user-select: none;

      .modal-header__buttons {
        button {
          background: transparent;
          border: none;
          padding: 0;
        }
      }
    }
  }
}
</style>