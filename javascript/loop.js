//for. while.do-while

for(let i=0;i<10;i++){
    console.log('i');
    
}
// wap to print no. divisible by 7 from 40 to 130
for(let i=40;i<=130;i++){
    if(i%7===0){
        console.log(i);
        
    }

    
}

console.log('while loop');

let a=10;
while(a<20){
    console.log(a);
    a++

    
}

console.log('reverse while');
console.log();


let num = 43716;
let rev = 0
while(num>0){
    console.log(num,rev);
    
              let r=num%10;
              rev=rev * 10 + r;
              num=parseInt(num/10);//to convert decimal into integer(it always give result in float)

}

console.log(rev);

//do while

console.log();

let n=50;
do{
    console.log(n);
    n++;
    
}while(n<50)
