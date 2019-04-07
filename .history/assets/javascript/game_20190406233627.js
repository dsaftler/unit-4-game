 var newGame = true
 var crystalPts = [],
   randomNumber = 0, totalPts = 0
 var wins = 0, losses = 0
 var maxRndCrystal=12, maxRndRandom=120, minRndRandom=19;
 //var audioWin = new Audio("tada.wav");
 //var audioLose = new Audio("bong.wav");

$(document).ready(function() {
 
  initGame()
  $(".crystal").click(function(){
  var $target = $(this).attr("id")
  // console.log($target);
  // console.log(crystalPts)
  // console.log(totalPts)
  for (let i=0; i<4; i++) { 
    itarget="crystal_"+i
    console.log(itarget)
    if (itarget==$target){
      var iVal=crystalPts[i]
      console.log(iVal)
      itarget="#"+itarget
      $(itarget).prop('title',crystalPts[i])
      //console.log(i + ' ' + crystalPts +' '+crystalPts[i])
      totalPts = totalPts + iVal;
      //console.log(totalPts)
    }
  }

  // show total points
  $('#currentTotal').text(totalPts)
  //$('#currentTotal').append(totalPts)
  if (totalPts>=randomNumber){
    if (totalPts===randomNumber){
      // alert("you win");
        wins++;
        //console.log(lblWins + wins);
        // show wins
      $(".winscnt").addClass("liteup");
        $('#wins').text(wins);
        var clrLiteUp = setTimeout(function () {
          $(".winscnt").removeClass("liteup");
      }, 2000);
          //audioWin.play();
       // Playsound("sound1");
    }
    if (totalPts>randomNumber){
      // alert("you lose");
      $(".lossescnt").addClass("liteuploss");
      losses++;
        $('#losses').text(losses)
      var clrLiteUp = setTimeout(function () {  
        $(".lossescnt").removeClass("liteuploss");
      }, 2000);

        //audioLose.play();
      //show losses
    }
    initGame();
  }
  });
});

function initGame(){
  crystalPts = [];
  while (crystalPts.length<4) {
      //for crystals 0-3
      // assign random number 1-12
    iVar = getRandomPts(maxRndCrystal);
    if (!crystalPts.includes(iVar)){
    // if iVar isn't already in the array
    // this prevents multiple of the same numbers
      crystalPts.push(iVar);
    }
  }
  $(".crystal").prop('title', '?')
  totalPts=0;
  //  show points, show random
  $('#currentTotal').text(totalPts);
  // randomNumber assign random number 19-120
  randomNumber = getRandomRng(maxRndRandom,minRndRandom);
  //console.log(randomNumber); 
  $('#randomTarget').text(randomNumber);
}
function getRandomPts(max) {
  return Math.floor(Math.random() * Math.floor(max))+1;
}
function getRandomRng(max,min){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
