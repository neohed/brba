class Vector {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    multiply = (multiplier) => new Vector(this.x * multiplier, this.y * multiplier);
    multiplyTo = (multiplier) => {
        this.x *= multiplier;
        this.y *= multiplier;
    };
    addTo = (other) => {
        this.x += other.x;
        this.y += other.y;
    };
    length = () => Math.sqrt(this.x * this.x + this.y * this.y);
}

export {
    Vector
};
