/**
 * @param {Function} fn
 * @return {Object}     
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((acc, item) => {
        const key = fn(item);
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {});     
};  
const arr = [6.1, 4.2, 6.3];
const grouped = arr.groupBy(Math.floor);
console.log(grouped); // { '4': [ 4.2 ], '6': [ 6.1, 6.3 ] }
/**
 * const arr = [6.1, 4.2, 6.3];
 * const grouped = arr.groupBy(Math.floor);
 * console.log(grouped); // { '4': [ 4.2 ], '6': [ 6.1, 6.3 ] }
 */ 