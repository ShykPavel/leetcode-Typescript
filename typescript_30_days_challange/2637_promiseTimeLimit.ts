type Fn = (...params: any[]) => Promise<any>;

    function timeLimit(fn: Fn, t: number): Fn {

        return async function(...args) {
            const fnPromise = fn(...args);
            
            const cancelFn = new Promise((_, reject) => {
                setTimeout(() => {
                    reject('Time Limit Exceeded');
            }, t);
            });

            return Promise.race([fnPromise, cancelFn]);
        };
    };

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

/**
 * Как это сделать?
Ты создаёшь два промиса:

Один оборачивает fn и выполняется, когда fn завершается.

Другой ждёт t миллисекунд и затем reject("Time Limit Exceeded").

Дальше используешь Promise.race(), чтобы выбрать, кто сработает первым.
 */