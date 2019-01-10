export const requestIdleCallback = (cb: any) => {
    if ('requestIdleCallback' in window) {
        return (<any>window).requestIdleCallback(cb);
    } else {

        let start = Date.now();
        return setTimeout(function () {
            cb({
                didTimeout: false,
                timeRemaining: function () {
                    return Math.max(0, 50 - (Date.now() - start));
                }
            })
        }, 10);
    }
};

export const cancelIdleCallback = (id: any) => {
    if ('requestIdleCallback' in window) {
        return (<any>window).cancelIdleCallback(id);
    } else {
        clearTimeout(id);
    }
};