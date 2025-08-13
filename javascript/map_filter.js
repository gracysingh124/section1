const nums=[3,8,9,6,12,7];

const sqrnum=nums.map((a) =>{
    return a**2;
});
console.log(sqrnum);


//create an array with each element multiplied by 2
const muls=[3,2,4,5,6];

const swmuls=muls.map((a) =>{
    return a*2;
})
console.log(swmuls);


//without the removal of rupee it not convert into int
const prices=['₹338.54','₹66.5','₹666.65'];
const smprice= prices.map((a) =>{
    return parseInt(a.slice(1));
})
console.log(smprice);

//filter

const oddnums =nums.filter((n) =>{
    return n%2!==0;
});
console.log(oddnums);

const tprice=[3400,1300,500,120,5600,800];

//600-2000;
const miprice= tprice.filter((p)=>{
    return p>=600 && p<=2000;
})
console.log(miprice);

const friends=['raju','pinki','kaliya','chintoo','jaadoo'];

const xfriends= friends.filter((f)=>{
    return f.length>5

})
console.log(xfriends);

const gfriends= friends.map((r) =>{
    return r.toUpperCase()
})
console.log(gfriends);


const name=['SHRAYA KUMARI', 'ADITYA VERMA ', 'HARI RESHMI','ANCHAL SHUKLA', 'RAM PRASHAD YADAV'];

const people= name.map((p) => {
    return p.split(' ')[0];

})

console.log(people);
