function addnums(a,b){
   var c= a+b;//var only use in function and same let const and c 
   
    console.log(c);
    
}
addnums(435,24);

  avg =function (a,b,c){
    const res = (a+b+c)/3;
    //console.log(res);
    return res
    
}
 const ans =avg(74,54,54);
console.log(ans);

const factorial = (n) => {

let fact = 1;
for(let i=1;i<=n;i++){
    fact =fact *i;
}
return fact;
}
const facts = factorial(5);
console.log(facts );




