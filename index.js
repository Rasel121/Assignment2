// 1. findMax - Returns the largest number in an array
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log("1. findMax:", findMax([3, 7, 2, 9, 4])); // 9

// 2. countWords - Returns the number of words in a string
function countWords(str) {
    if (str.trim() === "") return 0;
    return str.trim().split(/\s+/).length;
}
console.log("2. countWords:", countWords("Hello Devs, welcome to JS!")); // 5

// 3. calculateDifference - Returns difference between two numbers
function calculateDifference(a, b) {
    return a - b;
}
console.log("3. calculateDifference:", calculateDifference(10, 4)); // 6

// 4. filterEvenNumbers - Returns an array of even numbers
function filterEvenNumbers(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log("4. filterEvenNumbers:", filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2,4,6]

// 5. sortArrayDescending - Returns array sorted in descending order
function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}
console.log("5. sortArrayDescending:", sortArrayDescending([5, 2, 9, 1, 7])); // [9,7,5,2,1]

// 6. isLeapYear - Returns true if year is leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("6. isLeapYear 2024:", isLeapYear(2024)); // true
console.log("6. isLeapYear 1900:", isLeapYear(1900)); // false
console.log("6. isLeapYear 2000:", isLeapYear(2000)); // true

// 7. reverseString - Returns reversed string
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("7. reverseString:", reverseString("Hello")); // "olleH"

// 8. sumArray - Returns total sum of array elements
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log("8. sumArray:", sumArray([1, 2, 3, 4])); // 10
