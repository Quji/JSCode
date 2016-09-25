var
        Engine = Matter.Engine,
        World = Matter.World,
        Bodies = Matter.Bodies;

module.directive('world', function( world )
{
    return {
        restrict: 'E',
        link: function ( scope, element )
        {
            var engine = Engine.create(element.get(0), {
                render: {
                    options: {
                        hasBounds: false,
                        showBounds: false,
                        width: 800,
                        height: 401,
                        background: '#fff',
                        wireframes: false
                    }
                }
            });

            var bodiesOrig = Matter.Render.bodies;

            Matter.Render.bodies = function(engine, bodies, context)
            {
                var c = context,
                    render = engine.render,
                    options = render.options,
                    i;

                bodiesOrig.apply(this, arguments);

                if(!bodies.length) {
                    return;
                }

                for (i = 0; i < bodies.length; i++) {
                    var body = bodies[i];

                    if (!body.render.visible)
                        continue;

                    //continue;

                    c.beginPath();

                    //console.log(body.render.fillStyle == "white");
                    if(body.render.fillStyle == "white") {
                        c.strokeStyle = 'black';
                        c.setLineDash([4]);
                    }

                    if (body.circleRadius) {
                        c.arc(body.position.x, body.position.y, body.circleRadius, 0, 2 * Math.PI);
                        c.stroke();
                    }
                    else {
                        c.moveTo(body.vertices[0].x, body.vertices[0].y);
                        for (var j = 1; j < body.vertices.length; j++) {
                            c.lineTo(body.vertices[j].x, body.vertices[j].y);
                        }
                        c.closePath();
                        c.stroke();
                    }

                    c.setLineDash([]);
                }
            };

            // add ground to the world

            var ground = Bodies.rectangle(400, 400, 810, 2, { isStatic: true, render: {fillStyle: 'black', strokeStyle: 'black' }});
            var composite = World.add(engine.world, [ground]);
            //console.log(world);
            world.setWorld(composite);

            // run the engine
            var runner = Engine.run(engine);
        },
        controller: function()
        {

        }
    };
});
