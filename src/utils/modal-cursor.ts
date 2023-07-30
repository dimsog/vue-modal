import modalResizeType from "./modal-resize-type";

export default (mouseX: number, mouseY: number, rect: DOMRect): string => {
    switch (modalResizeType(mouseX, mouseY, rect)) {
        case 'left':
        case 'right':
            return 'col-resize';
        case 'top':
        case 'bottom':
            return 'row-resize';
        case 'top-left':
        case 'bottom-right':
            return 'nwse-resize';
        case 'top-right':
        case 'bottom-left':
            return 'nesw-resize';
        default:
            return '';
    }
}