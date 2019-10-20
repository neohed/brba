const degreesToRadiansRatio = Math.PI / 180;
const toRadians = degrees => degrees * degreesToRadiansRatio;
const randomInRangeInt = (from, to) => Math.floor(randomInRangeFloat(from, to));
const randomInRangeFloat = (from, to) => Math.random() * (to - from) + from;
const generateSineWaveValues = (step) => {
    const v = [];

    for(let i = 0; i<=180; i += step) {
        v.push(Math.sin(toRadians(i)));
    }

    return v
};

export {
    toRadians,
    randomInRangeInt,
    randomInRangeFloat,
    generateSineWaveValues
}
