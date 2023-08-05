import Modal from "./Components/Modal.vue";
import { getModal } from "./utils/ModalStorage";

const open = (modalName: string): void => {
    getModal(modalName)?.open();
}

const close = (modalName: string): void => {
    getModal(modalName)?.close();
}

export {
    Modal,
    open,
    close
}