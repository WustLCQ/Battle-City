//start画布的convas和context
var canvas = document.getElementById("main");
var context = canvas.getContext("2d");

var select = new Select(135,245,26,30,RIGHT,30);
var player1 = new Player(144,384,26,30,UP,4);

function loadStart(){
    startImg.onload = function(){
        context.drawImage(startImg, 0, 0);
    }
    $("#main").animate({marginTop: "0px"},2000,function(){
        gameState = STATE_READY;
    });
    allImg.onload = function(){
        context.drawImage(allImg,select.direct,images["player1"][0],select.width,select.height,select.x,select.y,26,30);
    }       
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
            selectMap(20);
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
            case K_RIGHT:
            player1.move(RIGHT);
            break;
            case K_DOWN:
            player1.move(DOWN);
            break;
            case K_LEFT:
            player1.move(LEFT);
            break;
            default:
            break;
        }
    }    
});