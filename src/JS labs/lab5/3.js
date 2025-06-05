function Shop(a, b) {
    const inventory = {};
  
    function addShop(arr) {
        for (let i = 0; i < arr.length; i += 2) {
            const product = arr[i];
            const quantity = parseInt(arr[i + 1], 10);

            if (inventory[product]) {
                inventory[product] += quantity;
            } else {
                inventory[product] = quantity;
            }
        }
    }

    addShop(a);
    addShop(b);

    for (const product in inventory) {
        console.log(`${product} -> ${inventory[product]}`);
    }
}

const a = ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'];
const b = ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'];

Shop(a, b);
