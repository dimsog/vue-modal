<template>
  <div>
    <div ref="$modal" class="modal" v-if="modalIsOpened">
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
const $header = ref(null);

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

    if ($header.value === null) {
      return;
    }

    $header.value.addEventListener('mousedown', (e) => {
      let x = e.clientX - $modal.value.getBoundingClientRect().left;
      let y = e.clientY - $modal.value.getBoundingClientRect().top;

      const move = function (e) {
        $modal.value.style.top = (e.pageY - y) + 'px';
        $modal.value.style.left = (e.pageX - x) + 'px';
      }

      document.addEventListener('mousemove', move);

      $header.value.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', move);
      })
    });
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
  font-family: sans-serif;
  position: absolute;
  z-index: 1000;
  background: #fff;
  border-radius: 8px;
  border: 1px solid rgba(30, 29, 29, 0.16);
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.10);
  overflow: hidden;

  .modal-header {
    display: flex;
    background: #f3f4f6;
    justify-content: space-between;
    align-items: center;
    user-select: none;

    .modal-header__title {
      padding: .7rem;
    }

    .modal-header__buttons {
      padding-right: .3rem;
      button {
        background: transparent;
        border: none;
      }
    }
  }

  .modal-body {
    padding: 1rem;
  }
}
</style>