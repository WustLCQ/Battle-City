/*玩家坦克*/
function Player(x,y,width,height,direct,speed,index){
    Tank.call(this,x,y,width,height,direct,speed);
    this.index = index;
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