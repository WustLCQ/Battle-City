//start画布的convas和context
var canvas = document.getElementById("main");;
var context = canvas.getContext("2d");;

var select = new Select(135,245,26,30,RIGHT);
var player1 = new Player(180,402,26,30,UP,5);

function loadStart(){
    startImg.onload = function(){
        context.drawImage(startImg, 0, 0);
    }
    $("#main").animate({marginTop: "0px"},2000);
    allImg.onload = function(){
        context.drawImage(allImg,select.direct,images["player1"][0],select.width,select.height,select.x,select.y,26,30);
    }    
    gameState = STATE_READY;
}
$(document).ready(loadStart());
$(document).keydown(function(event){
    if(gameState == STATE_READY){
        switch(event.keyCode){
            case K_UP:
            case K_DOWN:
                select.move();
                break;
            case K_SPACE:
                selectMap(1);
                drawMap();
                player1.init();
                gameState = STATE_PLAY;
                break;
        }
    }else if(gameState == STATE_PLAY){
        switch(event.keyCode){
            case K_UP:
                player1.move(UP);
                break;
        }
    }    
});