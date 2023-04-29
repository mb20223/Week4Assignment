// Mackenzie Brower
// Front End Developemt Course 
// Week 4 Coding Assignment 

// ** QUESTION 1 ** //
// Step 1
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let ageDiff = ages[ages.length - 1] - ages[0];
console.log("The difference between the first and last ages is: " + ageDiff);
// created array and then logged out the ages using subraction and subtrated out the last element
// Step 1b
ages.push(50);
ageDiff = ages[ages.length - 1] - ages[0];
console.log("The difference between the first and last ages is: " + ageDiff);
//pushed in the 50 by using the .push
// Step 2
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
let averageAge = sum / ages.length;
console.log("The average age is: " + averageAge);
//Created a loop to calcuate the average age

// ** QUESTION 2 ** //
// Step 1
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let numberletters = 0;
for (let i = 0; i < names.length; i++) {
    numberletters += names[i].length;
}
let averageLength = numberletters / names.length;
console.log("The average number of letters per name is: " + averageLength);
// created array and then created a for loop to calculate the average number

// Step 2
let concatenatedNames = "";
for (let i = 0; i < names.length; i++) {
  concatenatedNames += names[i] + " ";
}
console.log("The concatenated names are: " + concatenatedNames.trim());
// created a second for loop too run through array ... then concatentated the array ... then used .trim variable to remove the extra space a the end of the string learned for google

// ** QUESTION 3 ** //
//You can access the last element of an array using the array's length property.
//example ... myArray.length

// ** QUESTION 4 ** //
//You can access the first element of an array by using its index, which is always 0.
//example ... myArray[0]

// ** QUESTION 5 and Question 6 ** //
let peopleNames = ["Kelly", "Sam", "Kate"];
let nameLengths = [];

// Add the length of each name to the nameLengths array
for (let i = 0; i < peopleNames.length; i++) {
  nameLengths.push(peopleNames[i].length);
}

// Calculate the sum of all elements in the nameLengths array
let total = 0;
for (let i = 0; i < nameLengths.length; i++) {
  total += nameLengths[i];
}

console.log(total); // Output: 12

// ** QUESTION 7 ** //
function repeatWord(word, n) {
    let result = "";
    for (let i = 0; i < n; i++) {
      result += word;
    }
    return result;
  }
//in this create a function and initialize it to an empty string, 
//After the loop is complete, the result variable contains the word concatenated to itself n number of times.

let result = repeatWord("Hello", 3);
console.log(result); // Output: "HelloHelloHello"
//I called the repeatWord function with the word "Hello" and the number 3. 

// ** QUESTION 8 ** //
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
  }
//concatenate the firstName and lastName with a space character in between
let fullName = getFullName("John", "Doe");
console.log(fullName); // Output: "John Doe"
//call the getFullName function with the first name "John" and the last name "Doe". 

// ** QUESTION 9 ** //
function sumGreaterThan100(sumNumbers) {
    let amount = 0;
    for (let i = 0; i < sumNumbers.length; i++) {
        amount += sumNumbers[i];
    }
    return amount > 100;
  }
//we first declare a variable called sum and initialize it to 0.
let sumNumbers = [10, 20, 30, 40];
let isSumGreaterThan100 = sumGreaterThan100(sumNumbers);
console.log(isSumGreaterThan100); // Output: true
//call the sumGreaterThan100 function with an array of numbers [10, 20, 30, 40]. 

// ** QUESTION 10 ** //
function getAverage(LnNumbers) {
    let avgnum = 0;
    for (let i = 0; i < LnNumbers.length; i++) {
        avgnum += LnNumbers[i];
    }
    return avgnum / LnNumbers.length;
  }
//we first declare a variable called sum and initialize it to 0. We then use a for loop to iterate over each element in the numbers array, 
let LnNumbers = [10, 20, 30, 40];
let numAverage = getAverage(LnNumbers);
console.log(numAverage); // Output: 25
//call the getAverage function with an array of numbers [10, 20, 30, 40]. The function returns the average value 25,

// ** QUESTION 11 ** //
//returns average of array elements.
function average(arr){    
    var total = 0;
    for(var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    var avg = total / arr.length;
    return avg;
    }
    
    var av=average([1,2,3,4,5,6]);
    console.log(av);
    // Returns true if average of one array in bigger than the other.
    
    function isGreaterAvg(arr1,arr2){    
    var total1 = 0;
    for(var i = 0; i < arr1.length; i++) {
        total1 += arr1[i];
    }
    var total2=0;
    for(var i = 0; i < arr2.length; i++) {
        total2 += arr2[i];
    }
    var avg1 = total1 / arr1.length;
    var avg2 = total2 / arr2.length;
    if (avg1>avg2){
        return true;
    }
    else{
        return false;
    }
    }
    
    var a=isGreaterAvg([6,7,8,9,10],[1,2,3,4,5]);
    console.log(a);
//This function first calculates the average of each array using the reduce method to sum up all the elements and then dividing by the length of the array.

// ** QUESTION 12 ** //
function willBuyDrink(isHotOutside,moneyInPocket){  
    if(isHotOutside && moneyInPocket>10.5){
        return true;
    }
    else{
        return false;
    }
}

var a=willBuyDrink(true,12);
console.log(a);
//This function uses the logical AND (&&) operator to combine the conditions that it is hot outside and that moneyInPocket is greater than 10.50.

// ** QUESTION 13 ** //
let animals = [
    'cat', 'dog', 'elephant', 'bee', 'ant', 'tiger', 'lion', 'fish', 'monkey'];

animals.sort((a, b) => {
    if (a > b)
        return -1;
    if (a < b)
        return 1;
    return 0;
});

console.log(animals);
//to sort the animals array in descending order, you need to change the logic of the compare function and pass it to the sort()

