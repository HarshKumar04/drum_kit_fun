// for Detecting button click or press
var numberOfDrumKitButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumKitButtons; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {
        
        var buttonInnerHtml = this.innerHTML;
        drumKit(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);

    });

}

// for Detecting keyboard key press
document.addEventListener("keydown", function (event){
   var keyStroke = event.key;
   drumKit(keyStroke);
   buttonAnimation(keyStroke);
});

function drumKit(key){
    switch (key) {
        case "w":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "a":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "s":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "d":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "k":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "l":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        default:
            console.log("Something wrong!!!!");
    }

}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function (){
        activeButton.classList.remove("pressed");
    },100)
}

