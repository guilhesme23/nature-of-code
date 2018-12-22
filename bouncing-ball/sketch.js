let ball
function setup() {
    createCanvas(600, 400)
    ball = new Ball(width/2, height/2)
}

function draw() {
    background(55)
    ball.update()
    ball.checkWalls()
    ball.show()
}