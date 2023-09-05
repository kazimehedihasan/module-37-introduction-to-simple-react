//  1. how to declare a variable using let and const 
const fatherName = 'Arnold';

let season = 'winter';
let seasona = 'raing';
// console.log(season);



/*
 2. condition 
6 basic conditions : >, <, ===, !==, <=, >=
 multiple conditions : &&, ||

*/ 

if (season === 'wintr' && seasona === 'raig') {
    console.log('bersti hobe kintu raing');
} 
if (season === 'wintr' || seasona === 'raig') {
    console.log('bersti hobe kintu raing');
} 

else if(fatherName === 'Arnol'){
    console.log('bersti hobe kintu');
}

else{
   
    // console.log('bersti hobe kintu winter');
}


/*
3. array declarations
index declarations
length, push,
*/ 
const numbers = [54, 55, 56, 57, 58, 61];
numbers[0] =56;
numbers.push(50);
numbers.pop()
// console.log(numbers);

// 4 : for loop

// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     console.log(number);
// }

// 5 : function
function multiple(num1, num2) {
    const result = num1 * num2;
    return result;
}
const output = multiple(40, 50);
// console.log(output);

/*
6 Object
3 ways to access properties by name 

*/ 
const students = {
    name: 'shakib khan',
    age: 25,
    hobbies: ['football', 'basketball', 'tennis']
}
const myVariable = 'age';
console.log(students.age); // direct by property
console.log(students['age']); //access via property name string

console.log(students[myVariable]); //access via property name in a variable
