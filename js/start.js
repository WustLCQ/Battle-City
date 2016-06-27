function loadStart(){
    canvas = document.getElementById("main");
    context = canvas.getContext("2d");
    select = new Select(135,245,26,30,RIGHT,30);
    currentEnemy = 0;
    startImg.onload = function(){
        context.drawImage(startImg, 0, 0);
    }
    $("#main").animate({marginTop: "0px"},2000,function(){
        gameState = STATE_READY;
    }); 
    allImg.onload = function(){
        context.drawImage(allImg,select.direct,images["player1"][0],select.width,select.height,select.x,select.y,select.width,select.height);
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
            player1 = new Player(144,384,26,30,UP,4,"player1");
            player1.init();
            gameState = STATE_PLAY;
            if(select.getSelection() == 2){
                player2 = new Player(242,384,26,30,UP,4,"player2");
                player2.init();
            }
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
            case K_W:
            if(select.getSelection() == 2){
                player2.move(UP);
            }
            break;
            case K_D:
            if(select.getSelection() == 2){
                player2.move(RIGHT);
            }
            break;
            case K_S:
            if(select.getSelection() == 2){
                player2.move(DOWN);
            }
            break;
            case K_A:
            if(select.getSelection() == 2){
                player2.move(LEFT);
            }
            break;
            default:
            break;
        }
    }    
});