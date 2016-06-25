function selectMap(level){
    var i, j;
    var tempMap = this["map"+level]; 
    for (i = 0; i < 26; i++ )
    {
        for (j = 0; j < 26; j++ )
        {
            map[i][j] =tempMap[i][j];
        }
    }
}
function drawMap(){
    context.clearRect(0,0,510,437);

    context.fillStyle  = "#7F7F7F";
    context.fillRect(0,0,510,437);
    context.fillStyle = "#000";
    context.fillRect(offsetX,offsetY,416,416);

    var mapX = images["map"][0];
    var mapY = images["map"][1];
    var homeX = images["home"][0];
    var homeY = images["home"][1];

    for(var i=0;i<26;i++)
    {
        for(var j=0;j<26;j++)
        {
            if(map[i][j]==1)    //红墙
            {
                context.drawImage(allImg,mapX, mapY,16,16,j*16 + offsetX, i*16 + offsetY,16,16) ;
            }
            else if(map[i][j]==2)   //铁墙
            {
                context.drawImage(allImg,16 + mapX, mapY,16,16,j*16 + offsetX, i*16 + offsetY,16,16) ;
            }
            else if(map[i][j]==3)   //草
            {
                context.drawImage(allImg,32 + mapX, mapY,16,16,j*16 + offsetX, i*16 + offsetY,16,16) ;
            }
            else if(map[i][j]==4)   //水
            {
                context.drawImage(allImg,48 + mapX, mapY,16,16,j*16 + offsetX, i*16 + offsetY,16,16) ;
            }
            else if(map[i][j]==5)   //冰
            {
                context.drawImage(allImg,64 + mapX, mapY,16,16,j*16 + offsetX, i*16 + offsetY,16,16) ;
            }
            else if(map[i][j]==9)   //家
            {
                context.drawImage(allImg,0 + homeX, homeY, 32, 32, j*16 + offsetX, i*16 + offsetY, 32, 32) ;
            }
            else if(map[i][j]==10)
            {
                context.drawImage(allImg, 0 + mapX, mapY, 16, 8, j*16 + offsetX, i*16 + offsetY, 16, 8) ;
            }
            else if(map[i][j]==11)
            {
                context.drawImage(allImg, 0 + mapX, 8 + mapY, 16, 8, j*16 + offsetX,i*16+8 + offsetY, 16, 8) ;
            }
            else if(map[i][j]==12)
            {
                context.drawImage(allImg, 0 + mapX, mapY, 8,16, j*16 + offsetX, i*16 + offsetY, 8, 16) ;
            }
            else if(map[i][j]==13)
            {
                context.drawImage(allImg, 8 + mapX, mapY, 8, 16, j*16+8 + offsetX, i*16 + offsetY, 8, 16) ;
            }
            else if(map[i][j]==88)
            {
                context.drawImage(allImg, 32 + mapX, mapY, 32, 32, j*16 + offsetX, i*16 + offsetY, 32, 32) ;
            }
        }
    }
}