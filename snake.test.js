const Snake = require('./snake');

test('[CONSTRUCTOR] Object created by Snake class must be instance of Snake', () => {
    let s = new Snake();
    expect(s).toBeInstanceOf(Snake);
});

test('[CONSTRUCTOR] Position parameters must be integers', () => {
    let s = new Snake();
    let tst = (typeof s.pos_x === 'number' &&
        parseInt(s.pos_x) === s.pos_x &&
        typeof s.pos_y === 'number' &&
        parseInt(s.pos_y) === s.pos_y);
    expect(tst).toBeTruthy();
});

test('[CONSTRUCTOR] Position parameters cannot be less than 0', () => {
    let s = new Snake();
    let tst = (s.pos_x >= 0 && s.pos_y >= 0);
    expect(tst).toBeTruthy();
});

test('[CONSTRUCTOR] Direction parameters must be integers', () => {
    let s = new Snake();
    let tst = (typeof s.dir_x === 'number' &&
        parseInt(s.dir_x) === s.dir_x &&
        typeof s.dir_y === 'number' &&
        parseInt(s.dir_y) === s.dir_y);
    expect(tst).toBeTruthy();
});

test('[CONSTRUCTOR] Position parameters must be between -1 and 1', () => {
    let s = new Snake();
    let tst = (-1 >= s.dir_x <= 1 && -1 >= s.dir_y <= 1);
    expect(tst).toBeTruthy();
});

test('[CONSTRUCTOR] Initial size must be an integer', () => {
    let s = new Snake();
    let tst = (typeof s.initial_size === 'number' &&
        parseInt(s.initial_size) === s.initial_size);
    expect(tst).toBeTruthy();
});

test('[CONSTRUCTOR] Initial size must be greater than 0', () => {
    let s = new Snake();
    expect(s.initial_size > 0).toBeTruthy();
});

test('[CONSTRUCTOR] Trail must be an Array', () => {
    let s = new Snake();
    expect(s.trail).toBeInstanceOf(Array);
});

test('[CONSTRUCTOR] Trail length must be equal Initial size', () => {
    let s = new Snake();
    expect(s.trail.length).toBe(s.initial_size);
});