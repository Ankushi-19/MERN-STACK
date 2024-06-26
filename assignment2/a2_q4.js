// 4. Merge two arrays and add an additional element at the beginning of the merged array using the spread operator.

let a=[2,4,6,0,8];
let b=[3,5,8,1,7];
let newarr=([24,...a,...b]);
console.log(JSON.stringify(newarr));
