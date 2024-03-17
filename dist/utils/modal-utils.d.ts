import { ModalPosition } from "../Types/ModalPosition";
declare const normalizeSizeFromProps: (size: string) => number;
declare const getStartupModalPosition: (width: number, height: number) => ModalPosition;
declare const getMaxZIndexOfModals: () => number;
export { normalizeSizeFromProps, getStartupModalPosition, getMaxZIndexOfModals, };
