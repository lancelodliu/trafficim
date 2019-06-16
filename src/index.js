import Matter from "matter-js";
import world from "./constants/world";
import { generateAllCars } from "./bodies/car";

// module aliases
var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
  element: document.body,
  engine: engine
});

// create two boxes and a ground

// add all of the bodies to the world
engine.world.gravity.scale = 0;
World.add(
  engine.world,
  generateAllCars(
    5,
    { min: world.X, max: world.X + world.WIDTH },
    { min: world.Y, max: world.Y + world.HEIGHT }
  )
);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
