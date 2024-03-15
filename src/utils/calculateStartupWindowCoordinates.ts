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

export {
    calculateX,
    calculateY,
};
