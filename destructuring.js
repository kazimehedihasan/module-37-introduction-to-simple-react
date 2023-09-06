//  1: array destructuring 
const number = [42, 65];
// const x = number[0];
// const y = number[1];
// console.log(x, y);

const [x, y] =  [42, 65];
// console.log(x, y);

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
// console.log(boxify(45, 45));

//  2: object destructuring
