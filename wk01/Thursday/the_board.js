console.log('JS WORKING for The Board');

var row = prompt('enter row size'); // prompts user to enter a value for row
var input_column = prompt('enter column size'); // prompts user to enter a value for column

var column = input_column * 2;  // multiplies column by 2

var even_row = ""; // creates string for an even row
var odd_row = ""; // creates variabl string for odd rw


for (i = 0; i < row; i++) { // loops until it reaches number for rows

  if (i % 2 === 0) { // checks if row is an even
    while (even_row.length < column) { // if row is even do this
      even_row += '# '; // creates string with 'space after #'
    };
    console.log(even_row); // prints string to console
  } else { // else if do this
    while (odd_row.length < column) { // performs loop if row is odd
      odd_row += ' #' // creates string with 'space' before the #
    };
    console.log(odd_row); // prints string to console
  };

};


/*var row_size = 8;
var column_size = 8;
var row = '';
//var column = [];
var grid_size = 64;
//var board = [];
var row_string = [];

for (var j=0; i<column_size; j++ ){
  for (var i=0; i<row_size; i++){
   row += '# ';
  // if(i%16 === 0 && i !== 0)
   //{
    //row += '\n ';
   //};
  };
  console.log(row);
  row += '\n';
};*/








//console.log(row);
//onsole.log(row.length);
