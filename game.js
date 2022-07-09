var buttonColurs = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickPattern = [];
var gameStarted = false;
var level = 0;

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    randomChosenColur = buttonColurs[randomNumber];
    gamePattern.push(randomChosenColur);
    $("#"+randomChosenColur).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
    level++;
    $("#level-title").text("Level "+ level);

    playSound(randomChosenColur);
    console.log("started");
}

$(document).keypress(function (e) { 
    if(gameStarted == false){
        nextSequence();
        gameStarted = true;

    }   
});

$(".btn").click(function (e) { 
    var userChosenColour = this.id;
    // console.log(userChosenColour);
    userClickPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
});

function playSound(name) {
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColur) {
    $("#"+currentColur).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColur).removeClass("pressed");
    }, 100);
}