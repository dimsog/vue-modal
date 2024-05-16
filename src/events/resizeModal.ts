import modalCursor from "../utils/modal-cursor";
import modalResizeType from "../utils/modal-resize-type";
import { ResizeModalOptions } from "../Types/ResizeModalOptions";

export default ($modal: HTMLElement, options: ResizeModalOptions) => {
    $modal.addEventListener('pointermove', (e) => {
        const rect = $modal.getBoundingClientRect();
        $modal.style.cursor = modalCursor(e.clientX, e.clientY, rect);
    });

    $modal.addEventListener('pointerdown', (e) => {
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

        document.addEventListener('pointermove', (e: PointerEvent) => {
            if (resizeType === null) {
                return;
            }

            e.stopPropagation();

            if (resizeType === 'left') {
                width = Math.max(originalWidth - (e.clientX - x), options.minWidth);
                left = originalRect.left + (originalWidth - width);
            }

            if (resizeType === 'right') {
                width = Math.max(originalWidth + (e.clientX - x), options.minWidth);
            }
            if (resizeType === 'top') {
                height = Math.max(originalHeight - (e.clientY - y), options.minHeight);
                top = originalRect.top + (originalHeight - height);
            }
            if (resizeType === 'bottom') {
                height = Math.max(originalHeight + (e.clientY - y), options.minHeight);
            }
            if (resizeType == 'top-left') {
                width = Math.max(originalWidth - (e.clientX - x), options.minWidth);
                left = originalRect.left + (originalWidth - width);

                height = Math.max(originalHeight - (e.clientY - y), options.minHeight);
                top = originalRect.top + (originalHeight - height);
            }
            if (resizeType == 'top-right') {
                width = Math.max(originalWidth + (e.clientX - x), options.minWidth);
                height = Math.max(originalHeight - (e.clientY - y), options.minHeight);
                top = originalRect.top + (originalHeight - height);
            }
            if (resizeType == 'bottom-left') {
                width = Math.max(originalWidth - (e.clientX - x), options.minWidth);
                height = Math.max(originalHeight + (e.clientY - y), options.minHeight);
                left = originalRect.left + (originalWidth - width);
            }
            if (resizeType == 'bottom-right') {
                width = Math.max(originalWidth + (e.clientX - x), options.minWidth);
                height = Math.max(originalHeight + (e.clientY - y), options.minHeight);
            }

            width = Math.round(width);
            height = Math.round(height);
            top = Math.round(top);
            left = Math.round(left);

            $modal.style.width = width + 'px';
            $modal.style.left = left + 'px';

            if (e.clientY >= 0) {
                $modal.style.height = height + 'px';
                $modal.style.top = top + 'px';
            }

            options.resize({
                x: $modal.getBoundingClientRect().x,
                y: $modal.getBoundingClientRect().y,
                width: $modal.clientWidth,
                height: $modal.clientHeight
            });
        });

        document.addEventListener('pointerup', () => {
            resizeType = null;
            document.body.style.userSelect = "none";
            // s####i love u!
            document.body.style.setProperty('-webkit-user-select', '');
        })
    });
}
