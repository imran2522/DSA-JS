/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 * Time Limit Approach:
1. The `timeLimit` function takes a function `fn` and a time limit `t` in milliseconds.
2. It returns an asynchronous function that accepts any number of arguments.
3. Inside the returned function, we can use `Promise.race` to run the original function `fn` and a timeout promise simultaneously.
4. If the original function resolves before the timeout, we return its result. If the timeout occurs first, we reject with a "Time Limit Exceeded" error.

This approach ensures that if the original function takes longer than the specified time limit, it will be terminated and an appropriate error message will be returned.        
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        let timerId;
        const timeoutPromise = new Promise((_, reject) => {
            timerId = setTimeout(() => reject("Time Limit Exceeded"), t);
        });
        try {
            return await Promise.race([fn(...args), timeoutPromise]);
        } finally {
            clearTimeout(timerId);
        }
    }
};


const limited = timeLimit(async (n) => { await new Promise(res => setTimeout(res, 100)); return n * n; }, 50);
limited(5).catch(console.log) // "Time Limit Exceeded" at t=50ms
limited(5).then(console.log).catch(console.log)  // never resolves within limit   