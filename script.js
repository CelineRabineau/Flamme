//Marche sur p5.js ;)

let flowers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
  for (let i = 0; i < 60; i++) {
    flowers.push(new Flower(random(width), height));
  }
  background(60, 30, 100); 
  
}

function draw() {
  background(60, 30, 100, 5); 
  for (let flower of flowers) {
    flower.update();
    flower.display();
  }
}

class Flower {
  constructor(x, y) {
    this.originX = x;
    this.originY = y;
    this.angle = random(TWO_PI);
    this.r = 0;
    this.life = random(300, 1000);
    this.age = 0;
    this.size = random(20, 40);
    this.speed = random(0.01, 0.03);
    this.hue = random(100, 140); 
    this.offset = random(1000);
  }

  update() {
    this.age++;
    this.r = map(sin(this.age * this.speed), -1, 1, 0, this.size);
    this.angle += random(-0.02, 0.02);
    if (this.age > this.life) {
      this.age = 0;
      this.r = 0;
      this.originX = random(width);
      this.size = random(20, 40);
      this.speed = random(0.01, 0.03);
      this.hue = random(100, 140);
    }
  }

  display() {
    push();
    translate(this.originX, this.originY);
    for (let i = 0; i < 6; i++) {
      let a = this.angle + TWO_PI * i / 6;
      let x = cos(a) * this.r;
      let y = -this.age * 0.5 + sin(a * 2 + frameCount * 0.05) * 5;
      fill(this.hue, 80, 90, 80);
      ellipse(x, y, this.r * 0.3);
    }
    pop();
  }
}
