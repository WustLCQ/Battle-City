function Bullet(x,y,width,height,direct,speed){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.direct = direct;
    this.speed = speed;
}
Bullet.prototype.init = function(){
    switch(this.direct){
        case UP:
        this.direct = B_UP;
        break;
        case RIGHT:
        this.direct = B_RIGHT;
        break;
        case DOWN:
        this.direct = B_DOWN;
        break;
        case LEFT:
        this.direct = B_LEFT;
        break;
        default:
        break;
    }
    context.drawImage(allImg,images["bullet"][0]+this.direct,images["bullet"][1],this.width,this.height,this.x+offsetX,this.y+offsetY,this.width,this.height);
}
/*碰撞检测，当坐标值较小者加上自己宽度高度大于坐标值较大者时，视为碰撞，且返回false*/
Bullet.prototype.hitTestofObject = function(obj){
    if(typeof(obj) == "undefined"){
        return true;
    }
    this.futurePosition();
    obj.futurePosition();
    var minX = this.futureX > obj.futureX ? this.futureX : obj.futureX;
    var maxX = this.futureX < obj.futureX ? this.futureX+this.width : obj.futureX+obj.width;
    var minY = this.futureY > obj.futureY ? this.futureY : obj.futureY;
    var maxY = this.futureY < obj.futureY ? this.futureY+this.height : obj.futureY+obj.height;

    if (minX <= maxX && minY <= maxY) {
        return false;
    }
    else {
        return true;
    }
}
/*是否碰到地图的障碍物，返回0表示没碰撞，返回1表示碰到了红墙，返回2表示碰到了铁砖*/
Bullet.prototype.hitTestofMap = function(){
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

    if(map[minLeftY][minUpX]==1 || map[minLeftY][maxUpX]==1 || map[maxLeftY][minUpX]==1 || map[maxLeftY][maxUpX]==1){
        return 1;
    }else if(map[minLeftY][minUpX]==2 || map[minLeftY][maxUpX]==2 || map[maxLeftY][minUpX]==2 || map[maxLeftY][maxUpX]==2){
        return 2;
    }
    switch(this.direct){
        case UP:
        if(this.y-this.speed < 0){
            /*边界，视为碰撞到铁砖*/
            return 2;
        }if(map[minUpY][minUpX]==1 || map[minUpY][maxUpX]==1){
            return 1;
        }else if(map[minUpY][minUpX]==2 || map[minUpY][maxUpX]==1){
            return 2;
        }else{
            return 0;
        }
        break;
        case RIGHT:
        if(this.x+this.speed+this.width > 416){
            /*边界，视为碰撞到铁砖*/
            return 2;
        }else if(map[minRightY][maxRightX]==1 || map[maxRightY][maxRightX]==1){
            return 1;
        }else if(map[minRightY][maxRightX]==2 || map[maxRightY][maxRightX]==2){
            return 2;
        }else{
            return 0;
        }
        break;
        case DOWN:
        if(this.y+this.speed+this.height > 416){
            /*边界，视为碰撞到铁砖*/
            return 2;
        }else if(map[maxDownY][minDownX]==1 || map[maxDownY][maxDownX]==1){
            return 1;
        }else if(map[maxDownY][minDownX]==2 || map[maxDownY][maxDownX]==2){
            return 2;
        }else{
            return 0;
        }
        break;
        case LEFT:
        if(this.x-this.speed < 0){
            /*边界，视为碰撞到铁砖*/
            return 2;
        }else if(map[minLeftY][minLeftX]==1 || map[maxLeftY][minLeftX]==1){
            return 1;
        }else if(map[minLeftY][minLeftX]==2 || map[maxLeftY][minLeftX]==2){
            return 2;
        }else{
            return 0;
        }
        break;
        default:
        break;
    }
}
Bullet.prototype.fly = function(){
    switch(this.direct){
        case B_UP:
        this.y -= this.speed;
        break;
        case B_RIGHT:
        this.x += this.speed;
        break;
        case B_DOWN:
        this.y += this.speed;
        break;
        case B_LEFT:
        this.x -= this.speed;
        break;
        default:
        break;
    }
    context.clearRect(this.x+offsetX,this.y+offsetY,this.width,this.height);
    context.drawImage(allImg,images["bullet"][0]+this.direct,images["bullet"][1],this.width,this.height,this.x+offsetX,this.y+offsetY,this.width,this.height);
}