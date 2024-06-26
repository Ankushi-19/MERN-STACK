// 5. Given an array of objects representing users with name and age properties, write a function that returns an array of names of users who are over18.
// const users = [
//   { name: 'Alice', age: 22 },
//   { name: 'Bob', age: 17 },
//   { name: 'Charlie', age: 19 },
//   { name: 'David', age: 15 }
// ];


const users = [
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 19 },
  { name: 'David', age: 15 }
];
function age(users){
    return users
    .filter(r => r.age>18)
    .map(r =>r.name)
   
}
console.log(age(users));