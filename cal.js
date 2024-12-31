function calculate() {
    // Step 1: Get the input values from the HTML
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;

    let result;

    // Step 2: Check if the inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText = "Please enter valid numbers!";
        return;  // Exit the function if inputs are invalid
    }

    // Step 3: Perform the calculation based on the operator
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            document.getElementById("result").innerText = "Invalid operator!";
            return;  // Exit if the operator is invalid
    }

    // Step 4: Display the result in the HTML
    document.getElementById("result").innerText = `Result: ${num1} ${operator} ${num2} = ${result}`;
}