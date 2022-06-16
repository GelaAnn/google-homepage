//Write a function that takes two numbers and return the maximum of two
//Write a function that takes a number and if the number is
//Divisible by 3 print=>Fizz
//Divisible by 5 print=>Buzz
//Divisible by both 3 and 5 print=>FizzBuzz
//Not divisible by 3 or 5 print=>the input
//Not a number=> "Not a number"
//function Max(num1, num2){
    //if(num1>num2){
      //  return(num1)
    //}
      //  else
    //return(num2);
//}
   
//let max= Max(15,10);
//console.log(max);

function number(num){
    if(num%3===0){
         console.log("Fizz");
    } 
    else if(num%5===0){
        console.log("Buzz")
    }  
    else if(num%5===0 && num%3===0){
         console.log("FizzBuzz");
    }  
    else if(num%3!==0, num%5!==0){
        console.log(num);
    }   
    else
    console.log("Not a number");
}
let numb= number(15);