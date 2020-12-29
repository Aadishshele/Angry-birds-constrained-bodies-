class Slingshot{
    constructor(BodyA,pointB){
        var options={
            bodyA : BodyA,
            pointB : pointB,
            length : 20,
            stiffness : 0.01
        
        }
        this.sling = Matter.Constraint.create(options)
        World.add(world,this.sling)
    }
    display(){
        if(this.sling.bodyA){
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y)
        }
        strokeWeight(5)
        stroke("green")
    }
    Fly(){
        this.sling.bodyA=null
    }
}