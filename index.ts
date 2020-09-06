/**
 * Filter all of the undefineds out of the array. 
 * You can define an isNotUndefined function to use with filter, or you can write an arrow function maybeUndefined => { ... }
 */

const maybeNumbers: (number | undefined)[] = [1, 2, undefined, 3, 4];

const isNotUndefined = (element: number | undefined) => {
    return element !== undefined;
}

const numbers: number[] = maybeNumbers.filter(element => isNotUndefined(element));

console.log(numbers);