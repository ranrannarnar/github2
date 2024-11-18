let myCars = []; 
let totalnum = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i <totalnum; i++){
  myCars[i] = new Car(color(random(255),random(255),random(255)), random(width),random(height),1, random(360));
}//assign
}

function draw() {
  background(220);
  for (let j = 0; j <myCars.length; j ++){
  myCars[j].drive();
  myCars[j].display();
  myCars[j].flip();
  }
}