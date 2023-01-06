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


// filter & map  - Examples: 02


