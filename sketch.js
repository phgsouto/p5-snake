let TS = 25;
let snake = undefined;
let GAME_VELOCITY = undefined;
let food = undefined;
let gameScore = 0;
let scoreBoard = undefined;

function setup() {
  createCanvas(500, 500);
  GAME_VELOCITY = 5;
  snake = new Snake();
  scoreBoard = createP("SCORE = " + gameScore);
  let refreshButton = createButton('Reset Game');
  refreshButton.mousePressed(refresh);
}

function draw() {
  frameRate(GAME_VELOCITY);
  background(51);
  snake.update();
  if (snake.dead == 1) {
    textSize(64);
    textAlign(CENTER);
    textStyle(BOLD);
    fill(255, 0, 0);
    text("YOU DIED!", width / 2, height / 2);
    frameRate(0);
  }
  snake.show();
  plant_food();

  if (food.x === snake.pos_x && food.y === snake.pos_y) {
    snake.eat();
    food = undefined;
    GAME_VELOCITY++;
    gameScore++;
    scoreBoard.html("SCORE = " + gameScore);
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
      snake.changeDirection("UP");
      break;
    case DOWN_ARROW:
      snake.changeDirection("DOWN");
      break;
    case LEFT_ARROW:
      snake.changeDirection("LEFT");
      break;
    case RIGHT_ARROW:
      snake.changeDirection("RIGHT");
      break;
  }
}

function refresh() {
  document.location.reload(false);
}