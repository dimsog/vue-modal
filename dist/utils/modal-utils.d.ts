import { ModalPosition } from "../Types/ModalPosition";
declare const normalizeSizeFromProps: (size: string) => number;
declare const getStartupModalPosition: (width: number, height: number) => ModalPosition;
declare const getMaxZIndexOfModals: () => number;
declare const getScrollbarWidth: () => number;
export { normalizeSizeFromProps, getStartupModalPosition, getMaxZIndexOfModals, getScrollbarWidth, };
