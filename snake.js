class Snake {
    constructor() {
        this.pos_x = 0;
        this.pos_y = 0;
        this.dir_x = 1;
        this.dir_y = 0;
        this.initial_size = 3;
        this.trail = [];
        this.dead = 0;
        for (let i = 0; i < this.initial_size; i++) {
            this.trail.push([this.pos_x, this.pos_y]);
        }
    }

    update() {
        this.pos_x += this.dir_x;
        this.pos_y += this.dir_y;

        if (this.pos_x * TS > width - TS) {
            this.pos_x = 0;
        } else if (this.pos_x < 0) {
            this.pos_x = (width - TS) / TS;
        } else if (this.pos_y * TS > height - TS) {
            this.pos_y = 0;
        } else if (this.pos_y < 0) {
            this.pos_y = (height - TS) / TS;
        }

        for (let i = this.trail.length - 1; i >= 0; i--) {
            if (this.trail[i][0] === this.pos_x && this.trail[i][1] === this.pos_y) {
                console.warn('You died');
                this.dead = 1;
            }
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

    currentDirection() {
        if (this.dir_x === 0 && this.dir_x === 0) return "STATIONARY";
        if (this.dir_x === 1 && this.dir_y === 0) return "RIGHT";
        if (this.dir_x === -1 && this.dir_y === 0) return "LEFT";
        if (this.dir_x === 0 && this.dir_y === 1) return "DOWN";
        if (this.dir_x === 0 && this.dir_y === -1) return "UP";

        return "INVALID";
    } // currentDirection()

    changeDirection(direction) {
        switch (direction) {
            case "RIGHT":
                if (this.currentDirection() === "LEFT") {
                    break;
                } else {
                    this.dir_x = 1;
                    this.dir_y = 0;
                }
                break;

            case "LEFT":
                if (this.currentDirection() === "RIGHT") {
                    break;
                } else {
                    this.dir_x = -1;
                    this.dir_y = 0;
                }
                break;

            case "UP":
                if (this.currentDirection() === "DOWN") {
                    break;
                } else {
                    this.dir_x = 0;
                    this.dir_y = -1;
                }
                break;

            case "DOWN":
                if (this.currentDirection() === "UP") {
                    break;
                } else {
                    this.dir_x = 0;
                    this.dir_y = 1;
                }
            default:
                break;
        }
    } // changeDirection()


} // class Snake()

if (typeof module !== 'undefined') {
    module.exports = Snake;
}
