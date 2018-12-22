class Ball {
    constructor(x,y) {
        this.pos = createVector(x,y)
        this.vel = createVector()
        this.acc = createVector(-0.003,0.0107)
        this.r = 16
    }

    update() {
        this.vel.add(this.acc)
        this.vel.limit(15)
        this.pos.add(this.vel)
    }

    show() {
        noStroke()
        fill(255,0,255,100)
        ellipse(this.pos.x, this.pos.y, this.r * 2)
    }

    checkWalls() {
        if (this.pos.x > width || this.pos.x < 0) {
            this.vel.x = this.vel.x * -1
            this.acc.x = this.acc.x * -1
        }
        if (this.pos.y > height || this.pos.y < 0) {
            this.vel.y = this.vel.y * -1
            this.acc.y = this.acc.y * -1
        }
    }
}