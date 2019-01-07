export const requestIdleCallback = window.requestIdleCallback ||
function (cb, options) {
    options = options || {
        timeout: 100
    };
    options.timeout = options.timeout || 100;

    var start = Date.now();
    return setTimeout(function () {
        cb({
            didTimeout: false,
            timeRemaining: function () {
                return Math.max(0, 50 - (Date.now() - start));
            }
        })
    }, options.timeout);
}

export const cancelIdleCallback = window.cancelIdleCallback ||
function (id) {
    clearTimeout(id);
}