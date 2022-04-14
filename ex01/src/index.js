let myArr = [];

function* multiplication(x) {
    let y = x;
  for (let i = 0; i < y; i++) {
    x = x * 2;
    myArr.push(x);
    yield x;
  }
}

let num = multiplication(3);
for (let i=0; i<3; i++){
  console.log(num.next().value);
}
console.log(myArr);
// Only change code above this line
module.exports = multiplication;