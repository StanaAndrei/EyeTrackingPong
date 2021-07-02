var modal = document.getElementById('myModal');
let eyeY;
let paddle1, paddle2, puck;
let player1Score, player2Score;
var gazeCalibrated = false;
//------------------------------
const enablePhysics = () => {
    puck.update();
    puck.checkWallCollision();
    puck.checkLeftCollision();
    puck.checkRightCollision();
    puck.checkWinner();
}

const enableAI = () => {
    if (puck.y > paddle2.y) {
        paddle2.update(1);
    }
    if (puck.y < paddle2.y) {
        paddle2.update(-1);
    }
}

const updateScore = () => {
    let score = document.querySelector('#score');
    score.innerHTML = `<i>(you)</i>${player1Score} - ${player2Score}`;//*/
}
//-------------------------------mains
GazeCloudAPI.OnResult = GazeData => {
    eyeY = GazeData.docY
    //console.log(eyeY);
};//*/

function setup() {
    modal.style.display = 'block';
    calibrateGaze();
    let canvas = createCanvas((3 / 4) * window.innerWidth, (3 / 4) * window.innerHeight);
    canvas.position(170, 150);
    paddle1 = new Paddle(PADDLE_WIDTH, height / 2);
    paddle2 = new Paddle(width - PADDLE_WIDTH, height / 2);
    puck = new Puck();
    player1Score = player2Score = 0;
}

const UPDATEDELTA = 1.75, EYEPOSDELTA = 35;
function draw() {
    background(46, 44, 44);
    paddle1.draw();
    paddle2.draw();
    puck.draw();
    if (eyeY > paddle1.y + PADDLE_HEIGHT - EYEPOSDELTA) {
        paddle1.update(UPDATEDELTA);
    } else if (eyeY - EYEPOSDELTA < paddle1.y) {
        paddle1.update(-UPDATEDELTA);
    }
    updateScore();
    if (gazeCalibrated) {
        enablePhysics();
        enableAI();
    }
}
