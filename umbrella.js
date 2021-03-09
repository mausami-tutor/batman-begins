class Umbrella{
    constructor(x,y){
        
        this.body=Bodies.circle(x,y,80,{isStatic: true})
        World.add(world, this.body)
        this.radius=70
        
    }
    display(){
        var pos=this.body.position
        fill(0)
        ellipseMode(CENTER)
        ellipse(pos.x, pos.y, this.radius*2,this.radius*2)
    }
}