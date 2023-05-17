console.log("Hello are you there");
//let
//const
//primitive datatypes
let city="Accra";
let age="20";
let isApproved=true;
let color;
//console.log(color);

let firstName= undefined;
console.log(firstName);

//object
let person={
    secondName:"Konadu",
    lastName:"Gyarteng",
    age:19
};
console.log(person.secondName);
console.log(person["lastName"]);

//array
let colors=["red","blue","yellow"];
console.log(colors);

//functions
function codebooth(){
    console.log("codebooth")
}
codebooth();
function sum(number){
    let total=number+number;
    console.log(total)
}
sum(10);

function fullname(firstname,lastname){
    let fullname=firstname + '' + lastname;
    return fullname
}
console.log(fullname("Angela", "Konadu"));