const appHeight = 600;
const appWidth = 700;
const radius = 30;
const velocity = 2;

const app = new PIXI.Application({
  width: appWidth,
  height: appHeight,
  antialias: true,
  transparent: false,
  resolution: 1,
  backgroundColor: 0xeeeeee
});

document.body.appendChild(app.view);

const stage = app.stage;



/*
const myContainer = new PIXI.Container();
myContainer.x = app.screen.width / 2;
myContainer.y = app.screen.height / 2;
myContainer.pivot.x = app.screen.width / 2;
myContainer.pivot.y = app.screen.height / 2;
*/

/*
class BALLS {
  constructor{
const ball = new PIXI.Graphics();
ball.lineStyle(0); 
ball.beginFill(0xDE3249, 1);
ball.drawCircle( 0, 0, radius);
ball.endFill();
ball.pivot.x = radius/2;
ball.pivot.y =  radius/2;
ball.x =  Math.random() * appWidth ;
ball.y =  Math.random() * appHeight ;
ball.velocityx = 2;
ball.velocityy = 2;
  }
app.stage.addChild(ball);
}

let monster=[];
for (let i = 0; i < 25; i++) {
  task(i);
}
  
function task(i) {
  setTimeout(function() {
    new BALLS;
    console.log("ball")
  }, 2000 * i);
}


app.ticker.add((delta) => {
  if (ball.y + radius >= appHeight ) {
    ball.velocityy = -ball.velocityy
    ball.y = appHeight  - radius
  }
  // top bound / ceiling
  if (ball.y - radius <= 0) {
    ball.velocityy = -ball.velocityy
    ball.y = radius
  }

  // left bound
  if (ball.x - radius <= 0) {
    ball.velocityx = -ball.velocityx
    ball.x = radius
  }
  // right bound
  if (ball.x + radius >= appWidth) {
    ball.velocityx= -ball.velocityx
    ball.x = appWidth - radius
  }
  ball.x += ball.velocityx;
  ball.y += ball.velocityy;
});
*/
let v;
let x;
let y;
let gravity = 0;
let ballSpeed = 10;
class Circle {
  constructor(radius, x = Math.random() * appWidth , y = Math.random() * appHeight, colour ) {
      this.radius = radius;
      const ball = new PIXI.Graphics();
      ball.lineStyle(0); 
      ball.beginFill(colour, 1);
      ball.drawCircle( 0, 0, radius);
      ball.endFill();
      ball.pivot.x = radius/2;
      ball.pivot.y =  radius/2;
      ball.x =  x;
      ball.y =  y;
      ball.velocityx = Math.random() < 0.5 ? -ballSpeed  : ballSpeed;
      ball.velocityy = Math.random() < 0.5 ? -ballSpeed  : ballSpeed;
      app.stage.addChild(ball);
      this.ball= ball;
  }
}

class CIRCLES extends Circle {
  update() {
    if (this.ball.y + radius >= appHeight ) {
      this.ball.velocityy = -this.ball.velocityy
      this.ball.y = appHeight  - radius
    }
    // top bound / ceiling
    if (this.ball.y - radius <= 0) {
      this.ball.velocityy = -this.ball.velocityy
      this.ball.y = radius
    }
  
    // left bound
    if (this.ball.x - radius <= 0) {
      this.ball.velocityx = -this.ball.velocityx
      this.ball.x = radius
    }
    // right bound
    if (this.ball.x + radius >= appWidth) {
      this.ball.velocityx= -this.ball.velocityx
      this.ball.x = appWidth - radius
    }
    this.ball.velocityy += gravity;
    this.ball.x += this.ball.velocityx;
    this.ball.y += this.ball.velocityy;
  }
}

let Circlearray=[];

for (let i = 0; i < 25; i++) {
  Circlearray.push(new CIRCLES (radius,x ,y, 0xDE3249));
}


let delta = 1;
app.ticker.add((delta) => {
  Circlearray.forEach(c => {
    c.update();
}});


/* Buttons*/

const textureButton = PIXI.Texture.from('images/bluebut.png');
const textureButtonDown = PIXI.Texture.from('images/redbut.png');
const buttons = [];


const buttonPositions = [
    175, 75,
    250, 75,
    325, 75,
]

for (let i = 0; i < 3; i++) {
  const button = new PIXI.Sprite(textureButton);

  button.anchor.set(0.5);
  button.x = buttonPositions[i * 2];
  button.y = buttonPositions[i * 2 + 1];

  // make the button interactive...
  button.interactive = true;
  button.buttonMode = true;

  button
  // add it to the stage
  app.stage.addChild(button);

  // add button to array
  buttons.push(button);
}

buttons[0].scale.set(0.1);
buttons[1].scale.set(0.1);
buttons[2].scale.set(0.1);

buttons[0].on('mousedown', button0D;)
buttons[0].on('mouseup', button0U;)

function button0D(){
  gravity = 1.2;
  this.texture = textureButtonDown;
  this.alpha = 1;
  this.isdown = true;
}

function button0U(){
  gravity = 0;
  this.texture = textureButton;
  this.isdown = false;
}

buttons[1].on('mousedown', button1D;)
buttons[1].on('mouseup', button1U;)

const randomColor = Math.floor(Math.random()*16777215).toString(16);

function button1D(){
  Circlearray.push(new CIRCLES (radius,x ,y,0x0000FF))
  this.texture = textureButtonDown;
  this.alpha = 1;
  this.isdown = true;
}

function button1U(){
  this.texture = textureButton;
  this.isdown = false;
}
