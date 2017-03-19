console.log('JAVASCRIPT Ultimate Decider');

var decider;
var headCounter = 0;
var tailsCounter = 0;



var stop = function(){
  console.log('GAME RESET');
  tailsCounter = 0;
  headCounter = 0;
};

var flip = function(){
  decider = Math.round(Math.random());

  console.log(decider);

  if(decider === 1){
    headCounter += 1;
    document.getElementById('result').src="coinHeads.jpg";

    console.log('head counter: ' + headCounter);
  } else {
    tailsCounter += 1;
    document.getElementById('result').src="coinTails.jpeg"
    console.log('tails counter: ' + tailsCounter);
  };

  if(headCounter === 5){
    console.log('HEADS Win');
    stop();
  } else if (tailsCounter === 5){
    console.log('TAILS Win');
    stop();
  };
};



flipBtn.addEventListener('click', flip);
