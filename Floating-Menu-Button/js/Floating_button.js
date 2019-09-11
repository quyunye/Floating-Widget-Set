/*
* Copyright (c) 2019.02.27 GYqyy All rights reserved.
* Url：https://www.gyqyy.com/
*/

function remenu()
{
//Display suspension and click effects, change picture display
if(document.getElementById('caidananniu').src.indexOf('menu-2.png') >= 0){
document.getElementById('caidananniu').src="./img/menu.png";
}else{
document.getElementById('caidananniu').src="./img/menu-2.png";
}
}

//In order to achieve the function you want, The following functions may need to be modified.
function caidan()
{
//alert
window.alert("You have clicked the button")
//Simulated click button
document.getElementById('anniu').click();
//Back to the top
scrollTo(0,0);
//Page internal jump
window.location.hash = "#head";
//Check the current state and react
if (document.getElementById("secondary").getAttribute("aria-expanded") = "false"){
document.getElementById("anniu").click();}
scrollTo(0,0);
}
