const user ={
    name: 'lastrade',
    email:'lestrade@gamil.com',
    age:23,
    class:'A',
    

};
console.log(user);
console.log(user.name);
console.log(user['email']);
user.age=24;
user.address='lucknow';
console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));

const smartphone ={
    brand:'samsung',
    model:'s24',
    price: 78000,
    colors: ['black','white','blue'],

}
//access price of smartphone
console.log(smartphone.price);
//change price of smartphone

smartphone.price=58000;
console.log(smartphone.price);
//access 2nd color of phone
console.log(smartphone.colors[1]);

//add colors
smartphone.colors.push('red');
console.log(smartphone.colors);

//replace color red whith green


smartphone.colors[3]='green';

console.log(smartphone.colors);

const smartphoneArray=[{
      brand:'samsung',
    model:'s24',
    price: 78000,
    colors: ['black','white','white'],
},
{
      brand:'apple',
    model:'iphone 16',
    price: 178000,
    colors: ['black','white','blue'],
},
{
      brand:'oneplus',
    model:'onepuls 16',
    price: 58000,
    colors: ['black','white','blue'],
},
{  brand:'oppo',
    model:'822',
    price: 15000,
    colors: ['black','white','blue'],
},
{
      brand:'vivo',
    model:'vivo note',
    price: 18000,
    colors: ['black','white','blue'],
}]

console.log(smartphoneArray);
console.log(  'samsung');


console.log(smartphoneArray[0]);
console.log(smartphoneArray[3].brand);
console.log(smartphoneArray[3].colors[2]);
//add colors

smartphoneArray[3].colors.unshift('red');
console.log(smartphoneArray[3].colors);
//chang price
 smartphoneArray[1].price= 174999;
console.log(smartphoneArray[1].price);
//replace 
smartphoneArray[0].colors[0]='silver','blue';
smartphoneArray[0].colors[1]='blue';

console.log(smartphoneArray[0].colors);
smartphoneArray[1].colors.splice(0 , 2,'silver','green');//first write index to remove or if remove write the repace element
console.log(smartphoneArray[1].colors);
//find the sum of 1st and 3nd phone price in the array

const sum = smartphoneArray[0].price + smartphoneArray[1].price;
console.log(sum);

// add a warrenty key with value 2 years to smartphonearray 1

smartphoneArray[0].warrenty='2 years';
console.log(smartphoneArray[0]);
//create a new array with only the smartphone brands.
const smartphoneBrands =smartphoneArray.map((phone) => {
    return phone.brand;
})
console.log(smartphoneBrands);



//(using forEach) 

//fliter phone with prices less than 75000
console.log('------prices<75000----');


const smartphoneprice = smartphoneArray.filter((phone) =>{
    return phone.price <75000;
})


console.log(smartphoneprice);

const keyword = 'pl';

const filteredphones = smartphoneArray.filter((phone) => {
    return phone.brand.toLowerCase().includes(keyword.toLowerCase());// if the user only writes pl it will show the similar results
});

console.log(filteredphones);





