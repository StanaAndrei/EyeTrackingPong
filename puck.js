const PUCK_RADIUS = 30, XYSPEED = 10;
const deltaX = 0.27, deltaY = 1.5;//deltas are used to fix a bug
class Puck {
    constructor() {
        this.reset();
        angleMode(RADIANS);
    }
    updateVelocity() {
        this.xVelocity *= -1.025;
        //this.yVelocity *= 1.05;
    }
    reset() {
        this.x = width / 2;
        this.y = height / 2;
        
        let angle = Math.random(-PI / 4, PI / 4);
        this.xVelocity = XYSPEED * Math.cos(angle);
        this.yVelocity = XYSPEED * Math.sin(angle);
        if (Math.random(1) < 0.5) {
            this.xVelocity *= -1;
        }
        if (Math.random(1) < 0.5) {
            this.yVelocity *= -1;
        }        
    }
    checkWallCollision() {
        if (0 >= this.y || this.y >= height) {
            this.yVelocity *= -1;
        }
    }
    checkLeftCollision() {
        let collided = true;
        if (paddle1.y > this.y + PUCK_RADIUS * deltaY) {
            return;
        }
        collided = collided && (this.x - PUCK_RADIUS * deltaX <= paddle1.x + PADDLE_WIDTH && 1);
        collided = collided && (this.y + PUCK_RADIUS * deltaY > paddle1.y && this.y + PUCK_RADIUS * deltaY < paddle1.y + PADDLE_HEIGHT);
        if (collided) {
            if (this.xVelocity > 0) {
                return;
            }
            this.updateVelocity();
        }
    }
    checkRightCollision() {
        let collided = true;
        collided = collided && (this.x + PUCK_RADIUS * deltaX >= paddle2.x && 1);
        collided = collided && (this.y + PUCK_RADIUS * deltaY > paddle2.y && this.y + PUCK_RADIUS * deltaY < paddle2.y + PADDLE_HEIGHT);
        if (collided) {
            if (this.xVelocity < 0) {
                return;
            }
            this.updateVelocity();
        }
    }
    update() {
        this.x += this.xVelocity;
        this.y += this.yVelocity;
    }
    draw() {
        fill(0, 0, 0);
        circle(this.x, this.y, PUCK_RADIUS);
    }
    checkWinner() {
        let player1Won = Boolean(this.x > width);
        let player2Won = Boolean(this.x < 0);
        if (player1Won) {
            player1Score++;
        }
        if (player2Won) {
            player2Score++;
        }
        if (player1Won || player2Won) {
            this.reset();
        }
    }//*/
}

