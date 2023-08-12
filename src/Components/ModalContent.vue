<template>
  <div class="modal-body">
    <div class="modal-body__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.modal-body {
  padding: .7rem;
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  overflow-y: hidden;
  .modal-body__content {
    height: 100%;
    overflow-y: scroll;
  }
}
</style>