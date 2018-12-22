class Walker {
    constructor() {
        this.x = width/2;
        this.y = height/2;
        this.tx = 0
        this.ty = 10000
    }

    display() {
        stroke(255, 0, 255)
        point(this.x, this.y)
    }

    step() {
        this.x = map(noise(this.tx), 0, 1, 0, width);
        this.y = map(noise(this.ty), 0, 1, 0, height);

        this.tx += 0.01;
        this.ty += 0.01;
    }

    modStep()  {
        let choice = random(1)

        if (choice <= 0.2) {
            this.y++
        } else if (choice < 0.4) {
            this.y--
        } else if (choice < 0.6) {
            this.x--
        } else {
            this.x++
        }
    }
}