class box
{
    constructor(x,y)
    {
        var options=
        {
            'restitution':0.7,
            'density':1.0,
            'friction':1.0
        }
        this.body=Bodies.rectangle(x,y,70,70,options)
        World.add(world,this.body)
        this.width=70
        this.height=70

        
    }
    display()
    {
        fill("white")
        stroke("green")
        strokeWeight(3)
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }

}