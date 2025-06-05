function el(arr1, arr2) {
    let a = arr1.filter(item => arr2.includes(item));
    console.log(a.join("\n"));
}

el(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 'hey', 10, 4, 'hello', '2']);
el(['R', 'u', 's', 's', 'i', 'a'], ['R', 'u', 't']);
