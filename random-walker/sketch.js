let walker;
function setup() {
    createCanvas(600, 400)
    walker = new Walker()
    background(55)
}

function draw() {
    walker.display()
    walker.step()
}