class Drop{
    constructor(x,y){
        var options={
            friction:0.1,
            restitution:0.04,
            frictionAir: 0.02
        }
        this.rain=Bodies.circle(x,y, 3, options)
        World.add(world, this.rain)
        this.radius=3
    }
    display(){
        var pos= this.rain.position
        
        push()
        fill("blue")
        ellipseMode(CENTER)
        ellipse(pos.x, pos.y, this.radius*2, this.radius*2)
        pop()
    }
    update(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain,{x: random(0,400),y: random(0,400)})
        }
    }
}