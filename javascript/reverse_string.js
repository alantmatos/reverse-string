




const reverseString = (str) => {
  let reversed_str = "";
  
  for ( let i = str.length -1; i > -1; i--){
    reversed_str = reversed_str + str[i]
  }
  return reversed_str
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("Expecting ton")
  console.log("=>", reverseString('not'))

}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
/*
Rewriting:
function takes in a string and output the reversed string.

Validates:
console.log(reverString)

Pseudocode:
function takes in a string
split the letters of the string and push into an array
print the array in reversed order





*/