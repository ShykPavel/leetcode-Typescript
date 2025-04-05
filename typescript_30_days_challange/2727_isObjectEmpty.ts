type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
    const isArray = Array.isArray(obj);

    if (isArray){
            const arrayLenght = obj.length;
            return arrayLenght === 0;
        } else { 
            const objectLenght = Object.keys(obj).length;
            return objectLenght === 0;
    };
};