function Tank(x,y,width,height,direct,speed){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.direct = direct;
    this.speed = speed;
}
/*碰撞检测，当坐标值较小者加上自己宽度高度大于坐标值较大者时，视为碰撞*/
Tank.prototype.hitTestofObject = function(obj){
    var minX = this.x > obj.x ? this.x : obj.x;
    var maxX = this.x < obj.x ? this.x+this.width : obj.x+obj.width;
    var minY = this.y > obj.y ? this.y : obj.y;
    var maxY = this.y < obj.y ? this.y+this.height : obj.y+obj.height;

    if (minX <= maxX && minY <= maxY) {
        return true;
    }
    else {
        return false;
    }
}
/*是否碰到地图的障碍物*/
Tank.prototype.hitTestofMap = function(){
    /*minX、minY、maxX、maxY分别表示四个顶点*/
    var minUpX = Math.floor(this.x/16);
    var maxUpX = Math.floor((this.x+this.width)/16);
    var minUpY = Math.floor((this.y-this.speed)/16);
    var maxUpY = Math.floor((this.y-this.speed+this.height)/16);
    var minRightX = Math.floor((this.x+this.speed)/16);
    var maxRightX = Math.floor((this.x+this.speed+this.width)/16);
    var minRightY = Math.floor(this.y/16);
    var maxRightY = Math.floor((this.y+this.height)/16);
    var minDownX = Math.floor(this.x/16);
    var maxDownX = Math.floor((this.x+this.width)/16);
    var minDownY = Math.floor((this.y+this.speed)/16);
    var maxDownY = Math.floor((this.y+this.speed+this.height)/16);
    var minLeftX = Math.floor((this.x-this.speed)/16);
    var maxLeftX = Math.floor((this.x-this.speed+this.width)/16);
    var minLeftY = Math.floor(this.y/16);
    var maxLeftY = Math.floor((this.y+this.height)/16);

    if((this.x-this.speed+offsetX < 0)||(this.x+this.speed+offsetX > 416)||(this.y-this.speed+offsetY < 0)||(this.y+this.speed+offsetY > 416)){
        return false;
    }
    switch(this.direct){
        case UP:
        //在冰上，加速
        if(map[minUpY][minUpX]==5 || map[minUpY][maxUpX]==5){
            this.y -= 16;
            return true;
        }else if(map[minUpY][minUpX]!=1 && map[minUpY][minUpX]!=2 && map[minUpY][minUpX]!=4 && map[minUpY][maxUpX]!=1 && map[minUpY][maxUpX]!=2 && map[minUpY][maxUpX]!=4){
            return true;
        }else{
            return false;
        }
        break;
        case RIGHT:
        //在冰上，加速
        if(map[minRightY][maxRightX]==5 || map[maxRightY][maxRightX]==5){
            this.x += 16;
            return true;
        }else if(map[minRightY][maxRightX]!=1 && map[minRightY][maxRightX]!=2 && map[minRightY][maxRightX]!=4 && map[maxRightY][maxRightX]!=1 && map[maxRightY][maxRightX]!=2 && map[maxRightY][maxRightX]!=4){
            return true;
        }else{
            return false;
        }
        break;
        case DOWN:
        //在冰上，加速
        if(map[maxDownY][minDownX]==5 || map[maxDownY][maxDownX]==5){
            this.y -= 16;
            return true;
        }else if(map[maxDownY][minDownX]!=1 && map[maxDownY][minDownX]!=2 && map[maxDownY][minDownX]!=4 && map[maxDownY][maxDownX]!=1 && map[maxDownY][maxDownX]!=2 && map[maxDownY][maxDownX]!=4){
            return true;
        }else{
            return false;
        }
        break;
        case LEFT:
        //在冰上，加速
        if(map[minLeftY][minLeftX]==5 || map[maxLeftY][minLeftX]==5){
            this.x += 16;
            return true;
        }else if(map[minLeftY][minLeftX]!=1 && map[minLeftY][minLeftX]!=2 && map[minLeftY][minLeftX]!=4 && map[maxLeftY][minLeftX]!=1 && map[maxLeftY][minLeftX]!=2 && map[maxLeftY][minLeftX]!=4){
            return true;
        }else{
            return false;
        }
        break;
        default:
        break;
    }
}

/*开始界面选择的坦克*/
function Select(x,y,width,height,direct,speed){
    Tank.call(this,x,y,width,height,direct,speed);
}
Select.prototype = new Tank();
Select.prototype.move = function(){
    if(this.y == 245){
        context.clearRect(this.x,this.y,this.width,this.height);
        this.y += this.speed; 
        context.drawImage(allImg,this.direct,images["player1"][0],this.width,this.height,this.x,this.y,this.width,this.height);
    }else{
        context.clearRect(this.x,this.y,26,30);
        this.y -= this.speed;       
        context.drawImage(allImg,this.direct,images["player1"][0],this.width,this.height,this.x,this.y,this.width,this.height);
    }
}

/*玩家坦克*/
function Player(x,y,width,height,direct,speed){
    Tank.call(this,x,y,width,height,direct,speed);
}
Player.prototype = new Tank();
Player.prototype.init = function(){
    context.drawImage(allImg,this.direct,images["player1"][0],this.width,this.height,this.x+offsetX,this.y+offsetY,this.width,this.height);
}
Player.prototype.move = function(direct){
    if(this.direct != direct){
        this.direct = direct;
        context.clearRect(this.x+offsetX,this.y+offsetY,this.width,this.height);
        context.drawImage(allImg,this.direct,images["player1"][0],this.width,this.height,this.x+offsetX,this.y+offsetY,this.width,this.height);
    }
    switch(direct){
        case UP:  
        if(!this.hitTestofMap()){
            return false;
        }
        context.clearRect(this.x+offsetX,this.y+offsetY,this.width,this.height);
        this.y -= this.speed;
        context.drawImage(allImg,this.direct,images["player1"][0],this.width,this.height,this.x+offsetX,this.y+offsetY,this.width,this.height);
        break;
        case RIGHT:
        if(!this.hitTestofMap()){
            return false;
        }
        context.clearRect(this.x+offsetX,this.y+offsetY,this.width,this.height);
        this.x += this.speed;
        context.drawImage(allImg,this.direct,images["player1"][0],this.width,this.height,this.x+offsetX,this.y+offsetY,this.width,this.height);
        break;
        case DOWN:
        if(!this.hitTestofMap()){
            return false;
        }
        context.clearRect(this.x+offsetX,this.y+offsetY,this.width,this.height);
        this.y += this.speed;
        context.drawImage(allImg,this.direct,images["player1"][0],this.width,this.height,this.x+offsetX,this.y+offsetY,this.width,this.height);
        break;
        case LEFT:
        if(!this.hitTestofMap()){
            return false;
        }
        context.clearRect(this.x+offsetX,this.y+offsetY,this.width,this.height);
        this.x -= this.speed;
        context.drawImage(allImg,this.direct,images["player1"][0],this.width,this.height,this.x+offsetX,this.y+offsetY,this.width,this.height);
        break;
    }
}