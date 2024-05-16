import { ModalPosition } from "./ModalPosition";
export type ResizeModalOptions = {
    minWidth: number;
    minHeight: number;
    resize: (position: ModalPosition) => void;
};
