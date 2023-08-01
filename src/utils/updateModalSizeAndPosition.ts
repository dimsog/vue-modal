import { ModalPosition } from "../Types/ModalPosition";

export default ($modal: HTMLElement, modalPosition: ModalPosition) => {
    $modal.style.width = modalPosition.width + 'px';
    $modal.style.height = modalPosition.height + 'px';
    $modal.style.top = modalPosition.y !== null ? modalPosition.y + 'px' : (document.documentElement.clientHeight / 2 - $modal.clientHeight / 2) + 'px';
    $modal.style.left = modalPosition.x !== null ? modalPosition.x + 'px' : (document.documentElement.clientWidth / 2 - $modal.clientWidth / 2) + 'px';
}