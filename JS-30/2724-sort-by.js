/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    const decorated = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        decorated[i] = { item: arr[i], key: fn(arr[i]) };
    }

    decorated.sort((a, b) => a.key - b.key);

    const result = new Array(arr.length);
    for (let i = 0; i < decorated.length; i++) {
        result[i] = decorated[i].item;
    }

    return result;
    /* return arr.slice().sort((a, b) => fn(a) - fn(b)); */
    // return arr.slice().sort((a, b) => {
    //     const valA = fn(a);
    //     const valB = fn(b);
    //     if (valA < valB) return -1;
    //     if (valA > valB) return 1;
    //     return 0;
    // });  
};

const arr = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }, { name: 'Charlie', age: 35 }];
const sorted = sortBy(arr, x => x.age);
console.log(sorted); // [ { name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Charlie', age: 35 } ]
/**
 * const arr = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }, { name: 'Charlie', age: 35 }];
 * const sorted = sortBy(arr, x => x.age);
 * console.log(sorted); // [ { name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Charlie', age: 35 } ]
 */ 