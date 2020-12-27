class Chain{
    constructor(BodyA,BodyB){
        var options={
            bodyA : BodyA,
            bodyB : BodyB,
            length : 100,
            stiffness : 1
        
        }
        this.chain = Matter.Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
        strokeWeight(5)
        stroke("green")
    }
}