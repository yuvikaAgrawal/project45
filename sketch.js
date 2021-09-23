var gameState = "screen1"
var male, female,player1,x
var binImg,bin,hImg,hello,boyImg,boy,girlImg,girl,groundImg,ground

function preload() {
  binImg=loadImage("bin.png");
  hImg=loadImage("hello.png");
  boyImg=loadImage("boy.png");
  girlImg=loadImage("girl (2).png");
  groundImg=loadImage("background.png");
}

function setup() {
  createCanvas(800, 400);
  ground=createSprite(400,250);
  ground.addImage(groundImg);
  ground.scale=0.8
  bin=createSprite(650,90);
  bin.addImage("throw",binImg);
  bin.scale=0.13
}

function draw() {
  
  if (gameState === "screen1") {
    background(250, 246, 0);
    textSize(50)
    fill(255,0,250)
    text("throw the garbage", 200, 100)
    text(".............................", 200, 120)
    textSize(25);
    fill("red")
    text("please press space to start",250,200)
    
    if (keyCode === 32) {
      gameState = "screen2"
    }
  }
  
  if (gameState === "screen2") {
    background(0,250,255)
    bin.visible=false;
    male = createButton("MALE")
    male.position(300, 300)
    
    female = createButton("FEMALE")
    female.position(400, 300)
    hello=createSprite(400,80);
    hello.addImage(hImg);
    hello.scale=0.3;
    boy=createSprite(320,250);
    boy.addImage(boyImg);
    boy.scale=0.05
    girl=createSprite(450,250);
    girl.addImage(girlImg);
    girl.scale=0.12
    
    textSize(25);
    fill("blue")
    text("please fill enteries to start!!",250,170)
    
    
    male.mousePressed(()=>{
      //console.log("it is working")
      
      player1=createInput("NAME")
      player1.position(235,330);
      
      
    })
    female.mousePressed(()=>{
      //console.log("it is working")
      
      player1=createInput("NAME")
      player1.position(235,330);
      
      
      
    })
  }
  drawSprites();
}




//decorate the first screen with proper image, text, description of the game, proper font