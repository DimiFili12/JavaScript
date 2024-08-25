const dishes = [
    { name: 'Italian pasta', price: 9.55 },
    { name: 'Rice with veggies', price: 8.65 },
    { name: 'Chicken with potatoes', price: 15.55 },
    { name: 'Vegetarian Pizza', price: 6.45 }
];

function displayDishPrices(includeTax) {
    let tax;
    if (includeTax) {
        tax = 'incl.tax'
        console.log('Prices with 20% tax:');
    } else {
        tax = 'excl.tax'
        console.log('Prices without tax:');
    }

    for (let i = 0; i < dishes.length; i++) {
        let finalPrice;
        if (includeTax) {
            finalPrice = dishes[i].price * 1.20;
        } else {
            finalPrice = dishes[i].price;
        }
        console.log(`Dish:  ${dishes[i].name} +  Price (${tax}):  + ${finalPrice.toFixed(2)}`);
    }
}

displayDishPrices(true);
displayDishPrices(false);