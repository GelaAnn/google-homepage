//map method
const arr=[1,2,3,4,5,6,7,8]
const alphabet=["a","s","f","d"]
let mapped= arr.map(el=>el*30)
console.log(arr)
console.log(mapped)
let names=["Angela","Konadu","Gyarteng","Yiadom"]
let results=names.map(name=>name.length)
console.log(results)

//filter
const filter= arr.filter(el=>el===2 || el===5);
console.log(filter)
const name= names.filter(el=> el==="Konadu" || el==="Yiadom")
console.log(name)

let users=[
    {id:1, name:"Angela"},
    {id:2, name:"Konadu"},
    {id:3, name:"Gyarteng"},
]
const filt= users.filter(el=> el.id == 1)
console.log(filt)

//sort()
const des= arr.sort((a, s)=>a>s ?-1:1)
console.log(des)

const ass= alphabet.sort((a,b)=>a>b?1:-1)
console.log(ass)

//every()
const greater=arr.every(el=> el>5)
console.log(greater)

const or=arr.every(el=> el>5 || el<7)
console.log(or)

//some
const some=arr.some(el=> el>5)
console.log(some)

//join()
const firstName=["G","e","l","a"]
console.log(firstName.join(''))

//reduce
const limit=arr.reduce((total,initialvalue)=> total + initialvalue)
console.log(limit)