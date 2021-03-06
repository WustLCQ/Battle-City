function Tank(x,y,width,height,direct,speed){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.direct = direct;
    this.speed = speed;
    this.futureX = x;
    this.futureY = y;
}
/*未来位置，用于进行碰撞检测*/
Tank.prototype.futurePosition = function(){
    switch(this.direct){
        case UP:
        this.futureX = this.x;
        this.futureY = this.y - this.speed;
        break;
        case RIGHT:
        this.futureY = this.y;
        this.futureX = this.x + this.speed;
        break;
        case DOWN:
        this.futureX = this.x;
        this.futureY = this.y + this.speed;
        break;
        case LEFT:
        this.futureY = this.y;
        this.futureX = this.x - this.speed;
        break;
        default:
        break;
    }
}
/*碰撞检测，当坐标值较小者加上自己宽度高度大于坐标值较大者时，视为碰撞，且返回false*/
Tank.prototype.hitTestofObject = function(obj){
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
/*是否碰到地图的障碍物，返回false表示碰撞*/
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

    if(map[minLeftY][minUpX]==1 || map[minLeftY][minUpX]==2 || map[minLeftY][minUpX]==4 || map[minLeftY][maxUpX]==1 || map[minLeftY][maxUpX]==2 || map[minLeftY][maxUpX]==4 || map[maxLeftY][minUpX]==1 || map[maxLeftY][minUpX]==2 || map[maxLeftY][minUpX]==4 || map[maxLeftY][maxUpX]==1 || map[maxLeftY][maxUpX]==2 || map[maxLeftY][maxUpX]==4){
        return false;
    }
    switch(this.direct){
        case UP:
        if(this.y-this.speed < 0){
            return false;
        }else if(map[minUpY][minUpX]==5 || map[minUpY][maxUpX]==5){
            //在冰上，加速
            this.y -= 16;
            return true;
        }else if(map[minUpY][minUpX]!=1 && map[minUpY][minUpX]!=2 && map[minUpY][minUpX]!=4 && map[minUpY][maxUpX]!=1 && map[minUpY][maxUpX]!=2 && map[minUpY][maxUpX]!=4){
            return true;
        }else{
            return false;
        }
        break;
        case RIGHT:
        if(this.x+this.speed+this.width > 416){
            return false;
        }else if(map[minRightY][maxRightX]==5 || map[maxRightY][maxRightX]==5){
            //在冰上，加速
            this.x += 16;
            return true;
        }else if(map[minRightY][maxRightX]!=1 && map[minRightY][maxRightX]!=2 && map[minRightY][maxRightX]!=4 && map[maxRightY][maxRightX]!=1 && map[maxRightY][maxRightX]!=2 && map[maxRightY][maxRightX]!=4){
            return true;
        }else{
            return false;
        }
        break;
        case DOWN:
        if(this.y+this.speed+this.height > 416){
            return false;
        }else if(map[maxDownY][minDownX]==5 || map[maxDownY][maxDownX]==5){
            //在冰上，加速
            this.y -= 16;
            return true;
        }else if(map[maxDownY][minDownX]!=1 && map[maxDownY][minDownX]!=2 && map[maxDownY][minDownX]!=4 && map[maxDownY][maxDownX]!=1 && map[maxDownY][maxDownX]!=2 && map[maxDownY][maxDownX]!=4){
            return true;
        }else{
            return false;
        }
        break;
        case LEFT:
        if(this.x-this.speed < 0){
            return false;
        }else if(map[minLeftY][minLeftX]==5 || map[maxLeftY][minLeftX]==5){
            //在冰上，加速
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