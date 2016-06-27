/*敌方坦克*/
function Enemy(x,y,width,height,direct,speed,life){
    Tank.call(this,x,y,width,height,direct,speed);
    this.life = life;
}
Enemy.prototype = new Tank();
Enemy.prototype.init = function(){
    
}