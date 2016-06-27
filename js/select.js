/*开始界面选择的坦克*/
function Select(x,y,width,height,direct,speed,selection){
    Tank.call(this,x,y,width,height,direct,speed);
    this.selection = selection;
}
Select.prototype = new Tank();
Select.prototype.move = function(){
    if(this.y == 245){
        context.clearRect(this.x,this.y,this.width,this.height);
        this.y += this.speed; 
        this.selection = 2;
        context.drawImage(allImg,this.direct,images["player1"][0],this.width,this.height,this.x,this.y,this.width,this.height);
    }else{
        context.clearRect(this.x,this.y,26,30);
        this.y -= this.speed;  
        this.selection = 1;     
        context.drawImage(allImg,this.direct,images["player1"][0],this.width,this.height,this.x,this.y,this.width,this.height);
    }
}
Select.prototype.getSelection = function(){
    return this.selection;
}