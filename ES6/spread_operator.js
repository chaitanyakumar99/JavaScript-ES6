//spread operator:- extract and copy into single array or a object

//array

let a=[1,2,3,4,5]
let b=[6,7,8,9,10]

let c=[...a,...b]
console.log(c)


//object

const v1={name:"rahul",lastname:"gandhi"}
const v2={name1:"Arun",lastname1:"Kumar"}
const v3={...v1,...v2}
console.log(v3)

