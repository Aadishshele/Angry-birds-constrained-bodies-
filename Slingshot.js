class Slingshot{
    constructor(BodyA,pointB){
        var options={
            bodyA : BodyA,
            pointB : pointB,
            length : 0,
            stiffness : 0.01
        
        }
        this.slingImage1 = loadImage("sprites/sling1.png")
        this.slingImage2 = loadImage("sprites/sling2.png")
        this.slingImage3 = loadImage("sprites/sling3.png")

        this.sling = Matter.Constraint.create(options)
        World.add(world,this.sling)
    }
    display(){
        if(this.sling.bodyA){
        //line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y)
        var startpoint = this.sling.bodyA.position
        var endpoint = this.sling.pointB
        if(startpoint.x < 200){
        line(startpoint.x-20,startpoint.y,endpoint.x-10,endpoint.y)
        line(startpoint.x-20,startpoint.y,endpoint.x+30,endpoint.y)
        image(this.slingImage3,startpoint.x-30,startpoint.y-10,15,30)
        }
        else{
        line(startpoint.x+20,startpoint.y,endpoint.x-10,endpoint.y)
        line(startpoint.x+20,startpoint.y,endpoint.x+30,endpoint.y)
        image(this.slingImage3,startpoint.x+20,startpoint.y-10,15,30)
        }
        }
        strokeWeight(10)
        stroke(48,22,8)
        image(this.slingImage1,200,20)
        image(this.slingImage2,170,20)
        
    }
    Fly(){
        this.sling.bodyA=null
    }
}