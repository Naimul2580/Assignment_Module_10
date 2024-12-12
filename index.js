//Question 01
function calculateDifference(num1,num2){
    let sub = num1 - num2
    return sub
}

console.log(calculateDifference(20,5));

// question 02
function isOdd(num1){
    if(num1%2==0)
        return true
    else
        return false
}

console.log(isOdd(10));


// Question 03
function findMin(numbers){
    let min = Math.min(...numbers)
    return min
}

console.log(findMin([5,3,7,1,-10,20]));

// Question 04
function filterEvenNumbers(numbers){
    let arr = numbers.filter(i => i % 2 === 0)
    return arr
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Question 05
function sortArrayDescending(numbers){
    let arr = [...numbers].sort((a, b) => b - a)
    return arr
}

console.log(sortArrayDescending([5, 2, 9, 1, 7]));

// Question 06
function lowercaseFirstLetter(word){
    let arr = word.charAt(0).toLowerCase() + word.slice(1)
    return arr
}

console.log(lowercaseFirstLetter("BANGLADESH"));

// Question 07
function isLeapYear(year){
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
        return true
    else
        return false
}

console.log(isLeapYear(2024));



