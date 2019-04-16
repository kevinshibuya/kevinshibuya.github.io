var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.getElementsByTagName("h1");
var resetBtn = document.getElementById("resetBtn");
var modeBtn = document.querySelectorAll(".mode");

init();
//game reset button
resetBtn.addEventListener("click", function() {
    reset();
})
//initialize the program
function init() {
    setupModeBtns();
    setupColorsBtns();
    reset();
}
//add event listeners to mode btns
function setupModeBtns() {
    for (var i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener("click", function() {
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        })
    }
}
//apply buttons colors
function setupColorsBtns() {
    for (var i = 0; i < squares.length; i++) {
        //add color to squares
        squares[i].style.backgroundColor = colors[i];
        //add click event
        squares[i].addEventListener("click", function() {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare clickedColor to correct answer
            if (clickedColor == pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1[0].style.backgroundColor = clickedColor;
                resetBtn.textContent = "Play Again?"
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again!";
            }
        });
    }
}
//reset the game
function reset() {
    //generate new colors
    colors = generateRandomColors(numSquares);
    //pick new random color button
    pickedColor = pickColor();
    //match colorDisplay with pickedColor
    colorDisplay.textContent = pickedColor;
    //change color of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none"
        }
    }
    //sets background color back to default
    h1[0].style.backgroundColor = "#F26666";
    //clears span
    messageDisplay.textContent = "";
    //sets button text content back to default
    resetBtn.textContent = "New Color"
}
//change colors from all buttons to the correct clicked one
function changeColors (color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}
//select a random correct color button
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
//get random colors and push them into an array
function generateRandomColors(num) {
    //make an array
    var arr = [];
    //repeat num times
    for (var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return array
    return arr;
}
//generate random rgb colors
function randomColor() {
    //get random red color from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //get random green color from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //get random blue color from 0 to 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
