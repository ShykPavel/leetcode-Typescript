interface Array<T> {
    last(): T | -1;
}

Array.prototype.last = function() {
    const arrLenght = this.length;

    if (arrLenght === 0){
        return -1
    };

    return this[arrLenght - 1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
