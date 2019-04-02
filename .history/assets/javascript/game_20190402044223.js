 var newGame = true
 var crystalPts = [],
   randomNumber = 0,
   totalPts = 0
 var wins = 0,
   losses = 0
 var lblTotalPts ="Your total so far: ",
      lblRandomNum = "The number to match: "
 

$(document).ready(function() {
 initGame()
  $(".crystal").click(function(){
  var $target = $(this).attr("id")
   console.log($target);
  // if (newGame) {
  //   initGame()
  // }
    console.log(crystalPts)
    console.log(totalPts)
    for (let i=0; i<4; i++) { 
      itarget="crystal_"+i
      console.log(itarget)
      if (itarget==$target){
        var iVal=crystalPts[i]
        console.log(iVal)
        $(itarget).prop('title',crystalPts[i])
        //console.log(i + ' ' + crystalPts +' '+crystalPts[i])
        totalPts = totalPts + iVal;
        console.log(totalPts)
      }
    }

  // show total points
  $('#currentTotal').text(lblTotalPts+totalPts)
  //$('#currentTotal').append(totalPts)
  if (totalPts>=randomNumber){
    if (totalPts===randomNumber){
      alert("you win");
       wins++;
        //target.innerHTML = target.innerHTML + "      " + thisValue
       $('#wins').append(wins)
       // show wins
    }
    if (totalPts>randomNumber){
      alert("you lose");
      losses++;
       $('#losses').append(losses)
      //show losses
    }
    initGame();
  }
 
  

});
});

function initGame(){
      crystalPts = [];
      while (crystalPts.length<4) {
        iVar = getRandomPts(12);
        if (!crystalPts.includes(iVar)){
        // if iVar isn't already in the array
          crystalPts.push(iVar);
        }
        //console.log(crystalPts[i])
      }
       $(".crystal").prop('title', '?')
      
     // newGame = false;
      totalPts=0;
       $('#currentTotal').text(lblTotalPts + totalPts)
      randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
      console.log(randomNumber);
       $('#randomTarget').text(lblRandomNum+randomNumber)

  //for crystals 0-3
  // assign random number 1-12
  // randomNumber assign random number 19-120
  // points=0
  // show wins, show losses, show points, show random
}
function getRandomPts(max) {
  return Math.floor(Math.random() * Math.floor(max))+1;
}
function getRandomRng(max,min){
  Math.floor(Math.random() * (max - min + 1)) + min;
}