// This example will showcase the 4 main helpful higher order loops

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// The foreach() method allows you to use/change values in an array. It is helpful for doing tasks like printing out every value in an array.

// Beware, with foreach() you are changing the actual array it is being used on, not creating a new array. This could lead to some unexpected results if you change the array in place as you iterate, like potentially skipping over values
testArray.forEach(function(item) {
  console.log(item);
});

// The default parameters of the callback function are the item being used, the index of that item, and the array being traversed (which likely will not be used).
testArray.forEach(function(item, index) {
  console.log(index);
});

// The map() function allows you to create a new array based on a callback function

// Creating a new array using map() is almost always preferable to changing an array using foreach
let timesTen = testArray.map(num => {
  return num * 10;
});

console.log(testArray);
console.log(timesTen);

// The filter() function allows you to create filtered arrays based on a certain criteria in a callback function

let noEvens = testArray.filter(num => {
  return num % 2 !== 0;
});

console.log(noEvens);

// The reduce() function allows you to combine an array based on a callback function

// reduce() has one more required parameter in the callback function: an accumulator (which accumulates all the return values)

// reduce() also has a second optional argument for an initial value, the default/unspecified value is 0

let arraySum = testArray.reduce((accumulator, num) => {
  return accumulator + num;
}, 100);

console.log(arraySum);
