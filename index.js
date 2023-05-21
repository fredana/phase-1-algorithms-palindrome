function isPalindrome(word) {
  // Write your algorithm here
  
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanedStr = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    // Check if the cleaned string is equal to its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
  
  
}

/* 
  Add your pseudocode here

  The test suite consists of several test cases:

The first test case checks if the string "abba" is a palindrome. It expects the isPalindrome function to return true.
The second test case checks if the string "racecar" is a palindrome. It also expects the isPalindrome function to return true.
The third test case checks if the string "a" is a palindrome. Again, it expects the isPalindrome function to return true.
The fourth test case checks if the string "robot" is a palindrome. It expects the isPalindrome function to return false.
The fifth test case checks if the string "ab" is a palindrome. It also expects the isPalindrome function to return false.
By running this test suite, we can verify whether the isPalindrome function correctly identifies palindromes.
*/

/*
  Add written explanation of your solution here

  This function takes a string as an argument and performs the following steps:

It converts the string to lowercase using the toLowerCase method to ignore case sensitivity.
It uses the replace method with a regular expression (/[^a-z0-9]/g) to remove all non-alphanumeric characters from the string. 
This step ensures that only letters and digits are considered for palindrome comparison.
It checks if the cleaned string is equal to its reverse. It splits the cleaned string into an array of characters using split(''), 
reverses the array using reverse(), and joins the reversed array back into a string using join('').
The function returns true if the cleaned string is equal to its reverse, indicating that the original string is a palindrome. Otherwise, 
it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
