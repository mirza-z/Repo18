// Only change code below this line
let shoppingList = new Map([
    ['Banana', 3],
    ['Pineapple', 5],
    ['Pear', 2],
    ['Carrot', 10],
    ['Apple', 1.5],
]);

const arrKey = [];
for (let keys of shoppingList.entries()) {
    console.log(`groceries: ${keys[0]}`);
    arrKey.push(keys[0]);
}

const arrValue = [];
for (let values of shoppingList.entries()) {
    console.log(`amount: ${values[1]}`);
    arrValue.push(values[1]);
}

for (let all of shoppingList.entries()) {
    console.log(all);
}
// Only change code above this line
module.exports = { shoppingList, arrKey, arrValue };