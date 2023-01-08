// filter & map  - Examples: 01

// a)

// const numbers = [1, -1, 2, 3] ;
// const filtered = numbers.filter(num => num >= 0);
// console.log(filtered);        // gives us [ 1, 2, 3 ]

// b)

// const numbers = [1, -1, 2, 3] ;
// const filtered = numbers.filter(num => num >= 0);
// const items = filtered.map(num => '<li>' + num + '</li>') ;
// console.log(items);        // gives us 
// //           [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]

// c)

// const numbers = [1, -1, 2, 3] ;
// const filtered = numbers.filter(num => num >= 0);
// const items = filtered.map(num => '<li>' + num + '</li>') ;
// const html = items.join();  // by default it is comma!
// console.log(html);        // gives us 
// //           <li>1</li>,<li>2</li>,<li>3</li>

// d) 1)

// const numbers = [1, -1, 2, 3] ;
// const filtered = numbers.filter(num => num >= 0);
// const items = filtered.map(num => {
//     const obj = {value: num } ;
//     return obj;
// });
// console.log(items);        // gives us 
//           [ { value: 1 }, { value: 2 }, { value: 3 } ]

// d) 2)

// const numbers = [1, -1, 2, 3] ;
// const filtered = numbers.filter(num => num >= 0);
// const items = filtered.map(num => {
//    return {value: num } ;   
// });
// console.log(items);        // gives us 
//           [ { value: 1 }, { value: 2 }, { value: 3 } ]

// d) 3)

// const numbers = [1, -1, 2, 3] ;
// const filtered = numbers.filter(num => num >= 0);
// const items = filtered.map(num => ({value: num }));
// console.log(items);        // gives us 
//           [ { value: 1 }, { value: 2 }, { value: 3 } ]

// d) 4)

// const numbers = [1, -1, 2, 3] ;
// const items = numbers.filter(num => num >= 0).map(num => ({value: num }));
// console.log(items);        // gives us 
//           [ { value: 1 }, { value: 2 }, { value: 3 } ]

// d) 5) final: shortest!

// const numbers = [1, -1, 2, 3] ;
// const items = numbers
// .filter(num => num >= 0)
// .map(num => ({value: num }));
// console.log(items);        // gives us 
//           [ { value: 1 }, { value: 2 }, { value: 3 } ]


// ..........................................



// reduce  - Examples: 01

// a) old way of writing of code!

// const numbers = [1, -1, 2, 3] ;

// let sum = 0;
// for (let num of numbers)
// sum += num;
// console.log(sum);

// b) reduce - let's see what is happening!

// initially we said accumulator is zero; So, accumulator = 0,
// in the first round current value will be set to the first number of the aaray; so, current value = 1,
// as a result accumulator will be 1!

// accumulator = 0, current value = 1, => accumulator = 1    (0 + 1 = 1) (first round!)
// accumulator = 1, current value = -1, => accumulator = 0    (1 + (-1) = 0) (second round!)
// accumulator = 0, current value = 2, => accumulator = 2    (0 + 2 = 2) (third round!)
// accumulator = 2, current value = 3, => accumulator = 5    (0 + 2 = 5) (last call - final round!)

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// }, 0);
// console.log(sum);        // gives us [ 5 (total) ]

// b) reduce - shorter!

// now, we can make this code even shorter, we can get rid of this return key word because we have a single line
// and we are simply returning a value, so remove the return key word, semicolon and the curly braces, finally put everthing on a single line

// const sum = numbers.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
// );
// console.log(sum);        // gives us [ 5 (total) ]


// reduce  - more details!  Examples: 02

const numbers = [1, 2, 3, 4, 5] ;
const total = numbers.reduce ((acc, val) => (acc + val),0);
console.log(total);
console.log(numbers);




