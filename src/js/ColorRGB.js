class ColorRGB {
    r;
    g;
    b;
    a;
    constructor(red = 0, green = 0, blue = 0, alpha = 1) {
        const arg0 = arguments[0];

        if (arguments.length === 1 && typeof arg0 === 'string') {
            const hex = arg0[0] === '#'
                ? arg0.slice(1)
                : arg0;
            const parseHex = n => parseInt(n, 16);

            this.r = parseHex(hex.substring(0, 2));
            this.g = parseHex(hex.substring(2, 4));
            this.b = parseHex(hex.substring(4, 6));
            this.a = 1;
        } else {
            this.r = red;
            this.g = green;
            this.b = blue;
            this.a = alpha;
        }
    }

    interpolate = (endColor, ratio) => new ColorRGB(
        this.r + (endColor.r - this.r) * ratio,
        this.g + (endColor.g - this.g) * ratio,
        this.b + (endColor.b - this.b) * ratio,
        this.a + (endColor.a - this.a) * ratio
    );

    brightness = () => .2126 * this.r + .7152 * this.g + .0722 * this.b;
    toHex = () => '#' + ('00000' + (this.b | (this.g << 8) | (this.r << 16)).toString(16)).slice(-6);
}

export {
    ColorRGB
};
