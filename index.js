/**
 * Filter all of the undefineds out of the array.
 * You can define an isNotUndefined function to use with filter, or you can write an arrow function maybeUndefined => { ... }
 */
var maybeNumbers = [1, 2, undefined, 3, 4];
var isNotUndefined = function (element) {
    return element !== undefined;
};
var numbers = maybeNumbers.filter(function (element) { return isNotUndefined(element); });
console.log(numbers);
