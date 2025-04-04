type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {
    
    let timeoutID: Timeout | null = null;

    return function(...args) {

        if (timeoutID !== null) {
            clearTimeout(timeoutID);
        }
        timeoutID = setTimeout(
            () => {
                fn(...args)
            }, t
        )
    };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */