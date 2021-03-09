const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World= Matter.World
var engine, world
var drops=[]
function preload(){
    man_walking=loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png")
    thunderImg1=loadImage("images/thunderbolt/1.png")
    thunderImg2=loadImage("images/thunderbolt/2.png")
    thunderImg3=loadImage("images/thunderbolt/3.png")
    thunderImg4=loadImage("images/thunderbolt/4.png")
}

function setup(){
   createCanvas( 400, 600)
   engine=Engine.create()
   world=engine.world
    Engine.run(engine)
    maxDrops=150
    for(var i=0;i<=maxDrops;i++){
        drops.push(new Drop(random(0,400), random(0,400)))
    }
    
    umb= new Umbrella(210, 420)
    man=createSprite(200,470,40,80 )
    man.addAnimation("walker", man_walking)
    man.scale=0.4

}

function draw(){
    background("black")
    for(var i=0;i<maxDrops;i++){
        drops[i].display()
        drops[i].update()
    }
    showThunder()
    drawSprites()
}   


function showThunder(){
    if(frameCount%80===0){
        thunder=createSprite(random(10,370), random(20,40), 10,10)
        beGinnerFrame=frameCount
        rand=Math.round(random(1,4))
        switch(rand){
            case 1: thunder.addImage(thunderImg1)
            break;
            case 2: thunder.addImage(thunderImg2)
            break;
            case 3: thunder.addImage(thunderImg3)
            break;
            case 4: thunder.addImage(thunderImg4)
            break;
        }
        thunder.lifetime=14
        thunder.scale=random(0.3, 0.6)
    }
}
