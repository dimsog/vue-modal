import Modal from "./Components/Modal.vue";
import ModalFooter from "./Components/ModalFooter.vue";
import ModalContent from "./Components/ModalContent.vue";
import ModalButton from "./Components/ModalButton.vue";
import { getModal } from "./utils/ModalStorage";

const open = (modalName: string): void => {
    getModal(modalName)?.open();
}

const close = (modalName: string): void => {
    getModal(modalName)?.close();
}

export {
    Modal,
    ModalContent,
    ModalFooter,
    ModalButton,
    open,
    close
}