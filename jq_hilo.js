var userName;
var guessCount = 0;
var pickles;

// Declaring that the var is randomNumber and we assign a random number using built-in functions.
var randomNumber;

// Decalring a function of getRandomInt
function getRandomInt(){
  // When you run the function it assisngs randomNumber a new random number.
  randomNumber =  Math.floor(Math.random() * (101 - 1)) + 1;
}


function count(){
  if (parseInt(pickles) != (pickles)) {
    document.getElementById("count").innerHTML = "Numbers Only Please";
  }
  else {
    guessCount++;
    document.getElementById("count").innerHTML = "You have used "+guessCount+" of 7 guesses.";
  }
  if (guessCount == 7) {
    document.getElementById("myBtn").disabled = true;
  }
}

function reset () {
  guessCount = 0;
  userName = document.getElementById("userName").value;
  document.getElementById("count").innerHTML = "You have used "+ guessCount +" of 7 guesses.";
  document.getElementById("myBtn").disabled = false;
  $("#result").text("");
  $("#count").removeClass("warning")
  $("#winner").hide();
  $("#winner").text("Congrats, "+userName+"! You Win.");
  $("#loser").hide();
  $("#loser").text("Sorry, "+userName+" You Lose.");
  $("#myBtn").val("Guess");
  $("#myBtn").show();
  $("li").remove();
  $("#userGuess").val("");
}

// Declaring the game functiong hiLo
function hiLo() {
  if (randomNumber == undefined) {
    document.getElementById("hint2").innerHTML = "Please hit Start Game first.";
  }
  // Declaring a variable that will store the user's guess.
    // User eneters their answer
  pickles = document.getElementById("userGuess").value;
    // Checking to see if answer is greater than random number.
  if (pickles > randomNumber) {
      //
      document.getElementById("hint2").innerHTML = "Your guess is too high";

  }
  if (pickles < randomNumber){
      document.getElementById("hint2").innerHTML = "Your guess is too low";
    }
  if (pickles == randomNumber){
    $("#hint1").hide();
    $("#hint2").hide();
    $("#winner").show();
    $("#myBtn").hide();}

  if ((pickles != randomNumber) && (guessCount >= 6)){
    $("#hint1").hide();
    $("#hint2").hide();
    $("#myBtn").off("click");
    $("#myBtn").val("Game Over");
    $("#loser").show();}
}

$(document).ready(function() {
  $("#myBtn").on(
    "click",
    function(){
      hiLo();
      count();
      $("#numbersGuessed").append("<li>" + pickles + "</li>");
      if (guessCount > 4) {
      $("#count").addClass("warning")};
    });
});
