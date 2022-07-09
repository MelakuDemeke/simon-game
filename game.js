var buttonColurs = ["red","blue","green","yellow"];
var gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    randomChosenColur = buttonColurs[randomNumber];
    gamePattern.push(randomChosenColur);
    $("#"+randomChosenColur).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);


  
    var audio = new Audio("sounds/"+randomChosenColur+".mp3");
    audio.play();
}

