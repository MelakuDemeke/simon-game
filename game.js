var buttonColurs = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickPattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    randomChosenColur = buttonColurs[randomNumber];
    gamePattern.push(randomChosenColur);
    $("#"+randomChosenColur).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/"+randomChosenColur+".mp3");
    audio.play();
}

$(".btn").click(function (e) { 
    var userChosenColour = this.id;
    // console.log(userChosenColour);
    userClickPattern.push(userChosenColour);
});