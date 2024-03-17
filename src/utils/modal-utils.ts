import { ModalPosition } from "../Types/ModalPosition";

const calculateX = (width: number): number => {
    return Math.round(document.documentElement.clientWidth / 2 - width / 2);
}

const calculateY = (height: number): number => {
    let y = Math.round(window.innerHeight / 2 - height / 2);
    if (y < 0) {
        y = 5;
    }
    return y;
}

const normalizeSizeFromProps = (size: string): number => {
    return Number(size.replace('px', ''));
}

const getStartupModalPosition = (width: number, height: number): ModalPosition => {
    return {
        x: calculateX(width),
        y: calculateY(height),
        width: width,
        height: height,
    }
}

export {
    normalizeSizeFromProps,
    getStartupModalPosition,
}
