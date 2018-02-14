class Snake {
    constructor() {
        this.pos = createVector(0, 0);
        this.dir = createVector(1, 0);
        this.color = color(0, 255, 0);
        this.initial_size = 3;
        this.trail = [];
        for (let i = 0; i < this.initial_size; i++) {
            this.trail.push(this.pos.copy());
        }
    }

    update() {
        this.pos.add(this.dir);

        if (this.pos.x * TS > width - TS) {
            this.pos.x = 0;
        }
        if (this.pos.x < 0) {
            this.pos.x = width - TS;
        }
        if (this.pos.y * TS > height - TS) {
            this.pos.y = 0;
        }
        if (this.pos.y < 0) {
            this.pos.y = height - TS;
        }

        this.trail.push(this.pos.copy());
        this.trail.shift();
    }

    show() {
        for (let i = this.trail.length - 1; i >= 0; i--) {
            stroke(51);
            fill(0, 255, 0);
            rect(this.trail[i].x * TS, this.trail[i].y * TS, TS, TS);
        }
    }

    eat() {
        this.trail.push(food.copy());
        food = undefined;
    }
}