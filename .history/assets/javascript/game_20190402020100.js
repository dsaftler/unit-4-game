$(document).ready(function() {
  var newGame=true
  var crystalPts, randomNumber,totalPts,wins,losses

  $(".crystal").click(function(){
  var target = $(this).attr("id")
  alert(target);
  if (newGame) {
    function initGame()
    newGame=false
  }

    for (let i=0; i<4; i++) { ;
      if ("crystal_" + i===target){
        totalPts = totalPts + crystalPts[i]
      }
      
     
      
      // if ((this).attr('id') === target) {
      //   alert("got it "+target)
      // }
    }
    // which crystal?  can I interogate the click?
  // $("#crystal_2").click(addPoints(this));
  // $("#crystal_3").click(addPoints(this));
  // $("#crystal_4").click(addPoints(this));
  //add (x) points to total #id="crystal_0"
  // show total points
  // if points<random
  // return
  // if if points===random
  //    win game?
  //    increment wins
  // else
  //    lose game?
  //    increment losses
  //  initGame()

});
});

function initGame(){
      var crystalPts = [0, 0, 0, 0];
      for (let i = 0; i < 4; i++) {
        crystalPts[i] = getRandomPts(12);
      }
      totalPts=0
      randomNumber=getRandomPts(120)
      console.log(crystalPts + ' ' +totalPts+' '+randomNumber)
      

  //for crystals 0-3
  // assign random number 1-12
  // randomNumber assign random number 19-120
  // points=0
  // show wins, show losses, show points, show random
}
function getRandomPts(max) {
  return Math.floor(Math.random() * Math.floor(max))+1;
}