class log{
    constructor(x,y,height,angle) {
        var options = {
            'restitution':0.8,
            'friction'  : 0.3,
            'density' :1.0
        }
        this.body =Bodies.rectangle(x,y,50,height,options);
        this.width = 50;
        this.height = height;
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);

    }
    display() {
        fill ("yellow")
        var pos = this.body.position;
        var angle =this.body.angle;
       //push();
        //translate(pos.x,pos.y);
        //rotate(angle);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        //pop(); 
    }
}