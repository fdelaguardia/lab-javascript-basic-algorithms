// Iteration 1: Names and Input
const hacker1 = "Fernand";
const hacker2 = "Jacob";

console.log(`The driver's name is ${hacker1}.`)
console.log(`The navigators's name is ${hacker2}.\n`)





// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters\n`)
  } else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!\n`)
  } else {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters\n`)
  }





// Iteration 3: Loops
let driversName = "";
for(let a = 0; a < hacker1.length; a++){
  
  driversName += hacker1[a] + " ";
}
console.log(driversName.toUpperCase())

let navigatorName = "";
for(let b = hacker2.length - 1; b >= 0; b--){
  
  navigatorName += hacker2[b] + " ";
}
console.log(navigatorName.toUpperCase())

if (hacker2[0] > hacker1[0]) {
  console.log(`The driver's name goes first.\n`)
} else if (hacker2[0] === hacker1[0]) {
    console.log(`What?! You both have the same name?\n`)
} else {
  console.log(`Yo, the navigator goes first definitely.\n`)
}





//Bonus 1:
const longText = "Vestibulum elementum est sit amet massa hendrerit, ac porta lorem ultricies. Vestibulum faucibus interdum justo in condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. In non accumsan enim. Nulla aliquet nisi lacus, et facilisis tortor dignissim eget. Vestibulum volutpat quis nibh at sagittis. Pellentesque ut molestie eros. Praesent non dui ullamcorper tellus imperdiet interdum vel quis nunc. Nam id metus vitae ligula porta cursus sit amet eget lorem. Nunc ultrices consectetur posuere. Integer finibus quam ac leo tincidunt fringilla. Nulla congue dolor a erat bibendum, sit amet consequat ipsum luctus. Sed ultricies nec nunc vitae pellentesque. Suspendisse dapibus ornare tempor. Nulla nec mi accumsan, tempus nibh vitae, feugiat nulla. Donec in suscipit risus, in maximus ligula. Nulla dignissim purus a ultrices viverra. Suspendisse et vehicula ligula. Curabitur sit amet mi risus. Nulla eget orci non lorem elementum porta vitae id lorem. Donec quis finibus dui. Maecenas venenatis justo sit amet sagittis pharetra. Sed ante leo, rutrum condimentum ullamcorper vitae, dictum sit amet libero. Curabitur cursus tellus et feugiat ornare. Cras a vestibulum massa. Suspendisse posuere, risus a gravida hendrerit, odio odio luctus libero, Et et lobortis velit libero eu augue. Sed libero urna, mattis non dignissim in, aliquam at justo. Donec volutpat turpis eget ex tincidunt, ut ultrices felis aliquet. Aliquam erat volutpat. Sed sodales sed lorem eu semper. Curabitur in dui ut diam molestie faucibus. Cras in arcu eget lectus condimentum hendrerit. Mauris leo ligula, ullamcorper eu massa sit amet, luctus luctus et. Integer quis lorem vel nunc laoreet pharetra."

let numOfWords = 1;
for (let c = 0; c < longText.length; c++) {
  if (longText[c] === " ") {
    numOfWords ++;
  }
}
console.log(`The number of words is: ${numOfWords}.`)

let numOfWords2 = longText.split(" ").length

console.log(`TThe number of words is: ${numOfWords2}.`)

let numOfLatinWord = 0;
for (let d = 0; d < longText.length; d++){
  if (longText[d]+longText[d+1]+longText[d+2]+longText[d+3] === " et ") {
    numOfLatinWord ++;
  } else if (longText[d]+longText[d+1]+longText[d+2] === "Et ") {
    numOfLatinWord ++;
  } else if (longText[d]+longText[d+1]+longText[d+2]+longText[d+3] === " et.") {
    numOfLatinWord ++;
  } 
}
console.log(`The number of the Latin word et is: ${numOfLatinWord}.\n`)





//Bonus 2:
const phraseToCheck = "put it up";
let reversePhraseToCheck = "";
for(let e = phraseToCheck.length - 1; e >= 0; e--) {
  reversePhraseToCheck += phraseToCheck[e];
}

let withoutPunctuation = phraseToCheck.replace(/\W|_/g, '').toLowerCase()
let reversed = withoutPunctuation.split('').reverse().join('').toLowerCase()

if (withoutPunctuation === reversed) {
  console.log("This is a palindrome")
} else {
  console.log("this is not a palindrome")
}