var p1 = document.querySelector("span.p1");
var p2 = document.querySelector("span.p2");
var btns = document.getElementsByTagName("button");
var number = document.querySelector("input");
var set = document.querySelector("p span");
var score = 5;
var p1Score = 0;
var p2Score = 0;
var game = false;

btns[0].addEventListener("click", function() {
    if(!game){
        p1Score++;
        if(p1Score === score){
            game = true
            p1.style.color = "green";
        }
        p1.textContent = p1Score;
    }
})
btns[1].addEventListener("click", function() {
    if(!game){
        p2Score++;
        if(p2Score === score){
            game = true
            p2.style.color = "green";
        }
        p2.textContent = p2Score;
    }
})
btns[2].addEventListener("click", function() {
    reset();
})
function reset() {
    p1Score = 0;
    p1.textContent = p1Score;
    p1.style.color = "black";
    p2Score = 0;
    p2.textContent = p2Score;
    p2.style.color = "black";
    game = false;
}
number.addEventListener("change", function() {
    set.textContent = number.value;
    score = Number(number.value);
    reset();
})
