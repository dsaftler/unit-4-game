# unit-4-game

I've added a couple of "features"
1. There are four nubmers in the crystal array, and all random 1-12. I was seeing duplicates frequently.:
	My logic only adds to the array if the number doesn't already exist.
2. I find it hard enough to work out the math without having to remember the four numbers.:
	I added "?" as a title to each image div - 
	that changes to the value once the button is clicked so that the values can be seen prior to clicking
3. I figured out how to make the "Value" part of Random Number, Current Points, Wins, & Losses change without
	having to refresh the whole "text" tag, by using an internal Span... could have used that on the hangman game...


*** 2019-04-06
I tried to add a sound play at Win or Lose, but I'm getting an error
game.js:40 Uncaught (in promise) DOMException
which "googles" like a new Chrome policy to prevent unwelcomed intrusion.
I copied in the code from simple-timer, which played during the class, but I get the same error here.
I tried to use the solution to "un-mute" but it doesn't appear to work.  
I'm abandoning this enhancement, but would like to understand how to add audio to the game.

*** I've added a setTimeout of 2 seconds to Wins and Losses that adds a liteup class and then removes it after the win or loss is added.  This is to give a visual clue to the user.

*** I tried to make this scalable, but I'm still learning how to use media queries.  It collapses, but not neatly.