var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var appHeight = 600;
var appWidth = 700;
var radius = 30;
var velocity = 2;
var app = new PIXI.Application({
    width: appWidth,
    height: appHeight,
    antialias: true,
    transparent: false,
    resolution: 1,
    backgroundColor: 0xeeeeee
});
document.body.appendChild(app.view);
var stage = app.stage;
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
var v;
var x;
var y;
var Circle = /** @class */ (function () {
    function Circle(radius, v, x, y) {
        if (x === void 0) { x = Math.random() * appWidth; }
        if (y === void 0) { y = Math.random() * appHeight; }
        this.v = v;
        this.radius = radius;
        var ball = new PIXI.Graphics();
        ball.lineStyle(0);
        ball.beginFill(0xDE3249, 1);
        ball.drawCircle(0, 0, radius);
        ball.endFill();
        ball.pivot.x = radius / 2;
        ball.pivot.y = radius / 2;
        ball.x = x;
        ball.y = y;
        ball.velocityx = Math.random() < 0.5 ? -10 : 10;
        ball.velocityy = Math.random() < 0.5 ? -10 : 10;
        app.stage.addChild(ball);
        this.ball = ball;
    }
    return Circle;
}());
var CIRCLES = /** @class */ (function (_super) {
    __extends(CIRCLES, _super);
    function CIRCLES() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CIRCLES.prototype.update = function () {
        if (this.ball.y + radius >= appHeight) {
            this.ball.velocityy = -this.ball.velocityy;
            this.ball.y = appHeight - radius;
        }
        // top bound / ceiling
        if (this.ball.y - radius <= 0) {
            this.ball.velocityy = -this.ball.velocityy;
            this.ball.y = radius;
        }
        // left bound
        if (this.ball.x - radius <= 0) {
            this.ball.velocityx = -this.ball.velocityx;
            this.ball.x = radius;
        }
        // right bound
        if (this.ball.x + radius >= appWidth) {
            this.ball.velocityx = -this.ball.velocityx;
            this.ball.x = appWidth - radius;
        }
        this.ball.x += this.ball.velocityx;
        this.ball.y += this.ball.velocityy;
    };
    return CIRCLES;
}(Circle));
var Circlearray = [];
for (var i = 0; i < 25; i++) {
    Circlearray.push(new CIRCLES(radius, 2, x, y));
}
var delta = 1;
app.ticker.add(function (delta) {
    Circlearray.forEach(function (c) {
        c.update();
    });
});
yell = Math.random() < 0.5 ? -10 : 10;
xell = Math.random() < 0.5 ? -10 : 10;
console.log(yell);
console.log(xell);
