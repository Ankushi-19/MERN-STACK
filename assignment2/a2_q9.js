// 9. Write a function that removes the third element from an array and returns a new array with the removed element. Do not modify the original array.
 function array(arr){
    let a=[];
    for (let i=0;i<arr.length;i++){
        if(i!==2){
            a.push(arr[i])
    
        }
    }
    return a;
}
const a=[2,4,1,9,6,7]
console.log(array(a))
