export default (mouseX: number, mouseY: number, rect: DOMRect): string | null => {
    if (mouseX - rect.left > -10 && mouseX - rect.left < 10 && mouseY - rect.top > -10 && mouseY - rect.top < 10) {
        return 'top-left';
    }
    if (rect.right - mouseX > -10 && rect.right - mouseX < 10 && mouseY - rect.top > -10 && mouseY - rect.top < 10) {
        return 'top-right';
    }
    if (rect.bottom - mouseY > -10 && rect.bottom - mouseY < 10 && mouseX - rect.left > -10 && mouseX - rect.left < 10) {
        return 'bottom-left';
    }
    if (rect.bottom - mouseY > -10 && rect.bottom - mouseY < 10 && rect.right - mouseX > -10 && rect.right - mouseX < 10) {
        return 'bottom-right';
    }
    if (mouseX - rect.left > -5 && mouseX - rect.left < 5) {
        return 'left';
    }
    if (rect.right - mouseX > -5 && rect.right - mouseX < 5) {
        return 'right';
    }
    if (mouseY - rect.top > -5 && mouseY - rect.top < 5) {
        return 'top';
    }
    if (rect.bottom - mouseY > -5 && rect.bottom - mouseY < 5) {
        return 'bottom';
    }
    return null;
}