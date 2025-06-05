function progress(value) {
    if (value < 0 || value > 100 || value % 10 !== 0) {
        console.log("Введите значение от 0 до 100");
        return;
    }

    if (value === 100) {
        console.log(value + "% Complete!");
        console.log("[" + "%".repeat(value / 10) + ".".repeat(10 - value / 10) + "]");
    } else {
        console.log(value + "% [" + "%".repeat(value / 10) + ".".repeat(10 - value / 10) + "]");
        console.log("Still loading...");
    }
}

progress(30);
progress(50);
progress(100);
