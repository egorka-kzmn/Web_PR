function binary(a) {
    let test = 0;
    for (let i = 0; i < a.length; i++) {
    if (a[i] !== '0' && a[i] !== '1' || a.length!==8) {
        test = 1;
    }
}
    if (test == 0) {
    const dec = parseInt(a, 2);
    console.log(dec);
    }
    else console.log("Неправильное значение");
}


binary('11110000'); 
binary('0000100'); 
