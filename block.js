class Block {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0,
        'friction':1.2,
        'density':2.2
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
 
    
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 20){
     
      
      
    var pos =this.body.position;
    
   
    rectMode(CENTER);
    stroke(0);
    strokeWeight(1);
    fill(135, 206, 234);
    rect(pos.x,pos.y,this.width,this.height);
   pop();
    }else {
      push();
      
      
      World.remove(world, this.body);
      pop();
    }
  }
};