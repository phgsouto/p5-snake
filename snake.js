class Snake {
    constructor() {
        this.pos_x = 0;
        this.pos_y = 0;
        this.dir_x = 1;
        this.dir_y = 0;
        this.initial_size = 3;
        this.trail = [];
        for (let i = 0; i < this.initial_size; i++) {
            this.trail.push([this.pos_x, this.pos_y]);
        }
    }

    update() {
        this.pos_x += this.dir_x;
        this.pos_y += this.dir_y;

        if (this.pos_x * TS > width - TS) {
            this.pos_x = 0;
        }
        if (this.pos_x < 0) {
            this.pos_x = width - TS;
        }
        if (this.pos_y * TS > height - TS) {
            this.pos_y = 0;
        }
        if (this.pos_y < 0) {
            this.pos_y = height - TS;
        }

        this.trail.push([this.pos_x, this.pos_y]);
        this.trail.shift();
    }

    show() {
        for (let i = this.trail.length - 1; i >= 0; i--) {
            stroke(51);
            fill(0, 255, 0);
            rect(this.trail[i][0] * TS, this.trail[i][1] * TS, TS, TS);
        }
    }

    eat() {
        this.trail.push(this.trail[this.trail.length - 1]);
    }
}

if (typeof module !== 'undefined') {
    module.exports = Snake;
}