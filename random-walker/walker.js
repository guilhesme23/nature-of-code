class Walker {
    constructor() {
        this.x = width/2;
        this.y = height/2;
    }

    display() {
        stroke(255, 0, 255)
        point(this.x, this.y)
    }

    step() {
        let choiceX = random(-1,1)
        let choiceY = random(-1, 1)

        this.x += choiceX
        this.y += choiceY
    }
}