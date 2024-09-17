function getDetails(name: string, age: number): [string, number, string] {
    const message = `Hello, ${name}! You are ${age} years old.`;
    
    // Return a tuple with the name, age, and message
    return [name, age, message];
}

// Call the function and store the result in a variable
const details = getDetails("Alice", 25);

// Log the tuple to the console
console.log(details); // Output: ['Alice', 25, 'Hello, Alice! You are 25 years old.']
