var buttonColurs = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickPattern = [];
var gameStarted = false;
var level = 0;

function nextSequence() {
    userClickPattern = [];
    level++;
    $("#level-title").text("Level "+ level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColur = buttonColurs[randomNumber];
    gamePattern.push(randomChosenColur);
    $("#"+randomChosenColur).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColur);
    console.log("started");
}

$(document).keypress(function (e) { 
    if(!gameStarted){
        $("#level-title").text("Level "+ level);
        nextSequence();
        gameStarted = true;

    }   
});

$(".btn").click(function (e) { 
    var userChosenColour = this.id;
   
    userClickPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickPattern.length - 1);
    console.log(level + "\n" + gamePattern + "\n" + userClickPattern);
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

function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userClickPattern[currentLevel]){
        if(userClickPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
        console.log("sucesse");
        
    }else{
        console.log("fali");
    }
}