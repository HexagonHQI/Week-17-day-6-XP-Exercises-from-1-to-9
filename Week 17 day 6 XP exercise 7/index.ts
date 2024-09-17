function updateInputValue(): void {
    // Get the input element by its ID
    const inputElement = document.getElementById('myInput');

    // Use type assertion to cast it to HTMLInputElement
    const input = inputElement as HTMLInputElement;

    // Set the value of the input element
    input.value = 'TypeScript Type Assertions are awesome!';
}

// Call the function to update the input value
updateInputValue();
