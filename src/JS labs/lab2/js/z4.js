function calculator(a, operator, b) {
    let result;

    if (operator === "+") {
        result = a + b;
    } else if (operator === "-") {
        result = a - b;
    } else if (operator === "*") {
        result = a * b;
    } else if (operator === "/") {
        if (b === 0) {
            result = "Ошибка, деление на ноль";
        } else {
            result = a / b;
        }
    } else {
        result = "Неверный оператор";
    }

    if (typeof result === 'number') {
        console.log(result.toFixed(2));
    } else {
        console.log(result);
    }
}

calculator(5, "+", 10);      // 15.00
calculator(25.5, "-", 3);    // 22.50
calculator(10, "/", 0);      // Ошибка
