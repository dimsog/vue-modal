import { ModalPosition } from "../Types/ModalPosition";

export default ($modal: HTMLElement, callback: (position: ModalPosition) => void): void => {
    const $header = $modal.querySelector('.modal-header');
    $header?.addEventListener('mousedown', (e: MouseEvent): void => {
        const x = e.clientX - $modal.getBoundingClientRect().left;
        const y = e.clientY - $modal.getBoundingClientRect().top;

        const move = function (e: MouseEvent) {
            let _y = (e.clientY - y);
            if (_y < 0) {
                _y = 0;
            }
            $modal.style.top = _y + 'px';
            $modal.style.left = (e.clientX - x) + 'px';
            document.body.style.userSelect = "none";
            // s####i love u!
            document.body.style.setProperty('-webkit-user-select', 'none');

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
            document.body.style.userSelect = "";
            // s####i love u!
            document.body.style.setProperty('-webkit-user-select', '');
        }, {
            once: true
        });
    });
}
