
var rn1=Math.floor(Math.random()*6)+1;
var rndi="Dice"+rn1+".png";
var rnis="images/"+rndi;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",rnis);
var rn2=Math.floor(Math.random()*6)+1;
var rndi2="Dice"+rn2+".png";
var rnis2="images/"+rndi2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",rnis2);

if(rn1>rn2)
{
    document.querySelector("h1").innerHTML="🚩 1st Player Wins!";

}
else if(rn2>rn1)
{
    document.querySelector("h1").innerHTML="2nd Player Wins 🚩"
}
else{
    document.querySelector("h1").innerHTML="Game Draw";
}
document.querySelector("button").addEventListener("click",handleclick());
function handleclick()
{
    var audio=new Audio("music/Dice Roll.mp3");
audio.play();
}
function reload(){

    window.location.reload();
}
