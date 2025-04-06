interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


    Array.prototype.groupBy = function(fn) {
        const grouped: Record<string, unknown[]> = {};

        for (let i = 0; i < this.length; i++) {
            const item = this[i];
            const key = fn(item);
            if (key in grouped){
                grouped[key].push(item);
            } else {
                grouped[key] = [item];
            }
        }

        return grouped;
    }

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

// Input: 
// Array = [
//   {"id":"1"},
//   {"id":"1"},
//   {"id":"2"}
// ], 
// fn = function (item) { 
//   return item.id; 
// }
// Output: 
// { 
//   "1": [{"id": "1"}, {"id": "1"}],   
//   "2": [{"id": "2"}] 
// }