
module.service('world', function() {

    var
        Engine = Matter.Engine,
        World = Matter.World,
        Bodies = Matter.Bodies;

    var curr = {
        world: null,
        lastCircle: null,
        lastBox: null
    };

    this.setWorld = function( world )
    {
        curr.world = world;
        //console.log(curr.world);
    };

    this.addDashedCircle = function( x, y, d )
    {
        if(curr.lastCircle) {
            World.remove(curr.world, curr.lastCircle);
        }

        curr.lastCircle = Bodies.circle(x, y, d, {isStatic: true, render: {fillStyle: 'white', strokeStyle: 'transparent'} });

        World.addBody(curr.world, curr.lastCircle);
    };

    this.addCircle = function( x, y, d, elast )
    {
        if(curr.lastCircle) {
            World.remove(curr.world, curr.lastCircle);
        }
        elast = elast / 10;

        var circle = Bodies.circle(x, y, d, {restitution: elast, render: {fillStyle: 'purple'} });

        World.addBody(curr.world, circle);
    };

    this.addDashedBox = function( x, y, w, h )
    {
        if(curr.lastBox) {
            World.remove(curr.world, curr.lastBox);
        }

        curr.lastBox = Bodies.rectangle(x, y, w, h, { render: {fillStyle: 'white', strokeStyle: 'transparent'}, isStatic: true });

        World.addBody(curr.world, curr.lastBox);
    };

    this.addBox = function( x, y, w, h )
    {
        if(curr.lastBox) {
            World.remove(curr.world, curr.lastBox);
        }

        var box = Bodies.rectangle(x, y, w, h, { render: {fillStyle: 'green'}, isStatic: true });

        World.addBody(curr.world, box);
    };

    this.changeGravity = function( value )
    {
        if(curr.world) {
            curr.world.gravity.y = value;
        }
    };
});
