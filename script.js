var dice_1 = Math.floor(Math.random()*6)+1
var dice_2 = Math.floor(Math.random()*6)+1

var imgSource1 = "/images/dice"+dice_1+".png";
var imgSource2 = "/images/dice"+dice_2+".png";

document.querySelectorAll("img")[0].setAttribute("src",imgSource1)
document.querySelectorAll("img")[1].setAttribute("src",imgSource2)

if (dice_1 > dice_2){
    document.querySelector("h1").innerHTML = "Player_1 Wins"
} else if(dice_2>dice_1){
    document.querySelector("h1").innerHTML = "Player_2 Wins"
}else{
    document.querySelector("h1").innerHTML = "Draw Refresh it again!!"
}

