// Overloaded function signatures
function greet(): string;
function greet(name: string): string;

// Function implementation
function greet(name?: string): string {
    if (name) {
        return `Hello, ${name}!`;
    } else {
        return 'Hello, world!';
    }
}

// Test the function
console.log(greet());        // Output: Hello, world!
console.log(greet('Alice')); // Output: Hello, Alice!
