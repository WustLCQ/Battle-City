var UP = 0;
var DOWN = 1;
var LEFT = 2;
var RIGHT = 3;

var foodLife = 0;
var foodTime = 1;
var foodHome = 2;
var foodBomb = 3;
var foodStar = 4;
var foodGod = 5;
var foodNon = 6;

var offerX = 32;
var offerY = 16;

var NON = 0;
var WALL = 1;
var GRID = 2;
var GRASS = 3;
var WATER = 4;
var ICE = 5;
var HOME = 9;
var DIE = 10;


var STATE_INIT = 1; 
var STATE_PLAY = 2;
var STATE_STAGE_INIT = 3;  
var STATE_GAMEOVER = 4; 
var STATE_SELECT = 5; 
var STATE_GAMESTART = 6; 


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

var images = new Array();

images["home"] = [256,0];
images["map"] = [0,96];
images["tankNum"] = [0,112];
images["myTank"] = [0,0];
images["myTank2"] = [128,0];
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

var imgStartData = "images/1.png"//CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAB2jSURBVHja7N1dbhzX3SfgU9WkpCR2RAl4MRhkZtQJ5p1rwgsItQPqzQJMIBsgsgIi2QBXEDDwAsw3WUDDWoAJ+94gpLtcNaTIjixZ3Wcu7NOuLlZ3VX9/1PMAB5LI7q6vVp9f/evU6az/5n0MAEBrPfroMDso/uDxx/fsFQBomRhjyO0GAEAgAAAEAgBAIAAABAIAQCAAAAQCAEAgAAAEAgBAIAAABAIAQCAAAAQCAEAgAAAEAgBAIAAABAIAQCAAAAQCAEAgAAAEAgBAIAAABAIAQCAAAAQCAEAgAAAEAgBAIAAABAIAQCAAAAQCAGC6g21euRjj1N9nWeYIbvA4NN3/iz5/0fWdtJy6x9W9/7b9/dh0/evWe9PHf9fef6BCAACoEKxCSvBNz/hYzRnmpDPnSb9f1vO35f03a+Vh2yoDdcen7jht6vi3/f0HKgQAgAoB23eGOenMedKZ1qLPZzHzjgnYluPv/QcqBACACsH6znBnPaOiXe+HfXv/uVsHUCEAANpbIYAmZ8Drrhysm8oAMAsVAgBgPysEznyWs/+ajsIu/3zR53v/raYy0HS9Nn38vf9AhQAAUCFofqbjvuHNVgqanlkt+vxtff9N+v2ub0/TM+11Hf+2v/9AhQAAUCGQ4PfvOKz7OM56rXzf3n/LXu9NH/9de/+BCgEAIBAAAAIBACAQAAACAQAgEAAAAgEAIBAAAAIBACAQAAACAQAgEAAAAgEAIBAAAAIBACAQAAACAQAgEAAAAgEAIBAAAAIBACAQAAACAQAgEAAAAgEAIBAAAAIBACAQAAACAQAgEAAAAgEAIBAAAAIBALC3Dtq0sTHGEEIIL/8rm+v5T643+/zuf+/3/tv09r14tt3Hf9X7z/bv9vvX+1+HrkIAAAgEAIBAAAAIBACAQAAALEXWf/M+pn88/vjeXm9sGiW/swcry/Z6/+379m37+8P2x51+/3r/7/b+34Ljn6kQAADtmoeg7v7XTd/nWneff919wouuX93y6/Zf3fLr1r9u+ave/8s6w9zVeSbavv1N3+dt/5zc9uPH/FQIAACBAAAQCAAAgQAAEAgAgBCCeQhm21krvs910+u36uXv+33e7mPf7e13/Nq9/W1nHgIAIITQsnkIkm29z3jReRKangGsap6BRc8gtn2egk0fv13/f7Xt2+/4tXv7MYYAABAIAACBAAAQCAAAgQAA+Il5CGbZWTs+D4F5GIL1t/2On+2n+vibhwAAaNk8BIveZ1t3n/yy7tNd1X32u3Kf8a7f59z2+7Qdv3Yev7p5QurUff5sep6RNlAhAAAEAgBAIAAABAIAQCAAAEII5iHYrYO14H2+5iEI1t/2O347+vlonoOVH3/zEAAALZuHIJn3PtlV3wdbN89B3X2+TddvW+8z3vXvY2/798k7fu0+fuYJ2H0qBACAQAAACAQAgEAAAAgEAEAIwTwEs+2sHb8Pf9fnYdj08dn195ftd/xsP1OOv3kIAICWzUOwK/cZr2r5236f8aLzHOzK+6zt/8+sv+1nO6kQAAACAQAgEAAAAgEAIBAAACEE8xDMtrNaPg/Brm9/299ftt/xs/1MOf7mIQAAWjYPQTLvfbaL3idfd59/3esuax4A30dv/W3/8tf/xbOw0u1f9Twhbd9+jCEAAAQCAEAgAAAEAgBAIAAAfmIegl06WAve52segmD9bb/PB9tP9fE3DwEA0LJ5CNqeILd9+3f9+Hh/OX62n12mQgAACAQAgEAAAAgEAIBAAAAIBACAQAAACAQAgEAAAAgEAIBAAAAIBACAQAAACAQAgEAAAAgEAIBAAAAIBACAQAAACAQAgEAAAAgEAIBAAABMcGAXsCwvnk3//ZPrGEII4eV/ZXO9ft3zu/+92u2LcbXrv+rnL7p/bH+7l48KAQAgEAAAAgEAIBAAAAIBANASWf/N+5j+8fjje/YIc0ujoDf2Zs6yvd6+Te8f2x9bvXz2/vM7UyEAAMxDQHN18wwkq5onoG75dfdpL7r8Rc+wFp2nYdP3kbd9++vu/190noRtXz77T4UAABAIAACBAAAQCAAAgQAACCGYh4AZuA87tHr927793v/s+ee7eQgAAPMQULDpeQbacobT9vvEd337N73+5hlgVVQIAACBAAAQCAAAgQAAEAgAgBCCeQgocJ+z/Wv7t3f9/f9kxe9v8xAAAOYhoIL7nDezX/f9++x3ffvrzrDTGfyk9a+b56Nu++v2y6rnAWH/qRAAAAIBACAQAAACAQAgEAAAIQTzEFDgPmf71/ZvbvsW/jD3/4/F3r/mIQAAzENAQdvvk9+W/Wz7d9Oi8xTUMc8Aq6ZCAAAIBACAQAAACAQAgEAAAIQQzENAgXkI7F/bb/tp7eeTeQgAAPMQMMMZSN33udfdZ73ofdSLfp/8pu/jbvs8D7bfPB9sNxUCAEAgAAAEAgBAIAAABAIAIIRgHgJmsOn7qHf9Pm734dv+Nm8/W//+NA8BAGAeApZ4hrLoPAVNbWqegVWv/6qXv+l5GBbd/n1hngG2lQoBACAQAAACAQAgEAAAAgEAEEIwDwFLtOh91gu/mVd8n/amt2/b98+q9595CNydwErfn+YhAADMQ8AenYHaPvvP9sP8VAgAAIEAABAIAACBAAAQCAAAgQAAEAgAAIEAABAIAACBAAAQCAAAgQAAEAgAAIEAABAIAACBAAAQCAAAgQAAEAgAAIEAABAIAACBAAAQCAAAgQAAEAgAAIEAABAIAACBAAAQCAAAgQAAEAgAAIEAABAIAACBAAAQCAAAgQAAEAgAAIEAABAIAICGDuwC2iLGOPbvLMvWspw6k9ZjWes7aX3qXq9u+bP+vul+WNb+A1QIAAAVAljsjH3Z6ioA6c9ln+lOOoNf9XKXfSa/qf0HKgQAgAoB7Jt5r03vqrpr+5uuFAAqBACACgGwSyZVEiY9rs6iz697HUCFAABQIYDtVndGu+pr94ueUU8agzHreq97HgVAhQAAUCGA7bLpM9mmMyFu+/4rr6+7I0CFAABQIYBm6s6A1/XdBuvann1ff5UCUCEAAFQIYD6bOmNc1nKXPff/oq+/rrsKmlYKABUCAEAgAAAEAgBAIAAABAIAQCAAAAQCAEAgAAAEAgBAIAAABAIAQCAAAAQCAEAgAAAEAgBAIAAABAIAYMUO7AL2VYyx0eOyLNvIcuuWX36deddz0vrUvV7d8mf9fdP9sKr9t+rjDioEAIAKAWx7ZaDuDDL9uaozxk0tf9J+WNd2L+uMfNb917Ryse7tBxUCAECFANZt1mvj+6buDHnTlYJtf3+ACgEAoEIA+2owGPycgPP8zll0+hnVZ9LlSsK8Z9yLPr/udWZdbxUDEAhomeFwOPrgHwwGIcuyEGMc/bntZl3HtG2rXo9ZLs2kfZ1+VhXMis8rP27S9hkYCAIB1Pr2229DlmXhw4cPo87j4OBg9Pf79++vvBNvEjpW3XkXA1HqbIu/b7p+6XXmWe8YY+NKTPHMfjgc3llu09drGliEChAI2HPFasBwOBz9med5ZSezLB8+fAhZlo06mHIoaHoGX+y8Z+mshsNh5ePLHWDaP00rJekxTffdYDCYq1pRDi1V67isznvfB5iCQECr/fOf/wx5noe3b9+GPM9DlmWh0+mEx48fry2IdDqdO1WJeYJFnuchxjg2DqLJ89LyQwjh8PCw8nHff//91NL9pPVpGgrKwWOW/ZdeP8/zcO/evRBCCD/88MNYqHv37l2IMYYHDx6MPf+HH34YW4f0/KrlJMaRgEDAHvr3v/89+oDP83ztH/YfPnwYdVqLSJ3iPNWMVKWo63hTeGkSCIpVliZSxzxrlSBVFsrbXny9YjiZ1tFP267ia88SuEAggB3x5s2bURBILcuy8M033/z4pj84GF2D7nQ6odPphOFwGH7zm98sLRCEEMYuG8z7Oqk6kGVZeP36dTg8PBx1zMUOL8/z8NFHH40tv65DTJ1q084wnaE3veRSrHAMh8Pw6tWr0ToNh8NR5SIFhl//+tchhBDev38fsiy7c+njl7/85ej4DofDUZh5/fp1CCGEhw8fhhDCqGLw3XffhRBC+Ne//jUWHmKModPpjELTL37xC/9pQCBgH3377bdj1YGqasHBwcGorD6ppDyv77//PnQ6nYUDwfv378c6seIAu+FwOAoy5UGCb9++HQWHact/9+7daJ80qRCk9Wk65iA9PnX45U7+7du3ldMNp0pAnudj4aa4f9PzUqdetT7v3r0bvU5abvlPAwnhZ1n/zfvR/6THH9+zRwCgZWKMmZE0AICpiwEAYwhgqYrXpN3jDuwSFQIAQIUAlkmFABAIALexATvLJQNYciDIssxUuMDOUSGAJQeCELKgULDM/bn7l1925au2EQiA5X3yh0wgWNq+3OVOtDgTYvn7HIQDtpG6JiyzE/ixH3PJYBn2oCpwd5PiXF8JDSoEsKNntrT9LXC3upGCgOoAKgTQlhPbYfShz50wUPwzhQaVAgQC2FM/foue/SAAxMq/F39W/pZKEAhgzzqCwWAYhkMf9G2WLg3UjRdQIUAggP3tCUIIMQyHA/tChWBihaDJ72DdDCqE5fYEwUc8oEIALTccDp31ATtJhQCWzGAxYBepEMCSzXM7WdXji9+JkF4zPW7Sn6P/2Hl+5/Hln826PtO2c9rji8tNf09/1u2v4uPL61Z83brXqHqdacsysRQqBMBaqwPF0ehVr1X+e7HTK05yU37+j7c/jk+CMxwOp65D1bKnTaSTRtDXhYe03CzLRn8vb8+0ZRSXVfx7cRunrcOkfTRpPZsGom0No6pTCASwowGirtOdp3OrChSTljPvKPji6zXpQGdddpPnVQWGafu5SSe6y5d8UkCr2oaq71UQHihSF4MtCAW7uJymt9Ztep2LYWjeUDJPx7yKjr7p6057bLnKBCoEQCuC1SbK6Issr2p9ix13nudhMKie5yKNfUghqPi48rctqg4gEACCQti+6+11Mxo2uTxTd0mp6ufGHSAQAILCjkhn+oeHhyHGGA4ODsYqAcUBm3mehx9++GFq6FjH5R4EAmDNZ5U+0NtzTIuDBsuVgk6n41IAAgE4y2VfjuW0Y/r+/fu5X3/SbaeQuMsA2NkzaUAgAFreKauOgEAAbEkYaDLyfZZ75zcdalQdEAgAZ+ILLHfe2Q6bPK7J9yVM+33dpD5G3MOPDCqEHToT36bl1k27XNVRT5tOt2450167OLq+airivT+zK30ZkwGECASwhzbVoc37PQPrrB6sayribScAsJRgaRcAAAIBACAQAAACAQAgELBN3AMOpf8ThQYCAa0KA0IB/BwGhGcEAoCWi6VWDAImUEIgAGhzSBAEEAhoD6VQAIEAYSA4AwLYBFMXs0WiULCDEe7O37Of/xjUHMp7ef07YtrvPkyYsfcgr35ynPb32Gy5IBDA2kIBu3i0Upyb5RAOmy4kC2GWy+fpsbEQVOK09RcGQCAAVhcW8p9642Gc3nFP6qizwg+qHjrp9asqAdMChRAAAgGwoopBFurP6ocxhCwrnakXrhrFrJQOGvbcsfg6WTldSAIgELC9HUnhu+zZv3Aw7TF3QsOUC/3ZLMuIdx+k/weBgB0LBjBvyNDxg0AAd6rEEx9U+mvx8U1GxscpLxunLzK8nzCS7n4+3qFlU05205n12Al01BkCAgFUdpyVHXO5hDzjVYphnP2sNGb1HfWgyfZVDK5TVAEEApgzMIyFhFInWzcyfrjggie9/jBOziYTb5lzfRwQCGD5IaHJyPhYMzI+LDAyPhaueTQZFC8EAAIBrKmCUPWYdYyMn3T5w30YgEAAexoyVvE4gFn4ciMAQCAAAAQCAEAgAAAEAgBAIAAAfuS2QwDu+NWvfhXyPA9ZloU8z8OrV6/sFIEA2D0zTJEIFb777rv9+19R+np1364qEMB+R4Hs5+9w9IEHAkBTxhAAUHkGjUAA7PiHemroINt+Bu3/QXMuGYAPQBrsT+VmIUeFANitDqwwMhxAhQDamvKzLIQsC74oGRAIoMVSiTvLVAiAGU4m7ALYx1CQB0MJFrdP15/TJEOgQgDtSQNjlQIW25e7HArSWJLsp+0oDpBM27XL25fGyQyHQ+9VgQCoOK0NWe62w2Xty12vCkwKAMWQsGuhIM/zkOf5aL2L27nrIUcgAJbbj/lQbL3U0RffB1UBYBfDQKoKeI8LBMDUk9oYwjCGaISQ90JFx1/uRHetQlBeV6FAIAAmGA6HodPJQowuGbQ9DEybVGlXO1IBYHWcQ8AedgSDwdBAq5YrXjKYNp5k38aamLZbhQD4+RMxhBDDcDiwL1oeDJucVe/LGXdxoGFxrISKgkAAbe4Jgo9A2qR8++Guj5MQCIClGA6Hyqa0LAPHmf6NQACt+oD0IUibQwGzM6gQAGEAFQK2i2t9PhyBzXz2qhCwVW9IADZDIEAYAP+nQCBgOyhzg/9TCATgbAZAIAAABAIIypsAm+a2Q4QCAFQIAAAVAgDWdQaa56MBxFmWhQ8fPtgpAgEAbZO+jXCfdDqdsX8PBrv7teMCAQDMaZcDQJkxBACAQAAAs9jXidQEAgCYwb7eIi0QAMASZVm2i1WETCAAYC875U2JMe5iFUEgAMCZOi4ZADBvB1KYaGjblM/QhYP6/GQeAgBmPuvO8zzEGMc62TTx0LaUy4vr0XSd8jwf25Y2EQgAmKkqkDrY1MmmP7MsG4WEXbuGnuf5KOSUt3OZIefk5CQ8ffo0hBDCF198EZ4/f741uyDrv3k/2srHH9/zbgdganWgfOZdDALbVCGo0+12w+npaXj9+nX47LPPpq77Mrbp+Pg4fPnll2M/e/78efjDH/4QXr16tend8QtjCABorKoMX3W9fp2Ojo7C8fHxTM+5uLgIvV4vhBDCX//61/DNN9+E3//+96PtKbdl+Oqrr0bBo1gxuLy83IZD2wn9N+9jaiEETdM0TZvYsiyLWZbFbrcb+/1+vL29jZeXl/Ho6Ghj69TtduNgMIi3t7fx7Oys8jG3t7fx/Pw8Hh0dxV6vFweDQby8vIzHx8dxMBiMnr+O9b28vBwtczAYxIuLi204th8JBJqmaVrjMFD8e7/fH+tMj4+P7zxuXS118oPBIPZ6vdjtdke/Ozs7G/0urXO/34/dbnfseYPBIJ6enk4MQcta15OTk7Fl3t7exl6vF6+vrzcZrH4tEGiapmlztYuLizsdW5PnHR0dxYuLi9jr9eLl5eVY5z1vK3b6qcMvVgfKvzs+Po7n5+djPx8MBmPrkud5PDg4iJ1OJ+Z5HvM8X0owKAeCYru+vt7U8TwSCDRN07S52tHR0Z0O7eTkpPY5Nzc3d553eXm58PoUKxbFs/1iIEhhoNwpp58Xw0CxpSpBCgTzBoPz8/M767ns/TBn+w+BQNM0TZu7XV1djXVoVSXv09PT2O124/Hx8Z2z9bpy/SIdbTrbTuuYOv3j4+M7j726uhpb92IAmKfzv7i4iKenp/Hk5CSenp7Gy8vLqdt+dXVVG6ZW3P6HQKBpmqYt5bJB1SWDo6OjyjPiXq83NqBvMBhMHBBY105PT++MBSgO1js6Ohpdmjg7O5t4hl6sEix6aaB8CWNaOz8/34ZjKRBomqZpywkEvV4vnpyc3KkSpFH1/X4/XlxcjJ0J11UXJrV0pt/00sbZ2dnUM/RlVCnmDQWpkrDhCsH/Fgg0TdO0pQ0sLJbA0wC9VLKvuj5eDBOzLrd83b+qXV9fN+qU+/3+Sjrkk5OTqWMGyu329napoWSG9sTERADM5eTkJJydnVX+7tNPPx397smTJyGEEF68eBFCCJWTCH399dczL//hw4eh1+uFbrc7dR3r/OMf/wi/+93vVjKN8PPnz8Mnn3wS/vKXvzR6/JMnT8Lnn38eTk9P1304OwIBAI2kGQjPzs5Cr9cLvV5v1NlXSR3/0dFRCOHHmfqurq7Cl19+Gfr9/ujnIYSZp+796quvRqHg888/H3utoj/96U/h5cuXIYQQXr58Ofp78vr16/DFF19MfP6yTOrgq0LI119/vYnvOIguGWiapmlTZwFMk+ZcX183Kn/f3t6Ozb5XnhSoOJhukdn6ircv3tzc1I4jKN8RUb5ksIz5EELFWIdp+6x8SePi4mJTkxP9p0CgaZqmTe1Im14DL1//Ttf3Jz0+TTncZP6C0GBOg7S8o6OjUeee7jCo24Z+v7/0jrhqfMXNzU3lPAzLHtA4R/u/AoGmaZq2lNHyxU79+Pg4Xl1dTQwEaRDhIoEg/HTLYfk1Li8vR7fyNVn3m5ubxncsNG3l7ytIyyl+l0JVKNlgKFAh0DRN05pN/FPXsYbShEWpc6u6RJA670UDQbHD73a7o4pGWnaxClF12WIVlYFJIejm5mYsDKTvfygHhA3dfvj/BAJN0zStcQm8eC9/r9cbdbA3Nzfx/Pw8drvd2O12xyYpKl4fL147L059PG8nmF4zjSFI/y6+XpqHYNK0wVdXV/Hi4iJeXFzEs7OzpQSEYidfrhakSyvFiZiqLr+4ZKBpmqZt/SWEk5OTiVWDm5ubsTkHijMRThpQN28gSAMFU+eaAkt5YOS0AYWrKN2fnp7G6+vreH5+XjlmIAWYbrdbOVfCBgKBSwaapmlaswF8xTPnug626i6Dbrc7Nqd/sdowbyDo9XqjsQopcKTO9uTkZKYgMG0b5q1eVC2/3+/Hs7Oz0eRK5d/PO4WzQKBpmqatZQxBms2v/B0E5c69+MVCxW8VTAP3Ujm9eOY8byAo3iqY1uH8/HziDIX9fn+sE765uRl9+VD5TL74FcrzVlLK+yVN7zzpToMNVAZS6woEmqZpWqP76asG5vX7/cqyeOr8i4EgdYbTBhkueidE6sTLHXH6HoXyKP+q6ZTT1yPPOy/B6enpxO9NSHM6VF1CmGcK5yW2/yUQaJqmaY1asZO7ubkZu81v0rf3FTvq4p/lWxLnLZOn9Uivm8r8xbPz6+vrsc69uL6LXhYofiviyclJ5S2F5csCNzc3Y5cLrq+vR4MhqwLKmtr/EQg0TdO0mW/xSx16eWBhecbA1NFdXV2NzoLTc1OHvkjHXO6Am5zVF+92WCQQZFkWnz59Gnu93sRLAKnzL48RKFZKbm9vR9vR6/Xi6enpSmZNrGm/EQg0TdO0ue6vr5qJr3zdPZXHz87ORpMIpQl6ih16GnOwSEhpes2/uN5NKxOpElCsCGRZVjkBUXHgYLmyksYITJqcqPwa6U6FNUxn/D8FAk3TNK1xK17/Tn9PZ7gXFxdjlwuKFYDyVyGXZ+1b5Np5eo15AkHTsQtZllW2R48ejV0SuL29HZvLoFxBOT8/H7vz4Pz8fOotnOWxGis8tv8hEGiapmkz3W0wS7m9PHK++N0I5UmO5l2n4hiCWbehaWk+y7LY6XRinuejMFD897Nnz+LTp0/jo0ePRlWEcvUg3SJZvhOjOPgyTY406S6J4uWWJbfHAoGmaZo2U0udWt0Za+rkygPlqs6GFx1df3x83PgMunj9fpZlHBwcjFqe57HT6cSDg4PY6XTuXFKo+g6F4s+Kl02K61QMCWmGxXI4WNHlg4cCgaZpmjbXrXV1Z9cpOFQ9rnwNfZ2326XOt+4rk8stz/N4eHgYDw8P48HBQbx37168f//+6N/F8QVVYwTOzs5GgwwnrdO0/XBycrLK7zn46CAAwIz+/ve/1z7m008/DZ999ll48eLFnd/98Y9/DDc3N+Hhw4chhBBevny5tnVPy3r16tVMzxsOh2E4HI7+3el0QqfTCTHGEGOsXMbr16/Dq1evwpMnT8LR0VH45JNPRo+5uroKIYTwt7/9LTx79qx2+c+fP1/tjlEh0DRN01bR6r4oqHjpYN3T9S7jnv88z+P9+/fjvXv34uHhYczzfDSm4NGjR/Hi4iL+9re/HVVKysur+irkDU5M9CuBQNM0Tdv4eIR133ef7opYNBA8ePBgdNkgXTooDz4s3m45bR9sOBA8EAg0TdO0jbY0zfE628nJyVIG5z148CA+ePBgVCUoDjoshoJ0q2NdMNrgTIX3sp+CQAghhMcf33NhDAAayvM8dDqdkGVZCCGMxhMMh8PRuIL0Z7fbrRxPkVxeXoY///nPM49tWJLD/z8ArYwBBf0L04kAAAAASUVORK5CYII=
var imgStart = new Image();
imgStart.src = imgStartData;


function GameStart()
{
	this.x = 0;
	this.y = 512;	
}


GameStart.prototype.draw = function()
{
	var myCanvas = document.getElementById("upp");
	var graphics = myCanvas.getContext("2d");
	if(this.y == 512)
	{
		graphics.fillStyle = "#000";
		graphics.fillRect(0, 0, 512, 448);
	}
	graphics.drawImage(imgStart, this.x, this.y, 512, 448);
	
	if(this.y <= 0) 
	{
		this.y = 0;
		graphics.drawImage(imgStart, this.x, this.y, 512, 448);
		gameState = STATE_SELECT;
		this.init();
	}
	
	this.y -= 5;
}

GameStart.prototype.init = function()
{
	this.y = 512;
}



function TankRun()
{
	this.x = 128;
	this.time = 0;
	
	this.num = 0;
	this.ys = [248, 280, 312];
}

TankRun.prototype.draw = function()
{
	var myCanvas = document.getElementById("stage");
	var graphics = myCanvas.getContext("2d");
	var img = document.getElementById("tankAll");
	
	this.time ++;
	var temp;
	
	if( parseInt(this.time / 6) % 2 == 0)
	{
		temp = 0;
	}
	else
	{
		temp = 27;
	}
	graphics.drawImage(img, images["tankRun"][0],images["tankRun"][1] + temp, 27,27, this.x, this.ys[this.num], 27, 27 )
}

TankRun.prototype.init = function()
{
	
	var myCanvas = document.getElementById("stage");
	var graphics = myCanvas.getContext("2d");
	graphics.clearRect(this.x, this.ys[this.num], 27, 27);
	
	this.time = 0;
	this.num = 0;
}

TankRun.prototype.next = function(n)
{
	var myCanvas = document.getElementById("stage");
	var graphics = myCanvas.getContext("2d");
	
	graphics.clearRect(this.x, this.ys[this.num], 27, 27);
	
	if(n == 1) 
	{
		if(this.num == 2) 
		{
			this.num = 0;
			return;
		}
		this.num ++;
	}
	else 
	{
		if(this.num == 0) 
		{
			this.num = 2;
			return;
		}
		this.num --;
	}
}



function GameOver()
{
	this.x = 210;
	this.y = 512;	
}


GameOver.prototype.draw = function()
{
	var myCanvas = document.getElementById("stage");
	var graphics = myCanvas.getContext("2d");
	var img = document.getElementById("tankAll");
	
	graphics.clearRect(this.x, this.y + 2, 62, 30);
	graphics.drawImage(img, images["gameOver"][0],images["gameOver"][1], 62, 30, this.x, this.y, 62, 30);
	
	if(this.y <= 100) 
	{
		gameState = STATE_GAMESTART;
		graphics.clearRect(this.x, this.y, 62, 30);
		this.init();
	}
	
	this.y -= 2;
}

GameOver.prototype.init = function()
{
	this.y = 512;
}



