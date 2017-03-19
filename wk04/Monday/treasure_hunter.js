console.log('javsacript for treasure hunter');
//It belongs in a museum!

// You are an adventuring archaeologist, and have found some treasure maps! There are too many to check individually, so write a function 'treasureFinder' that takes an array of arrays as an argument (see sample inputs below) and returns an array with the location of the treasure (X) as an array representing the X and Y coordinates, for example:
//
// var map1 = [
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","X","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"]
// ];
//
// // Sample output:
//
// treasureFinder(map1) // should return [2, 2];
// You can assume that the size of the treasure map will be the same.
//
// Some additional maps:
//
// var map2 = [
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","X","A","A","A"]
// ];
//
// var map3 = [
// ["A","A","A","A","A"],
// ["A","A","V","A","A"],
// ["A","A","A","V","A"],
// ["v","v","V","v","X"],
// ["A","V","A","A","A"]
// ];
//
// var map4 = [
// ["A","A","A","A","A"],
// ["A","A","V","A","A"],
// ["A","A","A","V","A"],
// ["v","v","V","v","A"],
// ["X","V","A","A","A"]
// ];
// Bonus:
//
// Modify your function to accept maps of any size, and to accept a second argument for the key to look for. It should also handle non-unique 'key' values gracefully.
//
// var holyGrailMap = [
// ["v","v","V","v","S","S"],
// ["v","v","V","v","S","S"],
// ["v","v","V","v","S","S"],
// ["v","v","V","v","S","S"],
// ["v","v","G","v","S","S"],
// ["v","v","H","v","S","S"],
// ["v","v","V","v","S","S"],
// ["A","V","A","A","A","S"]
// ];
//
// //sample outputs:
//
// treasureFinder(holyGrailMap, "G") // should return [4, 2];
// treasureFinder(holyGrailMap, "H") // should return [5, 2];
// treasureFinder(holyGrailMap, "H") // should return [5, 2];
//
// treasureFinder(holyGrailMap, "V") // should return 'that doesnt belong in a museum!';

var map1 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","X","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]
];

var map2 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","X","A","A","A"]
];

var map3 = [
["A","A","A","A","A"],
["A","A","V","A","A"],
["A","A","A","V","A"],
["v","v","V","v","X"],
["A","V","A","A","A"]
];

var map4 = [
["A","A","A","A","A"],
["A","A","V","A","A"],
["A","A","A","V","A"],
["v","v","V","v","A"],
["X","V","A","A","A"]
];

var holyGrailMap = [
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","G","v","S","S"],
["v","v","H","v","S","S"],
["v","v","V","v","S","S"],
["A","V","A","A","A","S"]
];

var treasureFinder = function(map){

  for(var row=0; row<map.length; row++){
    for(var column=0; column<map[row].length; column++){
      if(map[row][column] === 'X'){
      //  debugger;
        var Xmark = column;
        var Ymark = row;
        return[Ymark,Xmark];
      };
    };
  };
};

var treasureFinder2 = function(map, value){

  if(value === 'V'){
    return('does not belong in a museum');
  };

  for(var row=0; row<map.length; row++){
    for(var column=0; column<map[row].length; column++){

      if(map[row][column] === value){
      //  debugger;
        var Xmark = column;
        var Ymark = row;
        return[Ymark,Xmark];
      };
    };
  };
};
