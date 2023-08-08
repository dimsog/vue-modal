<template>
  <div ref="$footerNode" v-if="showFooter">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const $footerNode = ref<HTMLElement|null>(null);
let showFooter = true;

onMounted((): void => {
    showFooter = $footerNode.value !== null && $footerNode.value.querySelectorAll('button').length > 0;
});
</script>