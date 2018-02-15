let TS = 25;
let snake = undefined;
let GAME_VELOCITY = undefined;
let food = undefined;

function setup() {
  createCanvas(500, 500);
  GAME_VELOCITY = 5;
  snake = new Snake();
}

function draw() {
  frameRate(GAME_VELOCITY);
  background(51);
  snake.update();
  snake.show();
  plant_food();

  if (food.x === snake.pos_x && food.y === snake.pos_y) {
    snake.eat();
    food = undefined;
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
      if (!(snake.dir_x === 0 && snake.dir_y === 1)) {
        snake.dir_x = 0;
        snake.dir_y = -1;
      }
      break;
    case DOWN_ARROW:
      if (!(snake.dir_x === 0 && snake.dir_y === -1)) {
        snake.dir_x = 0;
        snake.dir_y = 1;
      }
      break;
    case LEFT_ARROW:
      if (!(snake.dir_x === 1 && snake.dir_y === 0)) {
        snake.dir_x = -1;
        snake.dir_y = 0;
      }
      break;
    case RIGHT_ARROW:
      if (!(snake.dir_x === -1 && snake.dir_y === 0)) {
        snake.dir_x = 1;
        snake.dir_y = 0;
      }
      break;
  }
}
