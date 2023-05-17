const numbers=[1,2,3,4]
//numbers.push(5)
console.log(numbers)
console.log(numbers.includes(6))
const toDos=["brush your teeth","Bath","dress up"]
console.log(toDos)
toDos.push("take breakfast");
console.log(toDos);
//toDos.ushift("take breakfast");
//console.log(toDos);
toDos.splice(1,1, "take breakfast");
console.log(toDos);
//push, unshift,splice,includes,
//pop,shift,splice
toDos.pop("take breakfast")
console.log(toDos)
toDos.shift("take breakfst")
console.log(toDos)
toDos.splice(1,1)
console.log(toDos)
//let username="Bob"
//let password= "dsffggf5456"
const courses=[
    {id:1, name:"a"},
    {id:2, name:"b"}
]
console.log(courses.indexOf({id:1,name:"a"}))
console.log(courses.lastIndexOf(1))

//concatenating or combining arrays
const number1=[1,2,3,4]
const number2=[5,6,7,8]
console.log(number1.concat(number2))

//find, findIndex
//find
const number=[10,20,21,30]
console.log(number.find(num=>num<20))
//or you can use :
console.log(number.find(function check10(num){
     return num >20
}))
//spread operator
