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
        let choice = floor(random(4))

        switch (choice) {
            case 0:
                this.x++
                break;
            case 1:
                this.x--
                break;
            case 2:
                this.y++
                break;
            case 3:
                this.y--
                break;
            default:
                break;
        }
    }
}