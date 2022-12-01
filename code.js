// helloWorld function 
const helloWorld = function () {
    return "Hello, World!";
}

function sayHello(input) {
    if(typeof input === 'boolean') {
        return `Hello, World!`
    }
    return `Hello, ${input}!`;
}

function isFive(input) {
    if(input == 5) {
        return true;
    } return false;
}

function isEven(input) {
    if(typeof input === 'boolean') {
        return false;
    } else if(input % 2 === 0) {
        return true;
    } return false;
}

function isVowel(input) {
    if(typeof input != 'string') {
        return false;
    } else if(input.toLowerCase() == 'a'|| input.toLowerCase() == 'e' || input.toLowerCase() == 'i' || input.toLowerCase() == 'o' || input.toLowerCase() == 'u') {
        return true;
    } else {
        return false;
    }
}

function add(a, b) {
    let numA = Number(a);
    let numB = Number(b);
    if(numA == isNaN && numB == isNaN) {
        return NaN;
    } else {
        return numA + numB;
    }
    // if(typeof numA == 'number' && typeof numB == 'number') {
    //     return numA + numB;
    // } else {
    //     return NaN;
    // }
    // if(typeof a !== 'number' && typeof b !== 'number') {
    //     return NaN;
    // } else {
    //     return numA + numB;
    // }
}

