//  1. JSON

// 1.1. JSON.parse()
// 1.2. JSON.stringify()

const student = {
  name: "John",
  age: 25,
  hobbies: ["football", "basketball"],
};
// console.log(student);
const studentJson = JSON.stringify(student);
const studenta = JSON.parse(studentJson);
// console.log(studenta);
// console.log(studentJson);

// 2.  fetch

// fetch('url')
// .then((response) => response.JSON)
// .then(data => console.log(data))

// 3. keys , values
const keys = Object.keys(student);
// console.log(keys);

const values = Object.values(student);
// console.log(values);

// for
const number = [45, 46, 47, 48, 49, 50];
number.forEach(num => console.log(num));
number.map(num => num * 2)
console.log(number);

//  for of on array like object
//  loop on an object using for in

