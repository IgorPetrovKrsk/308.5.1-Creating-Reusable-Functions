// //Part 1: Thinking Functionally
// function arraySum(array) {
//     let sum = 0;
//     for (let num of array) {
//         sum += num
//     }
//     return sum;
// }

// function arrayAvarage(array) {
//     let sum = arraySum(array);
//     return sum / array.length;
// }

// function arrayLongestString(array) {
//     let longestString = ``;
//     for (str of array) {
//         longestString = (str.length > longestString.length) ? str : longestString;
//     }
//     return longestString;
// }

// function arrayStringsLongerThan(array, minLenght = 0) {
//     let newArray = [];
//     for (str of array) {
//         if (str.length > minLenght) {
//             newArray.push(str); //since working with primitive type here it will be passed by value
//         }
//     }
//     return newArray;
// }

// function recursion(currentNumber, neededNumber) {
//     console.log(`Current number is ${currentNumber}`);
//     if (currentNumber < neededNumber) {
//         recursion(currentNumber + 1, neededNumber);
//     } else if (currentNumber == neededNumber) {
//         console.log(`Needed number has been reached`);
//     }
// }

// let testArray = [20, 45, -10, 0, 0, 3, 7, 9, 12, 55, 55];
// console.log(`Test array`);
// console.log(testArray);
// console.log(`Sum of numbers in array`);
// console.log(arraySum(testArray));
// console.log(`Avarage of array`);
// console.log(arrayAvarage(testArray));

// console.log(`-------------------------------------------------------------`);

// let testStringArray = [`Quantum`, `Lantern`, `Mosaic`, `Velocity`, `Echo`, `Avalanche`, `Timber`, `Horizon`, `Circuit`, `Glacier`, `Orbit`, `Nimbus`, `Forge`, `Ember`, `Zenith`, ``];
// console.log(`Test string array`);
// console.log(testStringArray);
// console.log(`The longest string in array`);
// console.log(arrayLongestString(testStringArray));
// console.log(`Words in array longer then 3`);
// console.log(arrayStringsLongerThan(testStringArray, 3));
// console.log(`Words in array longer then 5`);
// console.log(arrayStringsLongerThan(testStringArray, 5));
// console.log(`Words in array longer then 7`);
// console.log(arrayStringsLongerThan(testStringArray, 7));
// console.log(`-------------------------------------------------------------`);

// recursion(1, 20);

//Part 2: Thinking Methodically
let testData = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }];
console.log(testData);
testData.sort((a,b) => {a.age - b.age});
console.log('Data after sorting');
console.log(testData);
