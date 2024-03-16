import modalCursor from "../utils/modal-cursor";
import modalResizeType from "../utils/modal-resize-type";
import { ModalPosition } from "../Types/ModalPosition";

interface Callback {
    (modalPosition: ModalPosition): void
}

export default ($modal: HTMLElement, callback: Callback) => {
    $modal.addEventListener('mousemove', (e) => {
        const rect = $modal.getBoundingClientRect();
        $modal.style.cursor = modalCursor(e.clientX, e.clientY, rect);
    });

    $modal.addEventListener('mousedown', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        const originalRect = $modal.getBoundingClientRect();
        let resizeType = modalResizeType(x, y, originalRect);

        if (resizeType === null) {
            return;
        }

        const originalWidth = $modal.clientWidth;
        const originalHeight = $modal.clientHeight;
        let width = originalWidth;
        let height = originalHeight;
        let top = originalRect.top;
        let left = originalRect.left;

        document.body.style.userSelect = "none";
        // s####i love u!
        document.body.style.setProperty('-webkit-user-select', 'none');

        document.addEventListener('mousemove', (e: MouseEvent) => {
            if (resizeType === null) {
                return;
            }
            if (resizeType === 'left') {
                left = originalRect.left + (e.clientX - x);
                width = originalWidth - (e.clientX - x);
            }
            if (resizeType === 'right') {
                width = originalWidth + (e.clientX - x);
            }
            if (resizeType === 'top') {
                top = originalRect.top + (e.clientY - y);
                height = originalHeight - (e.clientY - y);
            }
            if (resizeType === 'bottom') {
                height = originalHeight + (e.clientY - y);
            }
            if (resizeType == 'top-left') {
                left = originalRect.left + (e.clientX - x);
                width = originalWidth - (e.clientX - x);
                top = originalRect.top + (e.clientY - y);
                height = originalHeight - (e.clientY - y);
            }
            if (resizeType == 'top-right') {
                width = originalWidth + (e.clientX - x);
                top = originalRect.top + (e.clientY - y);
                height = originalHeight - (e.clientY - y);
            }
            if (resizeType == 'bottom-left') {
                left = originalRect.left + (e.clientX - x);
                width = originalWidth - (e.clientX - x);
                height = originalHeight + (e.clientY - y);
            }
            if (resizeType == 'bottom-right') {
                width = originalWidth + (e.clientX - x);
                height = originalHeight + (e.clientY - y);
            }

            $modal.style.width = width + 'px';
            $modal.style.left = left + 'px';

            if (e.clientY >= 0) {
                $modal.style.height = height + 'px';
                $modal.style.top = top + 'px';
            }

            callback({
                x: $modal.getBoundingClientRect().x,
                y: $modal.getBoundingClientRect().y,
                width: $modal.clientWidth,
                height: $modal.clientHeight
            });
        });

        document.addEventListener('mouseup', () => {
            resizeType = null;
            document.body.style.userSelect = "none";
            // s####i love u!
            document.body.style.setProperty('-webkit-user-select', '');
        })
    });
}
