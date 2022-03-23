//Player initiates game by clicking anywhere on their keyboard
//The machine displays and adds a color to the pattern
//User must select that color
//Machine checks to see if the users input matches the game gamePattern
//If guess is correct & the gamePattern is ended the machine picks another random color


var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

// Initiate Game

$("body").keydown(function() {
  if (gamePattern === undefined || gamePattern.length == 0){
    nextSequence();
  } else {
    $("h1").text("Kadir, the keyboard doesn't work right now. Keep playing the game. xoxo")
  }

});

// Pick random color

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  level = level + 1;
  $("h1").text("Level " + level)

  // tell the user the pattern so far
  for (var i = 0; i <= gamePattern.length; i++) {
    var activateMe = gamePattern[i];
    delay(i, activateMe);
  };

  function delay(i, activateMe) {
    setTimeout(() => {
      makeSound(activateMe);
      buttonAnimation(activateMe);
      console.log(gamePattern);
    }, 500 * i);
  }
};

// User clicks on button & answer is stored
$(".btn").on("click", function() {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  makeSound(userChosenColour);
  buttonAnimation(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

//check if answer matches pattern or start over
function checkAnswer(check) {
 if(gamePattern[check] === userClickedPattern[check] && gamePattern.length == userClickedPattern.length){
   console.log("Time to level up!");
   console.log("Game Pattern: " + gamePattern);
   console.log("User Pattern: " + userClickedPattern);
   anotherDelay();
 } else if (gamePattern[check] === userClickedPattern[check]){
   console.log("good job keep going");
 } else if (gamePattern === undefined || gamePattern.length == 0){
   $("body").addClass("game-over");
   setTimeout(function(){
     $("body").removeClass("game-over");
   }, 200 );

   $("h1").text("Dear Kadir, please press a key to start the game. xoxo")
 } else {
   $("body").addClass("game-over");
   setTimeout(function(){
     $("body").removeClass("game-over");
   }, 200 );

   $("h1").text("Game Over, Press Any Key to Restart")
   console.log("Game Pattern: " + gamePattern);
   console.log("Bummer User Pattern: " + userClickedPattern);
   level = 0;
   gamePattern = [];
   userClickedPattern = [];
 }
  }



function anotherDelay() {
  setTimeout(() => {
    console.log("you should level now!");
    userClickedPattern = [];
    nextSequence();
  }, 700);


}


// Pressed function

function buttonAnimation(color) {
  $("#" + color).addClass("pressed").delay(200).queue(function() {
    $(this).removeClass("pressed").dequeue();
  })
};

// Sound function

function makeSound(color) {
  switch (color) {
    case "red":
      var red = new Audio('sounds/red.mp3');
      red.play();
      break;
    case "blue":
      var blue = new Audio('sounds/blue.mp3');
      blue.play();
      break;
    case "green":
      var green = new Audio('sounds/green.mp3');
      green.play();
      break;
    case "yellow":
      var yellow = new Audio('sounds/yellow.mp3');
      yellow.play();
      break;
  }
};





//function checkAnswer(currentLevel){

//}



//$("button").on("click", function() {
//alert(this.id);
//});
