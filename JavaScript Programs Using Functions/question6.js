// Question
// Write a function uniqueElements(arr) that takes an array of numbers as input and returns a new array containing only the unique elements from the input array. The order of the unique elements in the output array should match their first appearance in the input array.
// EXAMPLE
// console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
// console.log(uniqueElements([5, 5, 5, 1, 2, 3, 3])); // Output: [5, 1, 2, 3]
// console.log(uniqueElements([])); // Output: []


//ANSWER:-
function uniqueElements(arr) {
    const uniqueArray = [];
    const seen = new Set();

    for (const element of arr) {
        if (!seen.has(element)) {
            seen.add(element);
            uniqueArray.push(element);
        }
    }

    return uniqueArray;
}
