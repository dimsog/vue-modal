import Modal from "./Components/Modal.vue";
import { getModal } from "./utils/ModalStorage";

const open = (modalName): void => {
    getModal(modalName)?.open();
}

const close = (modalName) => {
    getModal(modalName)?.close();
}

export {
    Modal,
    open,
    close
}