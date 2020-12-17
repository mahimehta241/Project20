var car,wall;
var speed,weight;

function setup() {
  createCanvas(1000,400);

  speed = Math.round(random(50,100));

  weight = Math.round(random(500,1500));

  deformation = Math.round(0.5*weight*speed*speed/22500);

  car = createSprite(50,200,50,50);
  car.shapeColor = "grey";
  car.velocityX = speed;

  wall = createSprite(900,200,60,height/2)

  console.log("speed: ",speed);
  console.log("weight: ",weight);
}

function draw() {
  background("black");  

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed* speed/22500;
    
    if(deformation > 180)
    {
      car.shapeColor = "red";
    }

    if(deformation < 180 && deformation > 100)
    {
      car.shapeColor = "yellow";
    }

    if(deformation < 100)
    {
      car.shapeColor = "green";
    }
  }

  drawSprites();
}