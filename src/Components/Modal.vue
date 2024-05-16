<script lang="ts" setup>
import { onMounted, onUnmounted, ref, nextTick } from "vue";
import {addModal, deleteModal, getModals} from "../utils/ModalStorage.js";
import resizeModal from "../events/resizeModal";
import moveModal from "../events/moveModal";
import updateModalSizeAndPosition from "../utils/updateModalSizeAndPosition";
import { ModalPosition } from "../Types/ModalPosition";

import ModalBackdrop from "./ModalBackdrop.vue";
import ModalCloseButton from "./ModalCloseButton.vue";
import {getMaxZIndexOfModals, getStartupModalPosition, normalizeSizeFromProps, getScrollbarWidth} from "../utils/modal-utils";

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

const $modal = ref<HTMLElement>();
const $headerWrapper = ref<HTMLElement>();
const $header = ref<HTMLElement>();

let modalPosition: ModalPosition = getStartupModalPosition(
    normalizeSizeFromProps(props.width),
    normalizeSizeFromProps(props.height),
);

const open = ($modal: HTMLElement) => {
  return () => {
    const scrollbarWith = getScrollbarWidth();
    if (scrollbarWith > 0) {
      document.body.style.paddingRight = scrollbarWith + 'px';
    }
    document.body.style.overflow = 'hidden';

    modalIsOpened.value = true;
    setTimeout(() => modalIsVisible.value = true, 10);

    nextTick(async () => {
      activate($modal)();

      $modal.style.zIndex = (getMaxZIndexOfModals() + 1).toString();
      $modal.style.minWidth = props.minWidth;
      $modal.style.minHeight = props.minHeight;

      updateModalSizeAndPosition($modal, modalPosition);
      if (props.resize) {
        resizeModal($modal, {
          minWidth: normalizeSizeFromProps(props.minWidth),
          minHeight: normalizeSizeFromProps(props.minHeight),
          resize: (position: ModalPosition): void => {
            modalPosition = position;
          },
        });
      }

      moveModal($modal, {
        move: (position: ModalPosition) => {
          modalPosition = position;
        }
      });
    });
  }
};

const getZIndex = ($modal: HTMLElement) => {
  return (): number => {
    return Number($modal.style.zIndex ?? 1000);
  }
}

const activate = ($modal: HTMLElement) => {
  return () => {
    if (modalIsActive.value === true) {
      return;
    }
    for (const anotherModal of getModals().values()) {
      anotherModal.deactivate();
    }
    let zIndex = getMaxZIndexOfModals() + 1;
    modalIsActive.value = true;
    $modal.style.zIndex = zIndex.toString();
  }
}

const deactivate = ($modal: HTMLElement) => {
  return (): void => {
    modalIsActive.value = false;
    let zIndex = Number($modal.style.zIndex) - 1;
    if (zIndex < 1000) {
      zIndex = 1000;
    }
    $modal.style.setProperty('z-index', zIndex.toString());
  }
}

const close = () => {
    modalIsVisible.value = false;
    document.body.style.paddingRight = '';
    document.body.style.overflow = '';
    setTimeout(() => {
      modalIsOpened.value = false;
    }, 150);
}

const onCloseBackdrop = () => {
  if (!props.staticBackdrop) {
    close();
  }
}

const onActivateModal = () => {
  activate($modal.value)();
}

onMounted(():void => {
  addModal(props.name, {
    open: open($modal.value),
    close,
    activate: activate($modal.value),
    deactivate: deactivate($modal.value),
    getZIndex: getZIndex($modal.value),
  });
});

onUnmounted((): void => {
  deleteModal(props.name);
});
</script>

<template>
  <div>
    <div @pointerdown="onActivateModal" ref="$modal" class="modal" :class="{'modal--hidden': !modalIsOpened, 'modal-visible': modalIsVisible, 'modal--theme-black': props.theme === 'black'}">
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
        line-height: 0;
        button {
          line-height: 0;
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
