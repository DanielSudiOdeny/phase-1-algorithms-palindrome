function isPalindrome(word) {
  // Write your algorithm here
  const string = word.toLowerCase();
  const stringArr = string.split("");
  const stringArrReverse = stringArr.reverse();
  const newStr = stringArrReverse.join("");

  const isPalindrome = string === newStr ? true : false;

  return isPalindrome;
}

console.log(isPalindrome("Abba"));

/* 
  Add your pseudocode here
  Palindrome
  function isPalindrome(string) {
    Convert string to lowercase
    Convert the string into an array of characters
    Reverse the elements in the array
    Convert the array back to string
      IF original string === newString
          print true
      ELSE 
          print false
  }


*/

/*
  Add written explanation of your solution here
  A function isPalindrome that takes a single parameter which is a string
  The string letters are all converted to lowercase and stored in a variable
  The string is then converted to an array using method arr.split(" ")
  The arr is then reversed using the method arr.reverse(" ");
  The reversed arr is then joined back to a string and stored into a new variable.
  If the newly declared variable has a string that matches the original string stored in the original variable return true
  else return false 
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
