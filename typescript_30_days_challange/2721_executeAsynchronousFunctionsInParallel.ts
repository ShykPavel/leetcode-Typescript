type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    const results: T[] = [];
    let resolvedCount = 0;

    return new Promise((resolve, reject) => {
        if (functions.length === 0) resolve([]);

        for (let i = 0; i < functions.length; i++) {
            functions[i]().then((result: T) => {
                results[i] = result;
                resolvedCount++;

                if (resolvedCount === functions.length) {
                    resolve(results);
                }
            }).catch(reject);
        }
    });
}

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */