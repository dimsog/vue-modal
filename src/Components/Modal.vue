<script lang="ts" setup>
import { onMounted, onUnmounted, ref, nextTick } from "vue";
import {addModal, deleteModal, getModals} from "../utils/ModalStorage.js";
import resizeModal from "../events/resizeModal";
import moveModal from "../events/moveModal";
import updateModalSizeAndPosition from "../utils/updateModalSizeAndPosition";
import { ModalPosition } from "../Types/ModalPosition";

import ModalBackdrop from "./ModalBackdrop.vue";
import ModalCloseButton from "./ModalCloseButton.vue";
import {getMaxZIndexOfModals, getStartupModalPosition, normalizeSizeFromProps} from "../utils/modal-utils";

const modalIsOpened = ref(false);
const modalIsVisible = ref(false);
const modalIsActive = ref(false);

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
  },
  theme: {
    type: String,
    default: 'white'
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
  setTimeout(() => modalIsVisible.value = true, 10);

  nextTick(async () => {
    if ($modal.value === null || $headerWrapper.value === null) {
      return;
    }

    activate();

    $modal.value.style.zIndex = (getMaxZIndexOfModals() + 1).toString();
    $modal.value.style.minWidth = props.minWidth;
    $modal.value.style.minHeight = props.minHeight;

    updateModalSizeAndPosition($modal.value, modalPosition);
    if (props.resize) {
      resizeModal($modal.value, {
        resize: (position: ModalPosition): void => {
          modalPosition = position;
        },
      });
    }

    moveModal($modal.value, {
      move: (position: ModalPosition) => {
        modalPosition = position;
      }
    });
  });
};

const getZIndex = (): number => {
  return Number($modal.value?.style.zIndex ?? 1000);
}

const activate = (): void => {
  if ($modal.value === null || modalIsActive.value === true) {
    return;
  }
  for (const anotherModal of getModals().values()) {
    anotherModal.deactivate();
  }
  let zIndex = getMaxZIndexOfModals() + 1;
  modalIsActive.value = true;
  $modal.value.style.zIndex = zIndex.toString();
}

const deactivate = (): void => {
  modalIsActive.value = false;
  if ($modal.value !== null) {
    let zIndex = Number($modal.value.style.zIndex) - 1;
    if (zIndex < 1000) {
      zIndex = 1000;
    }
    $modal.value.style.setProperty('z-index', zIndex.toString());
  }
}

const close = (): void => {
  modalIsVisible.value = false;
  setTimeout(() => {
    modalIsOpened.value = false;
  }, 150);
}

const onCloseBackdrop = () => {
  if (!props.staticBackdrop) {
    close();
  }
}

onMounted(():void => {
  addModal(props.name, {
    open,
    close,
    activate,
    deactivate,
    getZIndex,
  });
});

onUnmounted((): void => {
  deleteModal(props.name);
});
</script>

<template>
  <div>
    <div @pointerdown="activate" ref="$modal" class="modal" :class="{'modal--hidden': !modalIsOpened, 'modal-visible': modalIsVisible, 'modal--theme-black': props.theme === 'black'}">
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

    <Transition>
      <modal-backdrop v-if="props.backdrop && modalIsOpened" @close="onCloseBackdrop"></modal-backdrop>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.modal--hidden {
  display: none !important;
}

.modal-visible {
  opacity: 1 !important;
}

.modal {
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  position: fixed;
  background: #fff;
  border-radius: 11px;
  border: 1px solid rgba(30, 29, 29, 0.16);
  box-shadow: 0 0 25px 0 rgba(0,0,0,0.20);
  overflow: hidden;
  opacity: 0;
  transition: opacity .15s ease-in-out 0s;

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

  &.modal--theme-black {
    background: #292a2e;
    color: #d0d0dc;
    .modal-header-wrapper {
      background: #25262b;
    }
  }
}
</style>
