type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    const arrays = arr.slice();

    let chunkedArray = [];

    for (let i = 0; i < arrays.length; i+= size) {
        chunkedArray.push(arrays.slice(i, i + size));
      }
    
      return chunkedArray;
};