const myarr = [33,'hello', null];
console.log(myarr);
console.log(typeof myarr);
console.log(Array.isArray(myarr))

//indexing
const movies = ['avanger','my fault','spiderman','bhagam','quite'];
console.log(movies[3]);
console.log(movies.indexOf('quite'));
console.log(movies.at(-2));
console.log(movies.at(3));

movies[1]='your fault';
console.log(movies);
//slicing
console.log(movies.slice(2,4));







