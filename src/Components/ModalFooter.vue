<script lang="ts" setup>
import { ref, onMounted } from "vue";

const $footerNode = ref<HTMLElement|null>(null);
let showFooter = true;

onMounted((): void => {
    showFooter = $footerNode.value !== null && $footerNode.value.querySelectorAll('button').length > 0;
});
</script>

<template>
  <div ref="$footerNode" class="modal-footer" v-if="showFooter">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.modal-footer {
  text-align: right;
  padding: .5rem;
  background: #f3f4f6;
}

.modal.modal--theme-black {
  .modal-footer {
    background: #25262b;
  }
}
</style>
