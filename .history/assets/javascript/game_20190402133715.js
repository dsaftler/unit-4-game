 var newGame = true
 var crystalPts = [],
   randomNumber = 0, totalPts = 0
 var wins = 0, losses = 0
 var lblTotalPts ="Your total so far: ",
      lblRandomNum = "The number to match: ",lblWins="Wins: ",lblLosses="Losses: "
 var maxRndCrystal=12, maxRndRandom=120, minRndRandom=19;
 

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
      console.log(totalPts)
    }
  }

  // show total points
  $('#currentTotal').text(totalPts)
  //$('#currentTotal').append(totalPts)
  if (totalPts>=randomNumber){
    if (totalPts===randomNumber){
      // alert("you win");
        wins++;
        //target.innerHTML = target.innerHTML + "      " + thisValue
        console.log(lblWins + wins);
        $('#wins').text(wins);
       // Playsound("sound1");
        // show wins
    }
    if (totalPts>randomNumber){
      // alert("you lose");
      losses++;
        $('#losses').text(losses)
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
  $('#currentTotal').text(lblTotalPts + totalPts);
  // randomNumber = Math.floor(Math.random() * (maxRndRandom - minRndRandom + 1)) + minRndRandom;
  randomNumber = getRandomRng(maxRndRandom,minRndRandom);
  //console.log(randomNumber); 
  // randomNumber assign random number 19-120
  $('#randomTarget').text(randomNumber);
}
function getRandomPts(max) {
  return Math.floor(Math.random() * Math.floor(max))+1;
}
function getRandomRng(max,min){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function PlaySound(soundObj) {
  var sound = document.getElementById('sound1');
  sound.Play();
}