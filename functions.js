// This is a function declaration
function sayHello() {
    console.log("Hello!");
};

// This is a function call
sayHello(); // "Hello!"

// This is a function declaration with a parameter
function sayHelloTo(name) {
    console.log(`Hello ${name}!`);
};

//This is a function call with an argument
sayHelloTo("Alexander"); // "Hello Alexander"

function addTwoNumbers(num1, num2) {
    return num1 + num2;
};

const result = addTwoNumbers(1, 2);
console.log(result); // 3

// This is a function expression
const sayGoodbye = function() {
    console.log("Bye");
};

// This is a function call
sayGoodbye(); // "Bye"

// This is an arrow function
const sayGreeting = () => {
    console.log("Welcome to SheCodes");
};

// This is a function call
sayGreeting(); //"Welcome to SheCodes"

// This is an arrow function with parameters
const addNumbers = (num1, num2) => {
    return num1 + num2;
};

// This is a function call
const result2 = addNumbers(1, 2);

console.log(result2); // 3

const add = (num1, num2) => {
    return num1 + num2;
};

const doSomeMath = (num1, num2, mathFunction) => {
    return mathFunction(num1, num2);
};

const result3 = doSomeMath(1, 2, add);

console.log(result3); // 3