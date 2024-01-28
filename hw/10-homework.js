// Task 1 
/*
Write a function named calculateTotalPrice1() which takes an object of some 
shopping items with their quantities as key-value pairs and returns the total 
price of the given items based on the price list below.
1 Apple is $2.00 
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25
Examples:
calculateTotalPrice1({ apple: 3, mango: 1 })  -> 10.99
calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 })  -> 19.12
calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 })  -> 0
calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango:1 })  -> 12.24
*/

function calculateTotalPrice1(obj) {
    let totalPrice = 0

    const fruits = {
        apple: 2.00,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25
    }

    for (let fruit in obj) {
        totalPrice += fruits[fruit] * obj[fruit]
    }

    return totalPrice
}

console.log(calculateTotalPrice1({ apple: 3, mango: 1 }))
console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 }))
console.log(calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 }))
console.log(calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango: 1 }))


// Task 2 
/*
Write a function named calculateTotalPrice2() which takes an object of some 
shopping items with their quantities as key-value pairs and returns the total 
price of the given items based on the price list below.
1 Apple is $2.00 
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25
Note: There will be some discounts as below .
There will be %50 discount for every second Apple 
There will be 1 free Mango if customer gets 3. So, fourth one is free.
Examples:
calculateTotalPrice2({ Apple: 3, Mango: 5 })  -> 24.96
calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 })  -> 45.81
calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 })  -> 0
calculateTotalPrice1({ Apple: 4, Pineapple: 1, Orange: 1, Mango:3 })
*/

function calculateTotalPrice2(items) {
    let total = 0

    const prices = {
        Apple: 2.00,
        Orange: 3.29,
        Mango: 4.99,
        Pineapple: 5.25
    }

    for (let item in items) {
        const noSale = items[item] * prices[item]

        if (item === 'Apple') {
            let sale = Math.floor(items[item] / 2) * prices[item] / 2
            total += noSale - sale
        }
        else if (item === 'Mango') {
            let sale = Math.floor(items[item] / 4) * prices[item]
            total += noSale - sale
        }
        else total += noSale

    }

    return total(toFixed(2))
}

console.log(calculateTotalPrice2({ Apple: 3, Mango: 5 }))
console.log(calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 }))
console.log(calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 }))
console.log(calculateTotalPrice2({ Apple: 4, Pineapple: 1, Orange: 1, Mango: 3 }))


// Task 3 
/*
Write a function named nthWord() which takes a string and a number 
arguments and returns the nth word in the string. 
Note: Function should return empty string if the number argument is greater 
than the count of the words in the given string.
Examples:
nthWord("I like programming languages", 2)  -> "like"
nthWord("QA stands for Quality Assurance", 4)   -> "Quality"
nthWord("Hello World", 3)  -> ""
nthWord("Javascript", 1)  -> "Javascript”
nthWord("", 1)  -> ""
*/

const nthWord = (str, num) => {
    let words = str.split
    if (words.length > num) return ''

    realNum = num + 1
    return words[realNum]
}

console.log(nthWord('I like programming languages', 2))
console.log(nthWord('QA stands for Quality Assurance', 4))
console.log(nthWord('Hello World', 3))
console.log(nthWord('Javascript', 1))
console.log(nthWord('', 1))


// Task 4 
/*
Write a function named isArmstrong() which takes a number argument and 
returns true if given number is armstrong, return false otherwise. 
Note: An armstrong number is a number that is equal to the sum of its own 
digits raised to the power of the number of digits. In other words, an n-digit 
number is an Armstrong number if the sum of its digits, each raised to the nth 
power, is equal to the number itself.
Let's take an example to understand it better. Consider the number 153. 
To determine if 153 is an armstrong number, we need to check if the sum of 
its digits, each raised to the power of the number of digits, equals the original 
number. 
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 
In this case, the sum of the individual digits raised to the power of 3 (the 
number of digits in 153) is equal to the original number, which means 153 is 
an armstrong number.
*/

const isArmstrong = num => {
    let numAsStr = num.toFixed()

    let armstrong = numAsStr.split('').reduce((total, i) => total + Math.pow(i, numAsStr.length), 0)

    return armstrong === num
}

console.log(isArmstrong(153))
console.log(isArmstrong(123))
console.log(isArmstrong(1634))
console.log(isArmstrong(1111))


// Task 5
/* 
Write a function named reverseNumber() which takes a number argument 
and returns it back reversed without converting it to a String.
Note: Do not convert number to string to complete the task.
Examples:
reverseNumber(371)  -> 173
reverseNumber(123)  -> 321
reverseNumber(12)  -> 21
reverseNumber(0)  -> 0
reverseNumber(111)
*/

function reverseNumber(num) {

}


console.log(reverseNumber(371))
console.log(reverseNumber(123))
console.log(reverseNumber(12))
console.log(reverseNumber(0))
console.log(reverseNumber(111))

// Task 6 
/*
Write a function named doubleOrTriple() which takes an array of numbers as 
argument and a boolean value. It will return the array elements doubled if true 
or tripled if the boolean value is false. 
Examples:
doubleOrTriple([1, 5, 10], true)  -> [2, 10, 20]
doubleOrTriple([3, 7, 2], false) -> [9, 21, 6]
doubleOrTriple([-1, -2], true)  -> [-2, -4]
doubleOrTriple([0], false)  -> [0]
doubleOrTriple([-1, 0, 1], true)  -> [-2, 0, 2]
*/

function doubleOrTriple(arr, boolean) {
    const array = []

    for (const num of arr) {
        if (boolean === true) array.push(num * 2)
        else if (boolean === false) array.push(num * 3)
    }
    return array
}

console.log(doubleOrTriple([1, 5, 10], true))
console.log(doubleOrTriple([3, 7, 2], false))
console.log(doubleOrTriple([-1, -2], true))
console.log(doubleOrTriple([0], false))
console.log(doubleOrTriple([-1, 0, 1], true))


// Task 7 
/*
Write a function named splitString() which takes a string and a number 
arguments and returns the string back split by the given number. 
Note: Return empty string if the string shorter than splitting number or the 
string length is not divisible by the given number.
Examples:
splitString("JavaScript", 5)  -> "JavaS cript"
splitString("Java", 2)  -> "Ja va"
splitString("Automation", 3)  -> ""
splitString("Hello", 6)  -> ""
splitString("12", 1)  -> "1 2"
*/

const splitString = (str, num) => {
    if(str.length > num && str.length % num === 0) {
        return str.slice(0, num) + ' ' + str.slice(num)
    }
    else return ''
}

console.log(splitString('JavaScript', 5))
console.log(splitString('Java', 2))
console.log(splitString('Automation', 3))
console.log(splitString('Hello', 6))
console.log(splitString('12', 1))