import {MoveModalOptions} from "../Types/MoveModalOptions";

export default ($modal: HTMLElement, options: MoveModalOptions): void => {
    const $header = $modal.querySelector('.modal-header');
    $header?.addEventListener('pointerdown', (e: PointerEvent): void => {
        const x = e.clientX - $modal.getBoundingClientRect().left;
        const y = e.clientY - $modal.getBoundingClientRect().top;

        const move = function (e: PointerEvent) {
            let _y = (e.clientY - y);
            if (_y < 0) {
                _y = 0;
            }
            $modal.style.top = _y + 'px';
            $modal.style.left = (e.clientX - x) + 'px';
            document.body.style.userSelect = "none";
            // s####i love u!
            document.body.style.setProperty('-webkit-user-select', 'none');

            options.move({
                x: $modal.getBoundingClientRect().x,
                y: $modal.getBoundingClientRect().y,
                width: $modal.clientWidth,
                height: $modal.clientHeight
            })
        }

        document.addEventListener('pointermove', move);

        document.addEventListener('pointerup', () => {
            document.removeEventListener('pointermove', move);
            document.body.style.userSelect = "";
            // s####i love u!
            document.body.style.setProperty('-webkit-user-select', '');
        }, {
            once: true
        });
    });
}
