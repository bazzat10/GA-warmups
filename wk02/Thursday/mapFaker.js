console.log('JAVASACRIPT MAP FAKER')


var mapColumn = [];
var mapRow = [];
var map = [];

var rowLength = 5;
var columnLength = 5;

//creates map
for(createRows = 0; createRows < rowLength; createRows++){
  for(createColumns = 0; createColumns < columnLength; createColumns++){
    mapColumn.push('A');
  };
  mapRow.push(mapColumn);
  map.push(mapRow.splice(0,columnLength));
};





var makeFakeMap = function(row, column){
 map[row][column] = 'X';
 var columnCounter;
 var rowCounter;

 for(rowCounter=0; rowCounter<rowLength; rowCounter++){
   for(columnCounter=0; columnCounter<columnLength; columnCounter++){
     //enters values in each column
     console.log('column counter:' + columnCounter);
  };
  console.log('row counter:' + rowCounter);
  console.log('[' + map[rowCounter][columnCounter] + map[rowCounter][columnCounter] + map[rowCounter][columnCounter] + map[rowCounter][columnCounter] + ']');
 };
};




var createRowsColumns = function(){
  var row =  Math.floor(Math.random() * (rowLength - 0)) + 0;
  var column =  Math.floor(Math.random() * (columnLength - 0)) + 0;

  console.log(row);
  console.log(column);

  makeFakeMap(row,column);
};




btn.addEventListener('click', createRowsColumns);
