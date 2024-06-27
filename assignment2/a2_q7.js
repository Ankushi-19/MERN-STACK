// 7. Write a function that returns the array sorted by the length of each string, in ascending order.

function sorted(arr){
    return arr.sort((a,b) => a.length - b.length)
}
const a=["ram","shyam","jodhu","modhu","sandhigna","riya","priya","sancharita"]
console.log(sorted(a))