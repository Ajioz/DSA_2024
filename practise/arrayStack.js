let letters = [];

let word = "racecar";

let rword = "";

// for (let alphabet in word) {
//     letters.push(word[alphabet])
// }

// Put letters of word in stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

console.log(letters);

// Pop off letter from the stack
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + " is a palindrome");
} else {
  console.log(word + " is not a palindrome");
}

// doing the above with method

let myName = "Ajiroghene Sunny";
let nameStack = [];
let revName = "";

for (let i = 0; i < myName.length; i++) {
  nameStack.push(myName[i]);
}

for (let j = 0; j < myName.length; j++) {
  revName += nameStack.pop();
}
console.log(`revName with pure approach is:  ${revName}`);


let revWord = myName.split("").reverse().join("");
console.log("Reverse word, using method approach is: ", revWord);
