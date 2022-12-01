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
    } else {
        return 'boolean';
    }
}

