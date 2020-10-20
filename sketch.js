// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

var engine, world;
var ground;
var canonBall, tanker;
var bolt;

var gameState = "start";


function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    canonBall = new CanonBall(200,50);

    tanker = new Tanker(CanonBall.body,{x:200, y:50});
}

function draw() {
// Remember to update the Matter Engine and set the background.
    Engine.update(engine);
    ground.display();
    bolt.display();
    canonBall.display();
    tanker.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bolt.body, {x: mouseX , y: mouseY});
    //}
}

function mouseReleased(){
    tanker.fly();
    gameState = "launched";
}

function keyReleased() {
    // Call the shoot method for the cannon.
    if(keyCode === 32 && bolt.body.speed<5){ 
        bolt.trajectory = [];
        Matter.Body.setPosition(bolt.body,{
            x:200,y:100
        })
       tanker.attach(bolt.body);
    }
}