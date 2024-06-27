// 10. Write a function that concatenates two arrays without using the concat method.  
function array(arr1,arr2){
        let a=[]
        for (let i=0;i<arr1.length;i++){
            a.push(arr1[i])
        }
        for (let j=0;j<arr2.length;j++){
            a.push(arr2[j])
        }
        return a;
    }
const b=[1,3,5,7]
const c=[2,4,6,8]
console.log(JSON.stringify(array(b,c)))