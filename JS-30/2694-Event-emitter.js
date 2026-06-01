class EventEmitter {
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.events) {
            this.events = {};
        }
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
        return {
            unsubscribe: () => {
                this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);      
            }
        };  
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.events || !this.events[eventName]) {
            return [];
        }
        return this.events[eventName].map(callback => callback(...args));
    }
}

const emitter = new EventEmitter();
const sub1 = emitter.subscribe('event1', (x, y) => x + y);
const sub2 = emitter.subscribe('event1', (x, y) => x * y);

console.log(emitter.emit('event1', [2, 3])); // [5, 6]

sub1.unsubscribe();

console.log(emitter.emit('event1', [2, 3])); // [6]
/**
 * const emitter = new EventEmitter();
 *
 * const sub1 = emitter.subscribe('event1', (x, y) => x + y);
 * const sub2 = emitter.subscribe('event1', (x, y) => x * y);
 *
 * console.log(emitter.emit('event1', [2, 3])); // [5, 6]
 *
 * sub1.unsubscribe();
 *
 * console.log(emitter.emit('event1', [2, 3])); // [6]
 */ 