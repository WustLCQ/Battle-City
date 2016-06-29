/*玩家坦克*/
function Player(x,y,width,height,direct,speed,index){
    Tank.call(this,x,y,width,height,direct,speed);
    this.index = index;
    this.bullet = null;
}
Player.prototype = new Tank();
Player.prototype.init = function(){
    context.drawImage(allImg,images[this.index][0]+this.direct,images[this.index][1],this.width,this.height,this.x+offsetX,this.y+offsetY,this.width,this.height);
}
Player.prototype.move = function(direct){
    if(this.direct != direct){
        this.direct = direct;
        context.clearRect(this.x+offsetX,this.y+offsetY,this.width,this.height);
        context.drawImage(allImg,images[this.index][0]+this.direct,images[this.index ][1],this.width,this.height,this.x+offsetX,this.y+offsetY,this.width,this.height);
    }
    
    for(var i = player.length-1; i >= 0; i--){
        if(player[i]!=this && typeof(player[i])!="undefined" && typeof(player[i])!=null){
            if(!this.hitTestofObject(player[i])){
                return false;
            }
        }
    }
    for(var i = enemy.length-1; i >= 0; i--){
        if(typeof(enemy[i])!="undefined" && typeof(player[i])!=null){
            if(!this.hitTestofObject(enemy[i])){
                return false;
            }
        }
    }
    switch(direct){
        case UP:  
        if(!this.hitTestofMap()){
            return false;
        }
        context.clearRect(this.x+offsetX,this.y+offsetY,this.width,this.height);
        this.y -= this.speed;
        context.drawImage(allImg,images[this.index][0]+this.direct,images[this.index][1],this.width,this.height,this.x+offsetX,this.y+offsetY,this.width,this.height);
        break;
        case RIGHT:
        if(!this.hitTestofMap()){
            return false;
        }
        context.clearRect(this.x+offsetX,this.y+offsetY,this.width,this.height);
        this.x += this.speed;
        context.drawImage(allImg,images[this.index][0]+this.direct,images[this.index][1],this.width,this.height,this.x+offsetX,this.y+offsetY,this.width,this.height);
        break;
        case DOWN:
        if(!this.hitTestofMap()){
            return false;
        }
        context.clearRect(this.x+offsetX,this.y+offsetY,this.width,this.height);
        this.y += this.speed;
        context.drawImage(allImg,images[this.index][0]+this.direct,images[this.index][1],this.width,this.height,this.x+offsetX,this.y+offsetY,this.width,this.height);
        break;
        case LEFT:
        if(!this.hitTestofMap()){
            return false;
        }
        context.clearRect(this.x+offsetX,this.y+offsetY,this.width,this.height);
        this.x -= this.speed;
        context.drawImage(allImg,images[this.index][0]+this.direct,images[this.index][1],this.width,this.height,this.x+offsetX,this.y+offsetY,this.width,this.height);
        break;
    }
}
Player.prototype.shoot = function(){
    switch(this.direct){
        case UP:
        this.bullet = new Bullet(this.x+this.width/2,this.y,6,8,this.direct,1);
        break;
        case RIGHT:
        this.bullet = new Bullet(this.x+this.width,this.y+this.width/2,8,6,this.direct,1);
        break;
        case DOWN:
        this.bullet = new Bullet(this.x+this.width/2,this.y+this.height,6,8,this.direct,1);
        break;
        case LEFT:
        this.bullet = new Bullet(this.x,this.y+this.width/2,8,6,this.direct,1);
        break;
    }
    this.bullet.init();
    var bulletTimer = 
}