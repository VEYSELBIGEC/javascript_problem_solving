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

// Calculate the total value of the numbers in the array;

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


// Array reduce Method - more details!  Examples: 02

// The array reduce method executes a callback function (or a reducer function) on every elements of an array and it will return one single output value!
// Think of it like getting an array of items and then adding all of the items inside one resulting value.
// The reducer function's returned value is assigned to the accumulator, which can be used across each iteration and ultimately becomes the final, single resulting value.

//  A) Calculate the total value of the numbers in the array;

// const numbers = [1, 2, 3, 4, 5] ;
// const total = numbers.reduce ((acc, val) => (acc + val),0);
// console.log(total);     // gives us 15 (total value)
// console.log(numbers);   // gives us [1, 2, 3, 4, 5] DOES NOT MODIFY THE ARRAY !

// B) find the max value in the array!

// const max = numbers.reduce(callback, -Infinity);
// function callback(accumulator, value) {
//     if (accumulator > value){
//         return accumulator;
//     } else {
//         return value;
//     }   
// }
// console.log(max);     // gives us 5 (max value)

// C) find the min value in the array!

// const min = numbers.reduce (callback, +Infinity);
// function callback(accumulator, value) {
//     if (accumulator < value){
//         return accumulator;
//     } else {
//         return value;
//     }   
// }
// console.log(min);     // gives us 1 (min value)


// reduce  - more details!  Examples: 03

// const store = [
//     {product: 'laptop',
//     value: 1000,
//     count: 3
//     },
//     {product: 'desktop',
//     value: 1500,
//     count: 4
//     },
//     {product: 'mobile',
//     value: 500,
//     count: 10
//     }
// ];

// const totalValueStore = store.reduce(
//     (acc, val) => acc + val.value * val.count,
//     0
//     );
//     console.log(totalValueStore); // gives us 14000 (total value) (1000x3 = 3000
                                                                 // 1500x4 = 6000
                                                                 // 500x10 = 5000
                                                                  // total = 3000 + 6000 + 5000 = 14000)


//  .................................................

// Array sort Method -  Examples: 01

// We're also learning why the sort method doesn't work by default on an array of numbers and how we can fix that.
// the default sort order is ascending !
// it will convert the elements from the array to strings then it will compare their sequences of utf-16 code unit values

// const names = ['veysel', 'vedat', 'bigec', 'yuksel', 'saliha', 'veli'];
// names.sort();
// console.log(names); // gives us ['bigec', 'saliha', 'vedat', 'veli', 'veysel', 'yuksel']

//  but what happens if we want to sort an array of numbers ?

// .......................................................

// const numbers = [3, 1, 5, 13, 22, 29, 104, 58] ;
// numbers.sort();
// console.log(numbers);   // gives us [1, 104, 13, 22, 29, 3, 5, 58]
                        // but we were expecting the result as [1, 3, 5, 13, 22, 29, 58, 104]! then, what is the problem in here?

//  let's see how to fix this problem;
//  we create a compare function which takes in two parameters a and b meaning the elements which will be compared.
//  The outcome of this function the return of this function will decide which element comes first.
//  we have three scenarios;
//   1) if the return of this function is less than zero; a will come first,
//   2) if the return of this function is equal to zero; nothing will be changed,
//   3) if the return of this function is greater than zero; b will come first,


// numbers.sort(compareFunction);

// console.log(numbers);   // gives us now [1, 3, 5, 13, 22, 29, 58, 104]
                        
// function compareFunction(a, b) {     //  callback function !

//     // if return < 0 ... a comes first
//     // if return = 0 ... nothing will be changed,
//     // if return > 0 ... b comes first
//     return a - b ;
// }    

// ..........................................

// Array sort Method -  Examples: 02
// The sort method can work even with an array of objects 

// const products = [
//     {
//         name: 'laptop',
//         price: 1000,
//     },
//     {
//         name: 'desktop',
//         price: 1500,     
//     },
//     {
//         name: 'mobile',
//         price: 500,    
//     }
// ];

// products.sort();
// console.log(products);  // gives us  [ {name: 'laptop', price: 1000}, 
                                     //   {name: 'desktop', price: 1500}, 
                                     //   {name: 'mobile', price: 500} ]

                                    //  to fix this problem, let's write compare function!

// products.sort((a,b) => {        // we can write it even shorter products.sort((a,b) => a.price - b.price) !
//     return a.price - b.price ;  // if we want to sort them in descending order we can just write b.price - a.price
// });
// console.log(products);  // gives us now [ {name: 'desktop', price: 1500},   
                                        //   {name: 'laptop', price: 1000},
                                        //   {name: 'mobile', price: 500} ]



// ..........................................
// Array reverse Method -  Examples: 01 (it modifies = changes the original array!)

// a)

// const numbers = [1, 2, 3, 4, 5] ;
// numbers.reverse();
// console.log(numbers);  // gives us [5, 4, 3, 2, 1]

//  if we do not want to change the original array; we store the new array and create a shallow copy of this array using the concat method !

// b)

// const numbers = [1, 2, 3, 4, 5] ;
// const newArr = numbers.concat().reverse();           
//  or 
// const newArr = [...numbers].reverse(); (same thing with the line 273!)
// it is basicall same thing, we are creating a new array and reversing the the elements inside the array ! 
// console.log(numbers);  // gives us [1, 2, 3, 4, 5]
// console.log(newArr);  // gives us [5, 4, 3, 2, 1]

// .............................

const str = 'Hello World' ;
const reversedStr = str.split('').reverse().join('') ;
console.log(reversedStr);  // gives us 'dlroW olleH'

// .............................




