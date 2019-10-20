class Wind {
    sineValues;
    v_direction;
    magnitude;
    rate;

    i;
    constructor(sineValues, v_direction, magnitude, rate, start = 0) {
        this.sineValues = sineValues;
        this.v_direction = v_direction;
        this.magnitude = magnitude;
        this.rate = rate;
        this.i = start % sineValues.length
    }

    getVector = () => {
        const w = this.v_direction.multiply(this.sineValues[Math.floor(this.i)] * this.magnitude);

        this.i += this.rate;

        if (this.i >= this.sineValues.length) {
            this.i = this.i % this.sineValues.length;
        }
        return w;
    }
}

export {
    Wind
}
