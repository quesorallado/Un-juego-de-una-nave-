var nave;
var planeta1;
var planeta2;
var planeta3;
var satelite;
var asteroide;
var fondo;
var fondoX = 350;
var fondoY = 175;
var naveX = 600;
var planeta1Y = 80;
var planeta1X = 100;
var planeta2Y = 80;
var planeta2X = 800;
var asteroideY = 80;
var asteroideX = 400;
var sateliteY = -500;
var sateliteX = 600;
var gameover;
var puntos = 0;
var contador = 0;
function setup(){
 createCanvas(1200,600);
fondo = loadImage ("fondo.jpeg");
nave = loadImage ("nave.png");
planeta1 = loadImage ("planeta1.png");
asteroide = loadImage ("asteroide.png");
planeta2 = loadImage ("planeta2.png");
satelite = loadImage ("satelite.gif");
gameover = loadImage ("gameover.png");
}
function draw(){
contador = contador +1;
if(contador == 75){
puntos = puntos  +1;
contador = 0;
}
image(fondo,fondoX,fondoY);
imageMode(CENTER);
image(fondo,fondoX,fondoY -600);
image(nave,naveX ,540,150,200);
image(planeta1,planeta1X,planeta1Y,300,220);
image(asteroide,asteroideX,asteroideY,100,100);
image(planeta2,planeta2X,planeta2Y,150,150);
image(satelite,sateliteX,sateliteY,150,150);
imageMode(CENTER);
fondoY = fondoY +20;
fill("blue");
textSize(50);
text("Tiempo = " + puntos,20,60)
if(fondoY > 600){
fondoY = 175;
}
if(keyIsDown(LEFT_ARROW)){
naveX = naveX -7;
}
if(keyIsDown(RIGHT_ARROW)){
naveX = naveX +7;
}
if(naveX > 1200){
naveX = naveX = 1125;
}
if(naveX < 0){
naveX = naveX = 25;
}
planeta1Y = planeta1Y +8;
planeta2Y = planeta2Y +6;
asteroideY = asteroideY + 7;
sateliteY = sateliteY +7;
if(planeta1Y > 600){
planeta1Y = 0;
planeta1X = random(0,1200);
}
if(planeta2Y > 600){
planeta2Y = 0;
planeta2X = random(0,1200);
}
if(asteroideY > 600){
asteroideY = -300;
asteroideX = random(0,1200);
}
if(sateliteY > 600){
sateliteY = -500;
sateliteX = random(0,1200);
}
if(planeta1X > naveX  -75 && planeta1X < naveX + 75  ){
if(planeta1Y > 540){
    image(gameover,600,300,1200,600);
    planeta1X = naveX;
    planeta1Y = 590;
}

}
if(planeta2X > naveX -75 && planeta2X < naveX +75 ){
if(planeta2Y > 540){
    image(gameover,600,300,1200,600);
    planeta2X = naveX;
    planeta2Y = 590;
}
}
if(sateliteX > naveX  -75 && sateliteX < naveX + 75  ){
    if(sateliteY > 540){
        image(gameover,600,300,1200,600);
        sateliteX = naveX;
        sateliteY = 590;
    }
    
    }
    if(asteroideX > naveX -75 &&asteroideX < naveX + 75){
        if(asteroideY > 540){
            image(gameover,600,300,1200,600);
        asteroideX = naveX;
        asteroideY = 590;
        }
    }
}