var just
var shape
var shapes
var shape2
var shapes2
var life=4
var game_over
var gameState="play"
var dash=15
var normal=8
var music
var chegada
var win
var triangle
function preload(){
Just=loadAnimation("just.png")
Just2=loadAnimation("just2.png")
Just3=loadAnimation("just3.png")
Just4=loadAnimation("just4.png")
gameOver=loadImage("game_over.png")
Triangle=loadImage("triangle.png")
music=loadSound("Audios_H11XSTSB.mp3")
}

function setup() {
 createCanvas(windowWidth,windowHeight)
 just=createSprite(width/2-900,height/2)
 just.addAnimation("Just1",Just)
 just.addAnimation("Just2",Just2)
 just.addAnimation("Just3",Just3)
 just.addAnimation("Just4",Just4)
 just.changeAnimation("Just1")
 triangle=createSprite(width-300, height/2)
 triangle.addImage(Triangle)
 triangle.scale=0.5
 chegada=createSprite(width, height/2, 2, 1000)
 chegada.velocityX=-6
 chegada.shapeColor="white"
 just.scale=0.03
 shapes=new Group()
 shapes2=new Group()
 gameover=createSprite(width/2,height/2)
 gameover.addImage(gameOver)
 gameover.scale=3.4
 gameover.visible=false
 bordas=createEdgeSprites()
}

function draw() {
 background("black")
 drawSprites()
 just.collide(bordas)
  
 if(just.overlap(chegada)){
  gameState=="win"
  background("lightblue")
  shapes.destroyEach
  shapes2.destroyEach
 }

  if(!music.isPlaying()){
    music.play()
    music.setVolume(1)
  }

    if(life<=0){
      gameState="its_over"
    }
    if(gameState=="play"){
      var isdash=keyIsDown(32)
      if(isdash&&keyIsDown(68)){
        just.position.x+=dash
      }
      if(isdash&&keyIsDown(65)){
        just.position.x-=dash
      }
      if(isdash&&keyIsDown(83)){
        just.position.y+=dash
      }
      if(isdash&&keyIsDown(87)){
        just.position.y-=dash
      }
    
      if(keyIsDown(68)){
        just.position.x+=normal
      }
      if(keyIsDown(65)){
        just.position.x-=normal
      }
      if(keyIsDown(83)){
        just.position.y+=normal
      }
      if(keyIsDown(87)){
        just.position.y-=normal
      }

      createEnimy()
      createEnimy2()
      for (var i = 0; i < shapes.length; i++) { shapes[i].rotation += 5; }
      for (var i = 0; i < shapes2.length; i++) { shapes2[i].rotation += 1; }
      if(isdash){
        just.setCollider("rectangle",0,0,100,100)
      
      }
      else{just.setCollider("rectangle",0,0,just.width,just.height)}
      if(just.overlap(shapes)){
        life--
        if(life<=0){
          console.log("game_over")
        }
        if(life==3){
          just.x=200
          just.y=200
          just.changeAnimation("Just2")
        }
        if(life==2){
          just.x=200
          just.y=200
          just.changeAnimation("Just3")
        }
        if(life==1){
          just.x=200
          just.y=200
          just.changeAnimation("Just4")
        }
    }
    if(just.overlap(shapes2)){
      life--
      if(life<=0){
        console.log("game_over")
      }
      else{
        just.x=200
        just.y=200
        just.changeAnimation("Just2")
      }
      if(life==2){
        just.x=200
        just.y=200
        just.changeAnimation("Just3")
      }
      if(life==1){
        just.x=200
        just.y=200
        just.changeAnimation("Just4")
      }
  }
    else if(gameState=="its_over"){
      just.destroy()
      gameover.visible=true
    }
}
  textSize(20)
  text(life,100,100)
}
function createEnimy(){
    if(frameCount%5===0){
        shape=createSprite(Math.round(random(2500,width-10)),Math.round(random(-1000,height-10)))
        shape.shapeColor="#FD017D"
        shape.scale=0.1
        shape.velocityX=Math.round(random(-10,-7))
        shape.lifetime=350
        shapes.add(shape)
    }
}
function createEnimy2(){
  if(frameCount%100===0){
        shape2=createSprite(width/2,height/2,20,1000000)
        shape2.scale=0.1
        shape2.shapeColor="#FD017D"
        shape2.lifetime=181
        shapes2.add(shape2)
    }
}