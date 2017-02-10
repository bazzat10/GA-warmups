console.log('JAVA SCRIPT granny talk');

var grandpaTalk_called = false;

var grannyTalk = function(talk){

  var year = (Math.random() * (1950 -  1930)) + 1930;
  var year2 = Math.round(year);
  var grandpa_year = Math.round((Math.random() * (2017 -  1981)) + 1981);

  if (grandpaTalk_called === true){
    if(talk === 'BYE'){
      console.log(" Grandpa: BOY!!! what's that, I DID NOT HEAR YOU..");
    } else {
      if(talk === talk.toUpperCase()){
      console.log('Grandpa: NO, NOT SINCE ' + grandpa_year);
      };
    };

    if(talk === talk.toLowerCase()){
      console.log('Grandpa: SPEAK UP SUNSHINE');
    };

  }

  if(talk === 'BYE' && grandpaTalk_called === false){
    console.log("Grandma: What's that honey, I didn't hear you..");
  } else {
    if(talk === talk.toUpperCase() && grandpaTalk_called === false){
    console.log('Grandma: NO, NOT SINCE ' + year2);
    };
  };

  if(talk === talk.toLowerCase() && grandpaTalk_called === false){
    console.log('Grandma: SPEAK UP SONNY JIM');
  };


};

var grandpaTalk = function (talk){
  grandpaTalk_called = true;
  grannyTalk(talk);

  //console.log('granpaTalk function working');
  //console.log(grandpaTalk_called);
}
