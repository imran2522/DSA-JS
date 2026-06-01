/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject);
    } else if (typeof obj === 'object' && obj !== null) {
        return Object.fromEntries(
            Object.entries(obj)
                .filter(([, value]) => Boolean(value))
                .map(([key, value]) => [key, compactObject(value)])
        );
    }
    return obj;
};

const obj = {
    a: 1,
    b: false,
    c: {
        d: 2,
        e: undefined,
        f: {
            g: 3,
            h: null
        }
    },
    i: [4, null, 5, undefined, 6]
};

console.log(compactObject(obj));
// Output:
// {
//     a: 1,
//     c: {
//         d: 2,
//         f: {
//             g: 3
//         }
//     },
//     i: [4, 5, 6]
// }
/**
 * const obj = {
 *     a: 1,
 *     b: null,
 *     c: {
 *         d: 2,
 *         e: undefined,
 *         f: {
 *             g: 3,
 *             h: null
 *         }
 *     },
 *     i: [4, null, 5, undefined, 6]
 * };
 *
 * console.log(compactObject(obj));
 * // Output:
 * // {
 * //     a: 1,
 * //     c: {
 * //         d: 2,
 * //         f: {
 * //             g: 3
 * //         }
 * //     },
 * //     i: [4, 5, 6]
 * // }
 */