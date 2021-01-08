class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png")
    this.path = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
    var position = [this.body.position.x,this.body.position.y]
    this.path.push(position)
    }
    for(var index = 0;index < this.path.length;index++){
      image(this.image2,this.path[index][0],this.path[index][1])
    }
  }
}
