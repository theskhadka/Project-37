// playable characters
var player;

// ground
var bottom, top;

// obstacle1s
var obstacleGroup, obstacleGroup2;

var gameState = 1;

function setup() {
  // canvas
  var canvas = createCanvas(1200,400);

  // obstacle1 group
  obstacleGroup = new Group();


  // player
  player = createSprite(100, 325, 25, 25);

  obstacle1 = createSprite(1200,120,75,25);
  obstacle1.velocityX = -4;
  obstacleGroup.add(obstacle1);
  obstacle2 = createSprite(1240,200,75,25);
  obstacle2.velocityX = -4;
  obstacleGroup.add(obstacle2);
  obstacle3 = createSprite(1280,285,75,25);
  obstacle3.velocityX = -4;
  obstacleGroup.add(obstacle3);
  obstacle4 = createSprite(1320,225,75,25);
  obstacle4.velocityX = -4;
  obstacleGroup.add(obstacle4);
  obstacle5 = createSprite(1360,125,75,25);
  obstacle5.velocityX = -4;
  obstacleGroup.add(obstacle5);
  obstacle6 = createSprite(1400,310,75,25);
  obstacle6.velocityX = -4;
  obstacleGroup.add(obstacle6);
  obstacle7 = createSprite(1440,175,75,25);
  obstacle7.velocityX = -4;
  obstacleGroup.add(obstacle7);
  obstacle8 = createSprite(1480,115,75,25);
  obstacle8.velocityX = -4;
  obstacleGroup.add(obstacle8);
  obstacle9 = createSprite(1520,175,75,25);
  obstacle9.velocityX = -4;
  obstacleGroup.add(obstacle9);
  obstacle10 = createSprite(1560,90,75,25);
  obstacle10.velocityX = -4;
  obstacleGroup.add(obstacle10);
  obstacle11 = createSprite(1600,250,75,25);
  obstacle11.velocityX = -4;
  obstacleGroup.add(obstacle11);
  obstacle12 = createSprite(1640,150,75,25);
  obstacle12.velocityX = -4;
  obstacleGroup.add(obstacle12);

  // ground
  bottom = createSprite(600, 400, 1200, 50);
  top = createSprite(600, 0, 1200, 50);
}

function draw() {
  // background
  background(255,255,255);

  drawSprites();

  console.log(gameState);


  if (gameState === 1) {
    spawnObstacle1();
    spawnObstacle2();
    spawnObstacle3();
    spawnObstacle4();
    spawnObstacle5();
    spawnObstacle6();
    spawnObstacle7();
    spawnObstacle8();
    spawnObstacle9();
    spawnObstacle10();
    spawnObstacle11();
    spawnObstacle12();

if (player.x - obstacle1.x < obstacle1.width/2 + player.width/2
&& obstacle1.x - player.x < obstacle1.width/2 + player.width/2
&& player.y - obstacle1.y < obstacle1.height/2 + player.height/2
&& obstacle1.y - player.y < obstacle1.height/2 + player.height/2) {
gameState = 0;
} else if (player.x - obstacle3.x < obstacle3.width/2 + player.width/2
&& obstacle3.x - player.x < obstacle3.width/2 + player.width/2
&& player.y - obstacle3.y < obstacle3.height/2 + player.height/2
&& obstacle3.y - player.y < obstacle3.height/2 + player.height/2) {
gameState = 0;
} else if (player.x - obstacle2.x < obstacle2.width/2 + player.width/2
&& obstacle2.x - player.x < obstacle2.width/2 + player.width/2
&& player.y - obstacle2.y < obstacle2.height/2 + player.height/2
&& obstacle2.y - player.y < obstacle2.height/2 + player.height/2) {
gameState = 0;
} else if (player.x - obstacle4.x < obstacle4.width/2 + player.width/2
&& obstacle4.x - player.x < obstacle4.width/2 + player.width/2
&& player.y - obstacle4.y < obstacle4.height/2 + player.height/2
&& obstacle4.y - player.y < obstacle4.height/2 + player.height/2) {
gameState = 0;
} else if (player.x - obstacle5.x < obstacle5.width/2 + player.width/2
&& obstacle5.x - player.x < obstacle5.width/2 + player.width/2
&& player.y - obstacle5.y < obstacle5.height/2 + player.height/2
&& obstacle5.y - player.y < obstacle5.height/2 + player.height/2) {
gameState = 0;
} else if (player.x - obstacle6.x < obstacle6.width/2 + player.width/2
&& obstacle6.x - player.x < obstacle6.width/2 + player.width/2
&& player.y - obstacle6.y < obstacle6.height/2 + player.height/2
&& obstacle6.y - player.y < obstacle6.height/2 + player.height/2) {
gameState = 0;
} else if (player.x - obstacle7.x < obstacle7.width/2 + player.width/2
&& obstacle7.x - player.x < obstacle7.width/2 + player.width/2
&& player.y - obstacle7.y < obstacle7.height/2 + player.height/2
&& obstacle7.y - player.y < obstacle7.height/2 + player.height/2) {
gameState = 0;
} else if (player.x - obstacle8.x < obstacle8.width/2 + player.width/2
&& obstacle8.x - player.x < obstacle8.width/2 + player.width/2
&& player.y - obstacle8.y < obstacle8.height/2 + player.height/2
&& obstacle8.y - player.y < obstacle8.height/2 + player.height/2) {
gameState = 0;
} else if (player.x - obstacle9.x < obstacle9.width/2 + player.width/2
&& obstacle9.x - player.x < obstacle9.width/2 + player.width/2
&& player.y - obstacle9.y < obstacle9.height/2 + player.height/2
&& obstacle9.y - player.y < obstacle9.height/2 + player.height/2) {
gameState = 0;
} else if (player.x - obstacle10.x < obstacle10.width/2 + player.width/2
&& obstacle10.x - player.x < obstacle10.width/2 + player.width/2
&& player.y - obstacle10.y < obstacle10.height/2 + player.height/2
&& obstacle10.y - player.y < obstacle10.height/2 + player.height/2) {
gameState = 0;
} else if (player.x - obstacle11.x < obstacle11.width/2 + player.width/2
&& obstacle11.x - player.x < obstacle11.width/2 + player.width/2
&& player.y - obstacle11.y < obstacle11.height/2 + player.height/2
&& obstacle11.y - player.y < obstacle11.height/2 + player.height/2) {
gameState = 0;
} else if (player.x - obstacle12.x < obstacle12.width/2 + player.width/2
&& obstacle12.x - player.x < obstacle12.width/2 + player.width/2
&& player.y - obstacle12.y < obstacle12.height/2 + player.height/2
&& obstacle12.y - player.y < obstacle12.height/2 + player.height/2) {
gameState = 0;
} else if (player.x - bottom.x < bottom.width/2 + player.width/2
&& bottom.x - player.x < bottom.width/2 + player.width/2
&& player.y - bottom.y < bottom.height/2 + player.height/2
&& bottom.y - player.y < bottom.height/2 + player.height/2) {
gameState = 0;
} else if (player.y <= 25) {
gameState = 0;
}
    else {
      gameState = 1;
    }
  }
  else if (gameState === 0) {
    player.velocityY = 0;
    obstacleGroup.setVelocityXEach(0);
    
    obstacleGroup.setLifetimeEach(-1);
  }
}

function spawnObstacle1() {
  //write code here to spawn the obstacle1s
  if (frameCount % 350 === 0) {
    obstacle1.x = 1200;
    obstacle1.y = Math.round(random(150, 315))
    obstacle1.velocityX = -4;
    
     //assign lifetime to the variable
    
    //add each obstacle1 to the group
    obstacleGroup.add(obstacle1);
  }
}
function spawnObstacle2() {
  //write code here to spawn the obstacle1s
  if (frameCount % 360 === 0) {
    obstacle2.x = 1200;
    obstacle2.y = Math.round(random(150, 315))
    obstacle2.velocityX = -4;
    
    
    //add each obstacle1 to the group
    obstacleGroup.add(obstacle2);
  }
}
function spawnObstacle3() {
  //write code here to spawn the obstacle1s
  if (frameCount % 370 === 0) {
    obstacle3.x = 1200;
    obstacle3.y = Math.round(random(150, 315))
    obstacle3.velocityX = -4;
    
    
    //add each obstacle1 to the group
    obstacleGroup.add(obstacle3);
  }
}
function spawnObstacle4() {
  //write code here to spawn the obstacle1s
  if (frameCount % 380 === 0) {
    obstacle4.x = 1200;
    obstacle4.y = Math.round(random(150, 315))
    obstacle4.velocityX = -4;
    
     //assign lifetime to the variable
    
    //add each obstacle1 to the group
    obstacleGroup.add(obstacle4);
  }
}
function spawnObstacle5() {
  //write code here to spawn the obstacle1s
  if (frameCount % 390 === 0) {
    obstacle5.x = 1200;
    obstacle5.y = Math.round(random(150, 315))
    obstacle5.velocityX = -4;
    
    
    //add each obstacle1 to the group
    obstacleGroup.add(obstacle5);
  }
}
function spawnObstacle6() {
  //write code here to spawn the obstacle1s
  if (frameCount % 400 === 0) {
    obstacle6.x = 1200;
    obstacle6.y = Math.round(random(150, 315))
    obstacle6.velocityX = -4;
    
    
    //add each obstacle1 to the group
    obstacleGroup.add(obstacle6);
  }
}
function spawnObstacle7() {
  //write code here to spawn the obstacle1s
  if (frameCount % 410 === 0) {
    obstacle7.x = 1200;
    obstacle7.y = Math.round(random(150, 315))
    obstacle7.velocityX = -4;
    
     //assign lifetime to the variable
    
    //add each obstacle1 to the group
    obstacleGroup.add(obstacle7);
  }
}
function spawnObstacle8() {
  //write code here to spawn the obstacle1s
  if (frameCount % 420 === 0) {
    obstacle8.x = 1200;
    obstacle8.y = Math.round(random(150, 315))
    obstacle8.velocityX = -4;
    
    
    //add each obstacle1 to the group
    obstacleGroup.add(obstacle8);
  }
}
function spawnObstacle9() {
  //write code here to spawn the obstacle1s
  if (frameCount % 430 === 0) {
    obstacle9.x = 1200;
    obstacle9.y = Math.round(random(150, 315))
    obstacle9.velocityX = -4;
    
    
    //add each obstacle1 to the group
    obstacleGroup.add(obstacle9);
  }
}
function spawnObstacle10() {
  //write code here to spawn the obstacle1s
  if (frameCount % 440 === 0) {
    obstacle10.x = 1200;
    obstacle10.y = Math.round(random(150, 315))
    obstacle10.velocityX = -4;
    
     //assign lifetime to the variable
    
    //add each obstacle1 to the group
    obstacleGroup.add(obstacle10);
  }
}
function spawnObstacle11() {
  //write code here to spawn the obstacle1s
  if (frameCount % 450 === 0) {
    obstacle11.x = 1200;
    obstacle11.y = Math.round(random(150, 315))
    obstacle11.velocityX = -4;
    
    
    //add each obstacle1 to the group
    obstacleGroup.add(obstacle11);
  }
}
function spawnObstacle12() {
  //write code here to spawn the obstacle1s
  if (frameCount % 460 === 0) {
    obstacle12.x = 1200;
    obstacle12.y = Math.round(random(150, 315))
    obstacle12.velocityX = -4;
    
    
    //add each obstacle1 to the group
    obstacleGroup.add(obstacle12);
  }
}

function keyPressed(){
  if(keyCode === 38 && gameState === 1){
    player.velocityY = -4;
  }
  if(keyCode === 40 && gameState === 1){
    player.velocityY = 4;
  }
}

function mouseDragged(){
  if (gameState === 1) {
  obstacleGroup.setVelocityXEach(-8);
  }
}

function mouseReleased(){
  if (gameState === 1) {
  obstacleGroup.setVelocityXEach(-4);
  }
}
