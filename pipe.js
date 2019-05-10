class Pipe {
    constructor() {
        this.random = (random(-300, 300));
        this.width = 100;
        this.gap = 100;
        this.height = ((height / 2) - (this.gap) - this.random);
        this.x = width;
        this.y = (height / 2) - this.random;
    }
    show() {
        fill(0);
        rect(this.x, this.y+this.gap, this.width, height);
        fill(0);
        rect(this.x, 0, this.width, this.height);
    }
    update() {
        this.x -= 5;
    }
}
