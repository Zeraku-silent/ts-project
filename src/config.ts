export const debounce = (callBack, delay = 1000) => {
    let timeout: number;

    return (arg) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callBack(arg);
        }, delay);
    };
};
