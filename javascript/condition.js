// a=56
// if(a%2 ===0){
//     msg = 'hello'
//     console.log('even');
    
// }else{
//     console.log('odd');
    
// }
// console.log(msg);


// num =7;
// num= 11;
// a=77;

// if(a%7||11 ===0){
//     console.log('yes');
    
// }else{
//     console.log('no');
    
// }

// //wap if person is eligible for dl
// a=23;
// num=18;
// if(a>=18){
//     console.log('yes');
    
// }else{
//     console.log('no');
    
// }
// //perfect square

// const num=49;

// const sqrt = num**0.5;

// console.log(sqrt);
// if(Number.isInteger(sqrt)) {
//     console.log('perfect square');
    
// } else{
//     console.log('no');
    
// }

//a=50;

//if(a<=100||a>=90){
    //console.log('A');
    
//}else if(a<=89||a>=70){
    //console.log('B');
    
//}else if(a<=69||a>=40){
    //console.log('C');
    
//}else{
    //console.log('Fail');
    
//}

let n=3;
let isprime;


if(n<=1) isprime=0;
    for(let i=2;i<=n/2;i++){
        if(n%i==0){
            isprime=0;
            
        }
    }
    if(isprime){
        console.log('is prime number');
        

    }else{
       console.log('is   not aprime number');
       

    }
    // for checking whether a number is prime or not //

console.log('-----------------Prime Number------------------');


let num = 3;
let prime = 0;

for (let i= 2; i <num; i++){
   if (num % i === 0) {
    prime = 1;
    break;
   }
}

if(prime === 0){
  console.log('number is prime');}
// }else if (num === 1 ){
//   console.log('number is neither prime nor composite');
// }
else {
  console.log('number is not prime');

  
}

// for checking whether a number is a paliidome or not //

console.log('-----------------Palindrome------------------');


let P = 1123211;
let rev = 0;
let temp =P;
  while(P > 0){
    let ld = P % 10;
    rev = rev *10 + ld;
    P = P / 10;

  }

  if (temp === rev ){
    console.log('number is palidrome');
  }else{
   console.log('number is not palidrome');
   
    
  }

  // for checking whether a number is Armstrong or not //


console.log('-----------------Armstrong Number------------------');

let armstrong = 1634;
let sum = 0;
let tempr = armstrong;
let digit = armstrong;
let count = 0;
for (let s = 1;  digit >0 ; s++ ){
   digit = digit / 10;
   count++;

}
for (let i = 1; armstrong >0 ; i++){
  let last = armstrong % 10;
  sum = sum + last ** count ;
  armstrong = armstrong / 10;
}

if (sum === tempr){
  console.log('number is armstrong');
}
else{
  console.log('number is not armstrong');
}


// printing all prime number from 10 - 300//

console.log('----------------- Prime Numbers------------------');

let start =10;
let end = 300;


for (let i = start ; i < end ; i++){
let primenum = 0;
 for ( let j = 2; j <start; j++){
   if (i % j === 0 ){
    primenum = 1;
    break;
   }
}

if (primenum === 0 ){
  console.log(i);  
}
start++;
 }

 









