function Tank(x,y,width,height,direct){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.direct = direct;
}
/*碰撞检测，当坐标值较小者加上自己宽度高度大于坐标值较大者时，视为碰撞*/
Tank.prototype.hitTestofObject = function(obj){
    var minX = this.x > obj.x ? this.x : obj.x;
    var maxX = this.x < obj.x ? this.x+this.width : obj.x+obj.width;
    var minY = this.y > obj.y ? this.y : obj.y;
    var maxY = this.y < obj.y ? this.y+this.height : obj.y+obj.height;

    if (minx <= maxx && miny <= maxy) {
        return true;
    }
    else {
        return false;
    }
}

/*开始界面选择的坦克*/
function Select(x,y,width,height,direct){
    Tank.call(this,x,y,width,height,direct);
}
Select.prototype = new Tank();
Select.prototype.move = function(){
    if(this.y == 245){
        context.clearRect(this.x,this.y,this.width,this.height);
        this.y += 30; 
        context.drawImage(allImg,this.direct,images["player1"][0],this.width,this.height,this.x,this.y,this.width,this.height);
    }else{
        context.clearRect(this.x,this.y,26,30);
        this.y -= 30;       
        context.drawImage(allImg,this.direct,images["player1"][0],this.width,this.height,this.x,this.y,this.width,this.height);
    }
}

/*玩家坦克*/
function Player(x,y,width,height,direct,speed){
    Tank.call(this,x,y,width,height,direct);
    this.speed = speed;
}
Player.prototype = new Tank();
Player.prototype.init = function(){
    context.drawImage(allImg,this.direct,images["player1"][0],this.width,this.height,this.x,this.y,this.width,this.height);
}
Player.prototype.move = function(direct){
    this.direct = direct;
    switch(direct){
        case UP:
            context.clearRect(this.x,this.y,this.width,this.height);
            this.y -= this.speed;
            context.drawImage(allImg,this.direct,images["player1"][0],this.width,this.height,this.x,this.y,this.width,this.height);
            break;
    }
}