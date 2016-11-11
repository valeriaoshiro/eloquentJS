/*
Write a program that uses console.log o print all the numbers form 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
Modify your program to print "FizzBuzz" for numbers that are divisible by
both 3 and 5.
*/

console.log("Fizzbuzz");
for(var i = 1; i <= 100; i++){
  if((i % 3 === 0) && (i % 5 === 0)){
    console.log("FizzBuzz");
  } else if(i % 3 === 0){
    console.log("Fizz");
  } else if (i % 5 === 0){
    console.log("Buzz");
  } else{
    console.log(i);
  }
}