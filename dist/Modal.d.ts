import Modal from "./Components/Modal.vue";
import ModalFooter from "./Components/ModalFooter.vue";
import ModalContent from "./Components/ModalContent.vue";
import ModalButton from "./Components/ModalButton.vue";
declare const open: (modalName: string) => void;
declare const close: (modalName: string) => void;
export { Modal, ModalContent, ModalFooter, ModalButton, open, close };
