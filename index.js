function isPalindrome(word) {
  // Write your algorithm here
 
  let reversedWord = reverseWord(word)

return word === reversedWord
}

function reverseWord(word){
  return word.split('').reverse().join('')
}
/* 
  Add your pseudocode here
  
  creates a string that is backwards 
  checks if the two match
  if not return false 
  if yes return true

*/

/*
  Add written explanation of your solution here
  create a string of the word in reverse with .split() to create an array of the letters 
  then .reverse() to reverse the array
  then .join() to join the new array into a string 
  return the boolean expression of the two compared words

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting true')
  console.log('=>', isPalindrome("abba"))


  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
