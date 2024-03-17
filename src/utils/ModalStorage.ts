import {ModalOptions} from "../Types/ModalOptions";

const modals = new Map<string, ModalOptions>();

const addModal = (name: string, options: ModalOptions): void => {
    modals.set(name, options);
}

const getModal = (name: string): ModalOptions | null => {
    const options = modals.get(name);
    if (options === undefined) {
        return null;
    }
    return options;
}

const deleteModal = (name: string): void => {
    modals.delete(name);
}

const getModals = (): Map<string, ModalOptions> => {
    return modals;
}

export {
    getModals,
    addModal,
    getModal,
    deleteModal
};
