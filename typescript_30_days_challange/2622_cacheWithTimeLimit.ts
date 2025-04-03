class TimeLimitedCache {
    
    private storage: Map<number, {value: number, timeoutID: any}>

    constructor() {
        this.storage = new Map();
    }
    
    set(key: number, value: number, duration: number): boolean {
        const keyExist = this.storage.has(key);

        if(keyExist){
            clearTimeout(this.storage.get(key)!.timeoutID);
        }

        const timeoutID  = setTimeout(() => {
            this.storage.delete(key);
            },
        duration);

        this.storage.set(key, {value, timeoutID});

        return keyExist;
    }
    
    get(key: number): number {
        return this.storage.get(key)?.value ?? -1;
    }
    
    count(): number {
        return this.storage.size;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */