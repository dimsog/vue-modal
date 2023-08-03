import { ModalPosition } from "../Types/ModalPosition";

export default ($modal: HTMLElement, callback: (position: ModalPosition) => void): void => {
    const $header = $modal.querySelector('.modal-header');
    $header.addEventListener('mousedown', (e: MouseEvent) => {
        let x = e.clientX - $modal.getBoundingClientRect().left;
        let y = e.clientY - $modal.getBoundingClientRect().top;

        const move = function (e: MouseEvent) {
            $modal.style.top = (e.pageY - y) + 'px';
            $modal.style.left = (e.pageX - x) + 'px';

            callback({
                x: $modal.getBoundingClientRect().x,
                y: $modal.getBoundingClientRect().y,
                width: $modal.clientWidth,
                height: $modal.clientHeight
            })
        }

        document.addEventListener('mousemove', move);

        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', move);
        }, {
            once: true
        });
    });
}