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
class Circle {
  constructor(radius, v, x = Math.random() * appWidth , y = Math.random() * appHeight ) {
      this.v = v;
      this.radius = radius;
      const ball = new PIXI.Graphics();
      ball.lineStyle(0); 
      ball.beginFill(0xDE3249, 1);
      ball.drawCircle( 0, 0, radius);
      ball.endFill();
      ball.pivot.x = radius/2;
      ball.pivot.y =  radius/2;
      ball.x =  x;
      ball.y =  y;
      ball.velocityx = 5;
      ball.velocityy = 5;
      app.stage.addChild(ball);
      this.ball= ball;
  }
}

class Monster extends Circle {
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
    this.ball.x += this.ball.velocityx;
    this.ball.y += this.ball.velocityy;
  }
}

let monsters=[];

for (let i = 0; i < 25; i++) {
  monsters.push(new Monster(radius,2,x ,y ));
}

let delta = 1;


app.ticker.add((delta) => {
  monsters.forEach(c => {
    c.update();
}});


