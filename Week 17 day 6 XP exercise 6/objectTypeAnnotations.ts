// Define the structure of a Person object
type Person = {
    name: string;
    age: number;
};

// Create a function that returns a Person object
function createPerson(name: string, age: number): Person {
    return {
        name: name,
        age: age
    };
}

// Test the function
const person = createPerson('Alice', 30);

// Log the result to the console
console.log(person); // Output: { name: 'Alice', age: 30 }
