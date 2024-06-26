// 6. Write a function that takes an array of numbers and returns an object with two properties: sum, the sum of all the numbers, and product, the product of all the numbers using reduce method.

let arr=[2,4,6,10]
sum=0;
product=1;
function array(arr){
    for(let i of arr){
        sum=sum+i;
        product=product*i;

    }
    console.log("the sum of the numbers are:",sum)
    console.log("the product of the numbers are:",product);

}
(array(arr))