function isPalindrome(word) {
  // Write your algorithm here
  wordString = word.replace(/\W/g, '').toLowerCase()
  
  console.log(`this is word ${wordString}`)
  let reverseWordString = wordString.split('').reverse().join('')

return wordString === reverseWordString
}
/* 
  Add your pseudocode here
  
  creates two strings by removing unwanted characters and all lowercase
  one is backwards
  checks if the two match
  if not return false 
  if yes return true

*/

/*
  Add written explanation of your solution here
  remove the unwanted characters and spaces with .replace() 
  change word to all lowercase with .toLowerCase()
  create a string of the word in reverse with .split() to create an array of the letters 
  then .reverse() to reverse the array
  then .join() to join the new array into a string 
  return the boolean expression of the two compared words

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting true')
  console.log('=>', isPalindrome("A man, a plan, a canal. Panama"))


  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
