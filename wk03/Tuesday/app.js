console.log('javascript - longest string');


var s1 = 'XYMNOPQRST';
var s2 = 'ADECJQHEBST';

var s1Split = s1.split("");
var s2Split = s2.split("");

var stringConcatanated = s1Split.concat(s2Split);

var stringInNumbers = [];

var resultString = [];


console.log(s1Split);
console.log(s2Split);


for(var Counter = 0; Counter < stringConcatanated.length; Counter++){
  var numbers = stringConcatanated[Counter].charCodeAt(); // convert characters to numbers
  stringInNumbers.push(numbers);
};

var sortedString = stringInNumbers.sort(); // sorted array of numbers from smallest to largest

console.log(sortedString);


for (var Counter2 = 0; Counter2 < sortedString.length; Counter2++){
  var numbers = sortedString[Counter2]
  resultString.push(String.fromCharCode(numbers)); // convert numbrs into Characters
};

console.log(resultString);

/// Kasun's code

// function longest(s1, s2) {
//   return s1.concat(s2).split('').sort().map(function(letter, index, arr) {
//     return letter == arr[index+1] ? undefined : letter;
//   }).join('');
// }
