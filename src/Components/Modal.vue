<script lang="ts" setup>
import { onMounted, onUnmounted, ref, nextTick } from "vue";
import { addModal, deleteModal } from "../utils/ModalStorage.js";
import resizeModal from "../events/resizeModal";
import moveModal from "../events/moveModal";
import updateModalSizeAndPosition from "../utils/updateModalSizeAndPosition";
import { ModalPosition } from "../Types/ModalPosition";

import ModalBackdrop from "./ModalBackdrop.vue";
import ModalCloseButton from "./ModalCloseButton.vue";
import {getStartupModalPosition, normalizeSizeFromProps} from "../utils/modal-utils";

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
  minWidth: {
    type: String,
    default: '200px',
  },
  width: {
    type: String,
    default: '600px'
  },
  minHeight: {
    type: String,
    default: '200px',
  },
  height: {
    type: String,
    default: '400px'
  },
  backdrop: {
    type: Boolean,
    default: false
  },
  staticBackdrop: {
    type: Boolean,
    default: false,
  },
  resize: {
    type: Boolean,
    default: true
  }
});

const $modal = ref<HTMLElement | null>(null);
const $headerWrapper = ref<HTMLElement | null>(null);
const $header = ref<HTMLElement | null>(null);
let modalPosition: ModalPosition;

const open = (): void => {
  modalPosition = modalPosition || getStartupModalPosition(
      normalizeSizeFromProps(props.width),
      normalizeSizeFromProps(props.height),
  );
  modalIsOpened.value = true;

  nextTick(async () => {
    if ($modal.value === null || $headerWrapper.value === null) {
      return;
    }

    $modal.value.style.minWidth = props.minWidth;
    $modal.value.style.minHeight = props.minHeight;

    updateModalSizeAndPosition($modal.value, modalPosition);
    if (props.resize) {
      resizeModal($modal.value, (position: ModalPosition): void => {
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

const onCloseBackdrop = () => {
  if (!props.staticBackdrop) {
    close();
  }
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
            <ModalCloseButton
              @close="close"
            ></ModalCloseButton>
          </div>
        </div>
      </div>
      <slot></slot>
    </div>

    <modal-backdrop v-if="props.backdrop && modalIsOpened" @close="onCloseBackdrop"></modal-backdrop>
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
  box-shadow: 0 0 25px 0 rgba(0,0,0,0.20);
  overflow: hidden;

  .modal-header-wrapper {
    background: #f3f4f6;
    padding: .3rem .5rem;
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
