// 2. Write a function that returns a new array with each number squared using the map method.
function square(x){
  //return x.map(num =>num*num);
  return x.map(num =>Math.pow(num,2))
}
let a=[6,7,2,3];
console.log(square(a));
