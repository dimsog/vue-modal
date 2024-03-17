import { ModalOptions } from "../Types/ModalOptions";
declare const addModal: (name: string, options: ModalOptions) => void;
declare const getModal: (name: string) => ModalOptions | null;
declare const deleteModal: (name: string) => void;
declare const getModals: () => Map<string, ModalOptions>;
export { getModals, addModal, getModal, deleteModal };
