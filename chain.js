//creating blue print for constraint
class chain{
//creating constructor taking bodyA and bodyB as arguments
    constructor(bodyA,pointB)
    {
        //creating options for constraint
        var options={
     bodyA:bodyA,
     pointB:pointB,
     stiffness:1.2,
     length:250
        }
// creating chain using constraint
        this.chain=Constraint.create(options);
        this.pointB=pointB
        //adding to the world
        World.add(world,this.chain);
        
    }

    display()
    {
        //name spacing
        var pointA=this.chain.bodyA.position;
        var pointB=this.pointB
        //creating line between the bodies
        strokeWeight(4);
        stroke("blue")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}