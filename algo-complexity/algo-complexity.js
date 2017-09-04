/*
  Write your explanation here as a comment.
  For example, you might say...
    -This function has [insert time complexity], because [some line of code] means [something describing the nature of the implementation]
*/


// Problem 1: Retrieval of a value from a hash table using the following function with regard to the size of the hash table. knowing that the key never get very large

/*
 Complexity:
 // This function has [O(1)], because [for (key.length never getting large] means [no considerable iterating loops over an array which is key array input in this case]
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
 Complexity:
 // This function has [O(log n)], because [item < array[center] ? array.slice(0, center) : array.slice(center);] means [each time I divide the search scope to half of the previous epoch]
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
 Complexity: This function has [O(n^2)], because [for (var i = 0; i < array.length; i++)] and [itereating over two similar array (original and sliced one)]
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
