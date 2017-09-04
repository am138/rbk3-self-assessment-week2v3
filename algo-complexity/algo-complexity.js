/*
  Write your explanation here as a comment.
  For example, you might say...
    -This function has [insert time complexity], because [some line of code] means [something describing the nature of the implementation]
*/


// Problem 1: Retrieval of a value from a hash table using the following function with regard to the size of the hash table. knowing that the key never get very large

/*
 Complexity: The retrieval function has a (constant time complexity) regarding the size of hash table, because the process is the 			  same regardless of the key or key length and since the key can't get very long, we can neglect the hashing 					functionality to be constant while hashing function (the for loop) has a linear complexity O(n).
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
 Complexity: The function below have a logarithmic time complexity O(lg n) where lg is the logarithmic function of base 2.
 			That's because after each recursion call to the function, we continue working with half of the array in the previous call. that's : n , n/2 , n/4 , n/8 ,.. , 1  
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
 Complexity: the function below has a linear time complexity, because the amount of work done by the code on the array is 					directly proportional to the length of that array.
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
