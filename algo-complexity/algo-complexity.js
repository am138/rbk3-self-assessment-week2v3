/*
  Write your explanation here as a comment.
  For example, you might say...
    -This function has [insert time complexity], because [some line of code] means [something describing the nature of the implementation]
    the big O :
      1- constant : O(1), means that the input won't effect the time of implementation ;
      2- log(n) : as same as the binary search , the increment of input size will effect in logarithmic way 'to the base of 2', because each operation excludes the half of the input ;
      3- linear : O(n), means that the implementation takes more steps as the size increases of input, as same as the mapping of some array, will loop through all the elements , for each extra 'one' element we will loop 'one' ;
      4- quadiq : O(n**2), means each 'one' extra input we have 'n' more operations to implement ;
      5- O(constant**n) : worst case of complexity / constant for the pow of n, loop in each element -as same as array of arrays- 

*/


// Problem 1: Retrieval of a value from a hash table using the following function with regard to the size of the hash table. knowing that the key never get very large

/*
 Complexity: O(1);
 */

var retrieve = function(key) {
  var hash = 0;
  for (var i = 0; i < key.length; i++) {
    hash = (hash + Math.pow(i, hash)) % array.length;
  }
  return array[hash];
};


// Problem 2: sortedArrayContainsItem with regard to the length of the passed-in array

/*
 Complexity: O(log(n));
 */


var sortedArrayContainsItem = function(array, item) {
  var center = Math.floor(array.length / 2);
  if (array[center] === item) {
    return true;
  }
  var halfOfArray = item < array[center] ? array.slice(0, center) : array.slice(center);
  return sortedArrayContainsItem(halfOfArray, item);
};


// Problem 3: hasDuplicates with regard to the length of the passed in array

/*
 Complexity: O(n**2);
 */

var hasDuplicates = function(array) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    if (array.slice(i + 1).indexOf(item) !== -1) {
      return true;
    }
  }
  return false;
};
