// Defining an object
const person = {
    name: "Alexander",
    age: 32,
    likesCoding: true,
    address: {
        street: "123 Fake Street",
        suburb: "Fakeville",
        postcode: 1234
    }
};

// Console.log is a function that prints the value inside the brackets to the terminal, just like Python's print().
console.log(person.address.street); // "123 Fake Street"

console.log(person["address"]["suburb"]); // "Fakeville"

// We ca add values to an object using dot notation or square brackets
person.address.state = "NSW";

person["address"]["country"] = "Australia";

console.log(person.address); // {street: "123 Fake Street", suburb: "Fakeville", postcode: 1234, state: "NSW", country: "Australia"}