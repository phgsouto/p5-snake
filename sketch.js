let TS = 25;
let snake = undefined;
let GAME_VELOCITY = 0;
let food = undefined;

function setup() {
  createCanvas(500, 500);
  GAME_VELOCITY = 5;
  snake = new Snake();
}

function draw() {
  frameRate(GAME_VELOCITY);
  background(51);
  //draw_grid();  
  snake.update();
  snake.show();
  plant_food();

  if (food.x === snake.pos.x && food.y === snake.pos.y) {
    snake.eat();
    GAME_VELOCITY++;
  }

}

function plant_food() {
  if (food === undefined) {
    food = createVector(floor(random(floor(width / TS))), floor(random(floor(height / TS))));
  }
  stroke(51);
  fill(255, 0, 0);
  rect(food.x * TS, food.y * TS, TS, TS);
}

function keyPressed() {
  switch (keyCode) {
    case UP_ARROW:
      if (!(snake.dir.x === 0 && snake.dir.y === 1)) {
        snake.dir = createVector(0, -1);
      }
      break;
    case DOWN_ARROW:
      if (!(snake.dir.x === 0 && snake.dir.y === -1)) {
        snake.dir = createVector(0, 1);
      }
      break;
    case LEFT_ARROW:
      if (!(snake.dir.x === 1 && snake.dir.y === 0)) {
        snake.dir = createVector(-1, 0);
      }
      break;
    case RIGHT_ARROW:
      if (!(snake.dir.x === -1 && snake.dir.y === 0)) {
        snake.dir = createVector(1, 0);
      }
      break;
  }
}

function draw_grid() {
  stroke(127);
  noFill();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      rect(x * TS, y * TS, TS, TS);
    }
  }
}