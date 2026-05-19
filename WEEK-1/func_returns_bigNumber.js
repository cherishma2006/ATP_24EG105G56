//5.write a function that receives 3 number args and return the big number
// fuction declare
function largest(number1,number2,number3){
   
    if(number1>number2 && number1>number3)
      return number1;
    if(number2>number1 && number2>number3)
        return number2;
    else
    return number3;
}
let result=largest(10,20,30)
console.log(result)