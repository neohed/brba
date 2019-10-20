class Vector {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    equals = (other) => this.x === other.x && this.y === other.y;

    assign = (other) => {
        this.x = other.x;
        this.y = other.y;
    };
    add = (other) => new Vector(this.x + other.x, this.y + other.y);
    subtract = (other) => new Vector(this.x - other.x, this.y - other.y);
    neg = () => new Vector(-this.x, -this.y);
    perpendicular = () => new Vector(-this.y, this.x);
    multiply = (multiplier) => new Vector(this.x * multiplier, this.y * multiplier);
    divide = (divisor) => new Vector(this.x / divisor, this.y / divisor);
    multiplyTo = (multiplier) => {
        this.x *= multiplier;
        this.y *= multiplier;
    };

    addTo = (other) => {
        this.x += other.x;
        this.y += other.y;
    };

    length = () => Math.sqrt(this.x * this.x + this.y * this.y); // or magnitude
    dotProduct = (other) => this.x * other.x + this.y * other.y;
    angle = () => Math.atan2(this.y, this.x) * 180 / Math.PI + 180;

    normalize = () => {
        const length = this.length();
        if (length !== 0) {
            this.x /= length;
            this.y /= length;
        }
    };

    toString = () => `Vector x: ${this.x}, y: ${this.y}`
}

export {
    Vector
};
