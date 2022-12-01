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

