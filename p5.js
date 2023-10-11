function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // No need for background(220) in this case, as we want to see the trails
  fill(random(255), random(255), random(255));
  noStroke();

  let circleSize = random(10, 50);
  ellipse(mouseX, mouseY, circleSize, circleSize);
}

function mouseClicked() {
  let circleSize = random(10, 100);
  let place = random(5,500);
  ellipse(place, place, circleSize, circleSize);
}

function mouseMoved() {
  let circleSize = random(10, 70);
  ellipse(mouseX, mouseY, circleSize, circleSize);
}
