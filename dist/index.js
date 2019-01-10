export var requestIdleCallback = function (cb) {
    if ('requestIdleCallback' in window) {
        return window.requestIdleCallback(cb);
    }
    else {
        var start_1 = Date.now();
        return setTimeout(function () {
            cb({
                didTimeout: false,
                timeRemaining: function () {
                    return Math.max(0, 50 - (Date.now() - start_1));
                }
            });
        }, 10);
    }
};
export var cancelIdleCallback = function (id) {
    if ('requestIdleCallback' in window) {
        return window.cancelIdleCallback(id);
    }
    else {
        clearTimeout(id);
    }
};
