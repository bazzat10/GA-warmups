console.log('JAVASCRIPT Mini Golf');

var golf = {
    bob: [3, 2, 6, 11, 9, 2, 6, 9, 10],
    jimbo: [5, 12, 9, 22, 13, 7, 16, 10, 11],
    fish: [2, 2, 4, 5, 4, 3, 6, 4, 1],
    par: [3,4,5,5,3,3,4,3,5]
  };

var totalBobScore = 0;
var totalJimboScore =0;
var totalFishScore = 0;

var bobScore = 0;
var jimboScore = 0;
var fishScore = 0;

var numberOfHoles = 9;


var totalScores = function(bobScore, jimboScore, fishScore){

    totalBobScore = totalBobScore + bobScore ;
    totalJimboScore = totalJimboScore + jimboScore;
    totalFishScore = totalFishScore + fishScore;

    if(i === (numberOfHoles-1)){
      console.log('Bob Total: ' + totalBobScore);
      console.log('Jimbo Total: ' + totalJimboScore);
      console.log('Fish Total: ' + totalFishScore);
      console.log('TOTAL Score: ' + (totalBobScore + totalJimboScore + totalFishScore));

    };
};

//var coursePar = function(){
  //
//};

  //  totalBobScore += bobScore;
  //  totalJimboScore += jimboScore;
  //  TotalFishScore += fishScore};


for (i=0; i<numberOfHoles; i++){

  bobScore = golf.bob[i];
  jimboScore = golf.jimbo[i];
  fishScore = golf.fish[i];

  totalScores(bobScore,jimboScore, fishScore);
};
