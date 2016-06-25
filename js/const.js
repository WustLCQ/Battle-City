var startImg = new Image();
startImg.src = "images/start.png";
var allImg = new Image();
allImg.src = "images/tankAll.gif";

/*键盘事件ASCII码*/
var K_UP = 38;
var K_DOWN = 40;
var K_RIGHT = 39;
var K_LEFT = 37;

var K_SPACE = 32;
var K_TAB = 9;
var K_ENTER = 13;
var K_CTRL = 17;
var K_ALT = 18;

var K_0 = 48;
var K_1 = 49;
var K_2 = 50;
var K_3 = 51;
var K_4 = 52;
var K_5 = 53;
var K_6 = 54;
var K_7 = 55;
var K_8 = 56;
var K_9 = 57;
var K_A = 65;
var K_B = 66;
var K_C = 67;
var K_D = 68;
var K_E = 69;
var K_F = 70;
var K_G = 71;
var K_H = 72;
var K_I = 73;
var K_J = 74;
var K_K = 75;
var K_L = 76;
var K_M = 77;
var K_N = 78;
var K_O = 79;
var K_P = 80;
var K_Q = 81;
var K_R = 82;
var K_S = 83;
var K_T = 84;
var K_U = 85;
var K_V = 86;
var K_W = 87;
var K_X = 88;
var K_Y = 89;
var K_Z = 90;

/*tankAll图象中对应的素材坐标*/
var images = new Array();

images["home"] = [256,0];
images["runis"] = [290,0];
images["map"] = [0,96];
images["tankNum"] = [0,112];
images["player1"] = [0,0];
images["player2"] = [128,0];
images["tank1"] = [0,32];
images["tank2"] = [128,32];
images["tank3"] = [0,64];
images["tankRun"] = [128,96];
images["hitFx"] = [320,0];
images["bombFx"] = [0,160];
images["bullet"] = [80,96];
images["tankStart"] = [256,32];
images["food"] = [256,110];
images["score"] = [192,96];
images["num"] = [256,96];
images["shield"] = [160,96];
images["stageStart"] = [396,96];
images["gameOver"] = [384,64];

/*游戏主界面与边框之间的偏移量*/
var offsetX = 32;
var offsetY = 16;

/*游戏状态*/
var gameState;
var STATE_READY = 1; 
var STATE_PLAY = 2;
var STATE_STAGE_INIT = 3;  
var STATE_GAMEOVER = 4; 
var STATE_SELECT = 5; 
var STATE_GAMESTART = 6; 

/*坦克朝向*/
var UP = 0;
var DOWN = 32;
var LEFT = 66;
var RIGHT = 98;