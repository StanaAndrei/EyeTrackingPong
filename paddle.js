const PADDLE_WIDTH = 10, PADDLE_HEIGHT = 130, SPEED = 5;
class Paddle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        //rectMode(CENTER);
    }
    update(delta) {
        this.y += delta * SPEED;
        this.y = constrain(this.y, PADDLE_HEIGHT / 2 - 20/*to solve top colision*/, height - PADDLE_HEIGHT / 2);
    }
    draw() {
        //console.log(this.y);
        fill(220);
        rectMode(CENTER);
        rect(this.x, this.y, PADDLE_WIDTH, PADDLE_HEIGHT)
    }
}