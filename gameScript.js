var breno = document.querySelector("button#breno");
var buyBreno = document.querySelector("button#buyBreno");
var caio = document.querySelector("button#caio");
var buyCaio = document.querySelector("button#buyCaio");
var castro = document.querySelector("button#castro");
var buyCastro = document.querySelector("button#buyCastro");
var hazard = document.querySelector("button#hazard");
var buyHazard = document.querySelector("button#buyHazard");
var dk = document.querySelector("button#dk");
var buyDk = document.querySelector("button#buyDk");
var jales = document.querySelector("button#jales");
var buyJales = document.querySelector("button#buyJales");
var gabriel = document.querySelector("button#gabriel");
var buyGabriel = document.querySelector("button#buyGabriel");
var gui = document.querySelector("button#gui");
var buyGui = document.querySelector("button#buyGui");
var misa = document.querySelector("button#misa");
var buyMisa = document.querySelector("button#buyMisa");
var buyTDX = document.querySelector("#buyTDX");
var points = document.querySelector("span.point");
var reset = document.querySelector("#reset");
var upgrades = document.querySelector("#upgrades");
var upgrades1 = document.querySelector(".upgrades");
var home = document.querySelector("#home");
var game = document.querySelector("#game");
var caioB = false;
var castroB = false;
var hazardB = false;
var dkB = false;
var jalesB = false;
var gabrielB = false;
var guiB = false;
var misaB = false;
var tdxB = false;

var score = 0;
upgrades1.style.display = "none";
caio.style.visibility = "hidden";
castro.style.visibility = "hidden";
hazard.style.visibility = "hidden";
dk.style.visibility = "hidden";
jales.style.visibility = "hidden";
gabriel.style.visibility = "hidden";
gui.style.visibility = "hidden";
misa.style.visibility = "hidden";
buyCastro.style.visibility = "hidden";
buyHazard.style.visibility = "hidden";
buyDk.style.visibility = "hidden";
buyJales.style.visibility = "hidden";
buyGabriel.style.visibility = "hidden";
buyGui.style.visibility = "hidden";
buyMisa.style.visibility = "hidden";
buyTDX.style.visibility = "hidden"

breno.addEventListener("click", function() {
    score++;
    points.textContent = score;
})
caio.addEventListener("click", function() {
    score += 2;
    points.textContent = score;
})
castro.addEventListener("click", function() {
    score += 5;
    points.textContent = score;
})
hazard.addEventListener("click", function() {
    score += 10;
    points.textContent = score;
})
dk.addEventListener("click", function() {
    score += 15;
    points.textContent = score;
})
jales.addEventListener("click", function() {
    score += 20;
    points.textContent = score;
})
gabriel.addEventListener("click", function() {
    score += 30;
    points.textContent = score;
})
gui.addEventListener("click", function() {
    score += 50;
    points.textContent = score;
})
misa.addEventListener("click", function() {
    score += 100;
    points.textContent = score;
})
reset.addEventListener("click", function() {
    score = 0;
    points.textContent = score;
    caio.style.visibility = "hidden";
    castro.style.visibility = "hidden";
    hazard.style.visibility = "hidden";
    dk.style.visibility = "hidden";
    jales.style.visibility = "hidden";
    gabriel.style.visibility = "hidden";
    gui.style.visibility = "hidden";
    misa.style.visibility = "hidden";
    buyCastro.style.visibility = "hidden";
    buyHazard.style.visibility = "hidden";
    buyDk.style.visibility = "hidden";
    buyJales.style.visibility = "hidden";
    buyGabriel.style.visibility = "hidden";
    buyGui.style.visibility = "hidden";
    buyMisa.style.visibility = "hidden";
    buyTDX.style.visibility = "hidden"
    caioB = false;
    castroB = false;
    hazardB = false;
    dkB = false;
    jalesB = false;
    gabrielB = false;
    guiB = false;
    misaB = false;
    tdxB = false;
})

upgrades.addEventListener("click", function() {
    upgrades1.style.display = "block";
    game.style.display = "none";
})
home.addEventListener("click", function() {
    upgrades1.style.display = "none";
    game.style.display = "block";
})

buyCaio.addEventListener("click", function() {
    if (score >= 20 && caioB == false){
        caio.style.visibility = "visible";
        buyCastro.style.visibility = "visible"
        caioB = true;
        score -= 20;
        points.textContent = score;
    }
})
buyCastro.addEventListener("click", function() {
    if (score >= 40 && castroB == false){
        castro.style.visibility = "visible";
        buyHazard.style.visibility = "visible"
        castroB = true;
        score -= 40;
        points.textContent = score;
    }
})
buyHazard.addEventListener("click", function() {
    if (score >= 100 && hazardB == false){
        hazard.style.visibility = "visible";
        buyDk.style.visibility = "visible";
        hazardB = true;
        score -= 100;
        points.textContent = score;
    }
})
buyDk.addEventListener("click", function() {
    if (score >= 300 && dkB == false){
        dk.style.visibility = "visible";
        buyJales.style.visibility = "visible";
        dkB = true;
        score -= 300;
        points.textContent = score;
    }
})
buyJales.addEventListener("click", function() {
    if (score >= 600 && jalesB == false){
        jales.style.visibility = "visible";
        buyGabriel.style.visibility = "visible";
        jalesB = true;
        score -= 600;
        points.textContent = score;
    }
})
buyGabriel.addEventListener("click", function() {
    if (score >= 1000 && gabrielB == false){
        gabriel.style.visibility = "visible";
        buyGui.style.visibility = "visible";
        gabrielB = true;
        score -= 1000;
        points.textContent = score;
    }
})
buyGui.addEventListener("click", function() {
    if (score >= 2000 && guiB == false){
        gui.style.visibility = "visible";
        buyMisa.style.visibility = "visible";
        guiB = true;
        score -= 2000;
        points.textContent = score;
    }
})
buyMisa.addEventListener("click", function() {
    if (score >= 5000 && misaB == false){
        misa.style.visibility = "visible";
        buyTDX.style.visibility = "visible";
        misaB = true;
        score -= 5000;
        points.textContent = score;
    }
})
buyTDX.addEventListener("click", function() {
    if (score >= 10000 && tdxB == false){
        alert("Boa tu compro o grupo do what's do TDX, agora tu pode me mama.")
        score = 0;
        points.textContent = score;
        caio.style.visibility = "hidden";
        castro.style.visibility = "hidden";
        hazard.style.visibility = "hidden";
        dk.style.visibility = "hidden";
        jales.style.visibility = "hidden";
        gabriel.style.visibility = "hidden";
        gui.style.visibility = "hidden";
        misa.style.visibility = "hidden";
        buyCastro.style.visibility = "hidden";
        buyHazard.style.visibility = "hidden";
        buyDk.style.visibility = "hidden";
        buyJales.style.visibility = "hidden";
        buyGabriel.style.visibility = "hidden";
        buyGui.style.visibility = "hidden";
        buyMisa.style.visibility = "hidden";
        buyTDX.style.visibility = "hidden"
        caioB = false;
        castroB = false;
        hazardB = false;
        dkB = false;
        jalesB = false;
        gabrielB = false;
        guiB = false;
        misaB = false;
        tdxB = false;
    }
})
