# Vue 3 modal

### Installation
```bash
npm i @dimsog/vue-modal
```

### Usage
```vue
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

<script setup lang="ts">
  import "@dimsog/vue-modal/dist/style.css";
  import { Modal, ModalContent, open } from "@dimsog/vue-modal";
</script>
```

### Demo and documentation
https://vuemodal.com
