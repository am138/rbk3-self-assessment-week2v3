/*
  Write your explanation here as a comment.
  For example, you might say...
    -This function has [insert time complexity], because [some line of code] means [something describing the nature of the implementation]
*/


// Problem 1: Retrieval of a value from a hash table using the following function with regard to the size of the hash table. knowing that the key never get very large

/*
 Complexity: the time complexity is O(n) , because all statment constant except the for loop will O(1)+ O(n)+ O(1)= O(n) 
 */

var retrieve = function(key) {
  var hash = 0;  //O(1)
  for (var i = 0; i < key.length; i++) {
    hash = (hash + Math.pow(i, hash)) % array.length;
  }  // O(n)
  return array[hash]; // O(1)
};


// Problem 2: sortedArrayContainsItem with regard to the length of the passed-in array

/*
 Complexity:the time complexity is O(n) , because O(1)+ O(1)+ O(1)+ O(n)= O(n) 
 */


var sortedArrayContainsItem = function(array, item) {
  var center = Math.floor(array.length / 2); //O(1)
  if (array[center] === item) {
    return true;
  } //O(1)
  var halfOfArray = item < array[center] ? array.slice(0, center) : array.slice(center); //O(1)
  return sortedArrayContainsItem(halfOfArray, item); //O(n) for recarcen
};


// Problem 3: hasDuplicates with regard to the length of the passed in array

/*
 Complexity: the time complexity is O(n) , because we have one loop and it is not insted loop will O(1)+ O(1)+ O(n)= O(n) 
 */

var hasDuplicates = function(array) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i]; //O(1)
    if (array.slice(i + 1).indexOf(item) !== -1) {
      return true;
    } // O(1)
  } //O(n)
  return false;
};
