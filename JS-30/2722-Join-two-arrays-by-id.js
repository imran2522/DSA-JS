/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const map = new Map();
    for (const item of arr1) {
        map.set(item.id, item);
    }
    for (const item of arr2) {
        if (map.has(item.id)) {
            // Merge the existing object with the new one
            const merged = { ...map.get(item.id), ...item };
            // Update the map with the merged object
            map.set(item.id, merged);
        } else {
            map.set(item.id, item);
        }
    }
    return Array.from(map.values()).sort((a, b) => a.id - b.id);
    
};
const arr1 = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
const arr2 = [{ id: 1, age: 30 }, { id: 3, name: 'Charlie' }];
const result = join(arr1, arr2);
console.log(result); // [ { id: 1, name: 'Alice', age: 30 }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' } ]
/**
 * const arr1 = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
 * const arr2 = [{ id: 1, age: 30 }, { id: 3, name: 'Charlie' }];
 * const result = join(arr1, arr2);
 * console.log(result); // [ { id: 1, name: 'Alice', age: 30 }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' } ]
 */ 