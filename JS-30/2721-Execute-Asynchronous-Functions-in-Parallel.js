/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 * @description Executes an array of asynchronous functions in parallel and returns a promise that resolves with an array of results.
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;
        functions.forEach((fn, index) => {
            fn().then(result => {
                results[index] = result;
                completed++;
                if (completed === functions.length) {
                    resolve(results);
                }
            }).catch(error => {
                reject(error);
            });
        });
    });     
    
};

const promise = promiseAll([() => new Promise(res => res(42))])
promise.then(console.log); // [42]
 