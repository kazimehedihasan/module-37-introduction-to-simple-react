const number = [1, 2, 3, 4, 5, 6];
const student = {
  name: "John",
  age: 25,
  movies: ["king ", "khane "],
};
// 1. template string
const about = `my name is ${student.name}. 
AGE OF ${student.age}. 
also like movies: ${student.movies[1]}`;
// console.log(about);

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtFive = (num) => num + 1;
const isFven = (x) => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};

// spread operator

const arr = [1, 2, 3, 4, 5, 6];
const newArr = [...arr, 7, 8, 9];
console.log(newArr);
console.log(arr);

// destructuring