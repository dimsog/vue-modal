export type ModalOptions = {
    open: () => void,
    close: () => void,
    activate: () => void,
    deactivate: () => void,
    getZIndex: () => number,
}
