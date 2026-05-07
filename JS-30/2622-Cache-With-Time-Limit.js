var TimeLimitedCache = function() {
    this.cache = new Map(); 
    this.timers = new Map();    
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const exists = this.cache.has(key);
    if (exists) clearTimeout(this.timers.get(key));
    this.cache.set(key, value);
    this.timers.set(key, setTimeout(() => {
        this.cache.delete(key);
        this.timers.delete(key);
    }, duration));
    return exists;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const result = this.cache.has(key) ? this.cache.get(key) : -1;
    console.log(result);
    return result;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    console.log(this.cache.size);
    return this.cache.size;
};

const timeLimitedCache = new TimeLimitedCache()
timeLimitedCache.set(1, 42, 1000); // false
timeLimitedCache.get(1) // 42
timeLimitedCache.count() // 1

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */