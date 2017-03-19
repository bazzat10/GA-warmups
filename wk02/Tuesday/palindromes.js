console.log('JAVASCRIPT working for palindromes');

var string = prompt('please enter a sentence or a word - check to see if it is a palindrome');
var stringArray = string.split(''); // splits the string into an array
var stringLength = stringArray.length; // gets the length of the array

var stringReverse = string.split('').reverse();//.join(); // splits the string then reverses the order in the array
var stringReverseLength = stringReverse.length; // gets the length of the array


//console.log(stringArray);
//console.log(stringLength);
//console.log(stringReverse);

for(i=0; i<stringReverseLength; i++){
  if(stringReverse[i] === ' '){ // finds and empty array and deletes it
      //console.log('enters IF statement when it finds an empty array');
      stringReverse.splice(i, 1); // deletes the the empty space.
  };
};


for(i=0; i<stringLength; i++){
  if(stringArray[i] === ' '){ // finds and empty array and deletes it
    //  console.log('enters IF statement when it finds an empty array');
      stringArray.splice(i, 1);
  };
};

console.log(stringArray);
console.log(stringReverse);

for(i=0; i<stringArray.length; i++){ // compares the two arrays - each value at a time
  if(stringArray[i] !== stringReverse[i]){
    console.log('NOT A PALINDROME');
    break; // breaks the code
  };
};

if (i === stringArray.length){
  console.log('CONGRATULATIONS ---> YOU HAVE ENTERED A PALINDROME');
};
