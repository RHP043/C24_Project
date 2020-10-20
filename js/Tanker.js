class Tanker {
  constructor(x, y, width, height, bodyA, pointB) {
    this.image = loadImage("assets/turret.png");
      var options = {
      bodyA: bodyA,
      isStatic: true
     }
     this.pointB = pointB
  };
    
  attach(body){
      this.tanker.bodyA = body;
  }
  
  fly(){
      this.tanker.bodyA = null;
  }


    display(){
      if(this.tanker.bodyA){
        var pointA = this.tanker.bodyA.position;
        var pointB = this.pointB;
        push();
      }
    };
};
