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
  padding: .5rem 1rem;
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
</style>