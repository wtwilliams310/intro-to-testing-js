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


