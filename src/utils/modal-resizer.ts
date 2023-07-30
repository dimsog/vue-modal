import modalCursor from "./modal-cursor";
import modalResizeType from "./modal-resize-type";

export default ($header: HTMLElement, $modal: HTMLElement) => {
    let isMoving = false;
    $modal.addEventListener('mousemove', (e) => {
        if (isMoving) {
            return;
        }
        const rect = $modal.getBoundingClientRect();
        $modal.style.cursor = modalCursor(e.clientX, e.clientY, rect);
    });

    $modal.addEventListener('mousedown', (e) => {
        if (isMoving) {
            return;
        }
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

        $modal.style.userSelect = 'none';

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
            $modal.style.height = height + 'px';
            $modal.style.left = left + 'px';
            $modal.style.top = top + 'px';
        });

        $modal.addEventListener('mouseup', () => {
            resizeType = null;
            $modal.style.userSelect = '';
        })
    });

    $header.addEventListener('mousedown', (e) => {
        let x = e.clientX - $modal.getBoundingClientRect().left;
        let y = e.clientY - $modal.getBoundingClientRect().top;
        isMoving = true;

        const move = function (e: MouseEvent) {
            $modal.style.top = (e.pageY - y) + 'px';
            $modal.style.left = (e.pageX - x) + 'px';
        }

        document.addEventListener('mousemove', move);

        $header.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', move);
            isMoving = false;
        })
    });
}