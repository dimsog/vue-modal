# Vue 3 modal

### Installation
```bash
npm i @dimsog/vue-modal
```

### Usage
```vue
<script setup lang="ts">
  import "@dimsog/vue-modal/dist/style.css";
  import { Modal, ModalContent, open } from "@dimsog/vue-modal";
</script>

<template>
  <div>
    <Modal name="modal-name" title="Modal title">
      <ModalContent>
        Modal content
      </ModalContent>
    </Modal>

    <button @click="open('modal-name')">
      Open modal
    </button>
  </div>
</template>
```

### Demo and documentation
https://vuemodal.com
