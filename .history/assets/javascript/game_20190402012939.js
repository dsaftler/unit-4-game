$(document).ready(function() {
$(".crystal").click(function(){
    alert($(this).attr('id'));
    for (let i=0; i<4; i++) { ;
      target="crystal_"+i;
      
      if (this.attr.id===target){
        alert("got it "+target)
      }
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
  //for crystals 0-3
  // assign random number 1-12
  // randomNumber assign random number 19-120
  // points=0
  // show wins, show losses, show points, show random
}
