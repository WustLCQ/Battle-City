/*敌方坦克*/
function Enemy(x,y,width,height,direct,speed,life){
    Tank.call(this,x,y,width,height,direct,speed);
    this.life = life;
    this.bullet = null;
}
Enemy.prototype = new Tank();
Enemy.prototype.init = function(){
    do{
        this.x = Math.floor(Math.random()*24)*16;
    }while(!this.hitTestofMap());
    context.drawImage(allImg,images["tank"+this.life][0]+this.direct,images["tank"+this.life][1],this.width,this.height,this.x+offsetX,this.y+offsetY,this.width,this.height);
    this.move();
    var that = this;
    var shootTimer = setInterval(function(){
        if(that.bullet == null){
            that.shoot();
        }
    },1000);
}
Enemy.prototype.move = function(){
    var that = this;   
    setInterval(function(){
        /*1/5的概率选择方向，4/5的概率直行*/
        var probability = Math.random();
        if(probability < 0.2){
            that.moveFree();
        }else if(!that.moveStraight()){
            that.moveFree();
        }else{
            that.moveStraight();
        }     
    },200);
}
/*选择移动方向*/
Enemy.prototype.moveFree = function(){
    var direct = Math.floor(Math.random()*4);
    switch(direct){
        case 0:
        direct = UP;
        break;
        case 1:
        direct = RIGHT;
        break;
        case 2:
        direct = DOWN;
        break;
        case 3:
        direct = LEFT;
        break;
        default:
        break;
    }

    if(this.direct != direct){
        this.direct = direct;
        context.clearRect(this.x+offsetX,this.y+offsetY,this.width,this.height);
        context.drawImage(allImg,images["tank"+this.life][0]+this.direct,images["tank"+this.life ][1],this.width,this.height,this.x+offsetX,this.y+offsetY,this.width,this.height);
    }       
}
/*直行*/
Enemy.prototype.moveStraight = function(){
    for(var i = player.length-1; i >= 0; i--){
        if(typeof(player[i])!="undefined" && typeof(enemy[i])!=null){
            if(!this.hitTestofObject(player[i])){
                return false;
            }
        }
    }
    for(var i = enemy.length-1; i >= 0; i--){
        if(enemy[i]!=this && typeof(enemy[i])!="undefined" && typeof(enemy[i])!=null){
            if(!this.hitTestofObject(enemy[i])){
                return false;
            }
        }
    }
    switch(this.direct){
        case UP:  
        if(!this.hitTestofMap()){
            return false;
        }
        context.clearRect(this.x+offsetX,this.y+offsetY,this.width,this.height);
        this.y -= this.speed;
        context.drawImage(allImg,images["tank"+this.life][0]+this.direct,images["tank"+this.life][1],this.width,this.height,this.x+offsetX,this.y+offsetY,this.width,this.height);
        break;
        case RIGHT:
        if(!this.hitTestofMap()){
            return false;
        }
        context.clearRect(this.x+offsetX,this.y+offsetY,this.width,this.height);
        this.x += this.speed;
        context.drawImage(allImg,images["tank"+this.life][0]+this.direct,images["tank"+this.life][1],this.width,this.height,this.x+offsetX,this.y+offsetY,this.width,this.height);
        break;
        case DOWN:
        if(!this.hitTestofMap()){
            return false;
        }
        context.clearRect(this.x+offsetX,this.y+offsetY,this.width,this.height);
        this.y += this.speed;
        context.drawImage(allImg,images["tank"+this.life][0]+this.direct,images["tank"+this.life][1],this.width,this.height,this.x+offsetX,this.y+offsetY,this.width,this.height);
        break;
        case LEFT:
        if(!this.hitTestofMap()){
            return false;
        }
        context.clearRect(this.x+offsetX,this.y+offsetY,this.width,this.height);
        this.x -= this.speed;
        context.drawImage(allImg,images["tank"+this.life][0]+this.direct,images["tank"+this.life][1],this.width,this.height,this.x+offsetX,this.y+offsetY,this.width,this.height);
        break;
    }
    return true;
}
Enemy.prototype.shoot = function(){
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
    var that = this;
    that.bullet.init(); 
    var bulletTimer = setInterval(function(){
        if(!that.bullet.fly()){
            that.bullet = null;
            clearInterval(bulletTimer);
        }   
    },20);   
}