/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 * debounce returns a function that, as long as it continues to be invoked, will not be triggered. The function will be called after it stops being called for N milliseconds. If `immediate` is passed, trigger the function on the leading edge, instead of the trailing.
 * @example
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 * 
 * const logImmediate = debounce(console.log, 100, true);
 * logImmediate('Hello'); // Logged at t=0ms
 * logImmediate('Hello'); // cancelled
 * logImmediate('Hello'); // cancelled
 * // Logged at t=100ms 
 */
var debounce = function(fn, t) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args, t);
        }, t);
    }
};

const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms  
