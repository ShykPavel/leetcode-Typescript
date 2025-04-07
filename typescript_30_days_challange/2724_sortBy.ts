type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
    const arrForSort = [];

    for (let value of arr){
        arrForSort.push([value, fn(value)]);
    }

    const sortedArr =  arrForSort.sort((a, b) => a[1] - b[1]);

    return sortedArr.map(pair => pair[0]);
};