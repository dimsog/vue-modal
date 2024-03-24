<template>
  <button type="button">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
button {
  background: #fff;
  border: 1px solid #e5e8ec;
  padding: .3rem 1rem;
  border-radius: 5px;
  outline: none;
  user-select: none;
  margin-left: .5rem;
  &:hover {
    background: #f6f6f8;
    border: 1px solid #e2e6ea;
  }
  &:active {
    background: #e8eaec;
    border: 1px solid #cbd1d9;
  }
}
.modal.modal--theme-black {
  .modal-footer {
    button {
      background: #48484f;
      border-color: #48484f;
      color: #d0d0dc;
      &:hover {
        background: #575760;
        border-color: #575760;
      }
      &:active {
        background: #4f4f57;
        border-color: #4f4f57;
      }
    }
  }
}
</style>
