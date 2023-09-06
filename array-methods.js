const products = [
{name: 'laptop', price: 10200, brand: 'lenovo', color: 'green'},
{name: 'phone', price: 50044, brand: 'vivo', color: 'red'},
{name: 'sunglassas', price: 64512, brand: 'tokio', color: 'black'},
{name: 'iphone', price: 10000, brand: 'apple', color: 'apple color'},
{name: 'kibord', price: 3004, brand: 'savillla', color: 'garo black'},
{name: 'watch', price: 5423, brand: 'royel', color: 'black'},
{name: 'acer', price: 4545, brand: 'ryzen', color: 'silver'},
{name: 'camera', price: 454, brand: 'canon', color: 'gray'},
];
const arryNew = products.map(p => p.brand);
// console.log(arryNew);
const arry = products.map(produc => produc.name)
// console.log(arry);
// products.forEach(product => console.log(product))
// products.forEach(product => console.log(product.color))
// products.forEach(product => console.log(product.price))

// 3.  filter 
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);
const include = products.filter(product => product.name.includes('n'));
// console.log(include);
//  4. find 
const special = products.find(product => product.name.includes('n'));
console.log(special);












// function errors(a){
// if (a>5) {
//     return true
// }
// else{
//     return false
// }
// };
// console.log(errors(5));