/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/
const range = (start, end) => {
  if (end <= start) {
    return [];
  } else {
    let result = range(start, end - 1);
    result.push(end - 1);
    return result;
  }
}



/*

The range function creates an array of numbers between a start and an end value
 (excluding the end value) by recursively calling itself with decreasing values until
start is equal to or greater than end.
If start is greater than or equal to end, an empty array is returned.
*/

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
