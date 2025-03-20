//Part 1: Thinking Functionally
console.log(`\n-------------------------------------------------------------Part 1: Thinking Functionally`);
function arraySum(array) {
    let sum = 0;
    for (let num of array) {
        sum += num
    }
    return sum;
}

function arrayAvarage(array) {
    let sum = arraySum(array);
    return sum / array.length;
}

function arrayLongestString(array) {
    let longestString = ``;
    for (str of array) {
        longestString = (str.length > longestString.length) ? str : longestString;
    }
    return longestString;
}

function arrayStringsLongerThan(array, minLenght = 0) {
    let newArray = [];
    for (str of array) {
        if (str.length > minLenght) {
            newArray.push(str); //since working with primitive type here it will be passed by value
        }
    }
    return newArray;
}

function recursion(currentNumber, neededNumber) {
    console.log(`Current number is ${currentNumber}`);
    if (currentNumber < neededNumber) {
        recursion(currentNumber + 1, neededNumber);
    } else if (currentNumber == neededNumber) {
        console.log(`Needed number has been reached`);
    }
}

let testArray = [20, 45, -10, 0, 0, 3, 7, 9, 12, 55, 55];
console.log(`Test array`);
console.log(testArray);
console.log(`Sum of numbers in array`);
console.log(arraySum(testArray));
console.log(`Avarage of array`);
console.log(arrayAvarage(testArray));

console.log(`-------------------------------------------------------------`);

let testStringArray = [`Quantum`, `Lantern`, `Mosaic`, `Velocity`, `Echo`, `Avalanche`, `Timber`, `Horizon`, `Circuit`, `Glacier`, `Orbit`, `Nimbus`, `Forge`, `Ember`, `Zenith`, ``];
console.log(`Test string array`);
console.log(testStringArray);
console.log(`The longest string in array`);
console.log(arrayLongestString(testStringArray));
console.log(`Words in array longer then 3`);
console.log(arrayStringsLongerThan(testStringArray, 3));
console.log(`Words in array longer then 5`);
console.log(arrayStringsLongerThan(testStringArray, 5));
console.log(`Words in array longer then 7`);
console.log(arrayStringsLongerThan(testStringArray, 7));
console.log(`-------------------------------------------------------------`);

recursion(1, 20);

//Part 2: Thinking Methodically
console.log(`\n-------------------------------------------------------------Part 2: Thinking Methodically`);
let testData = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }];
testData.forEach((it) => console.log(it));
//Sort the array by age.
let sortedArray = [...testData];
sortedArray.sort((a, b) => a.age - b.age); // no {} if return is implied
console.log('Data after sorting');
sortedArray.forEach((it) => console.log(it));

//Filter the array to remove entries with an age greater than 50.
let eldersArray = testData.filter((it) => it.age > 50);
console.log('Data after filtering everyone elder then 50');
eldersArray.forEach((it) => console.log(it));

//Map the array to change the “occupation” key to “job” and increment every age by 1.
let newMappedArray = testData.map((it) => {
    newit = {};
    for (arg in it) {
        if (arg == `occupation`) {
            newit[`job`] = it[arg];
        } else if (arg == `age`) {
            newit[arg] = (parseInt(it[arg])+1).toString() ; //in original data age is a string
        } else {
            newit[arg] = it[arg];
        }
    }
    return newit;
});
console.log('Data after mapping');
newMappedArray.forEach((it) => console.log(it));

//Use the reduce method to calculate the sum of the ages.
let sumOfTheAges = testData.reduce((acc,it)=> acc+parseInt(it.age),0);
console.log('The sum of the ages');
console.log(sumOfTheAges);

//Then use the result to calculate the average age.
let avarageAge = sumOfTheAges/testData.length;
console.log('Avarage age is');
console.log(avarageAge);


//Part 3: Thinking Critically
console.log(`\n-------------------------------------------------------------Part 3: Thinking Critically`);
let testObject = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
console.log(testObject);
(testObject);
console.log(`Changing by referance`);
let newObject = incrementAgeInObject(testObject);
//newObject and testObject are the same object
console.log(`Test object`);
console.log(testObject);
console.log(`New object`);
console.log(newObject);


console.log(`\nChanging by value (creating a new copy)`);
testObject = { id: "7", name: "Bilbo", occupation: "None", age: "111" }; //returning testObject to original value
let newObject2 = incrementAgeInNewInstance(testObject);
//newObject2 and testObject are DIFFERENT objects
console.log(`Test object`);
console.log(testObject);
console.log(`New object made by copying`);
console.log(newObject2);



function incrementAgeInObject(object){
    object[`age`] = (object[`age`] === undefined)? 0:parseInt(object['age'])+1;
    object[`updated_at`] = new Date;
    return object;
}

function incrementAgeInNewInstance(object) {
    let newObject = JSON.parse(JSON.stringify(object));
    newObject[`age`] = (newObject[`age`] === undefined)? 0:parseInt(newObject['age'])+1;
    newObject[`updated_at`] = new Date;
    return newObject; 
}