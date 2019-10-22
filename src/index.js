import {Vector} from './js/Vector';
import {ParticleSystem} from "./js/ParticleSystem";
import {ColorRGB} from "./js/ColorRGB";
import {generateSineWaveValues} from './js/utility'
import {Wind} from "./js/Wind";
import {curve} from './js/lib/curve_func'

// Globals
const c = document.getElementById('surface');
const ctx = c.getContext('2d');
const canvasLeft = 0,
    canvasTop = 0,
    canvasRight = 1000,
    canvasBottom = 600;
let particleSystem;
const smokeColor = new ColorRGB('#E0D85C');
const backgroundColor = new ColorRGB('#1B2F15');

function createEffects() {
    const sineValues = generateSineWaveValues(2);
    return [
        new Wind(sineValues, new Vector(-.2, -1), 70, .33),
        new Wind(sineValues, new Vector(-1, -.5), 30, .15, 30),
        new Wind(sineValues, new Vector(-1, 1), 15, .01, 45)
    ]
}

function renderCurve(points, age) {
    ctx.beginPath();
    const splines = curve(ctx, points, 1, 30, true);
    ctx.moveTo(splines[0], splines[1]);
    for (let i = 2, length = splines.length; i < length; i += 2) {
        const x = Math.floor(splines[i]);
        const y = Math.floor(splines[i + 1]);
        ctx.lineTo(x, y)
    }
    ctx.lineWidth = Math.floor(18 * age) + 6;
    ctx.strokeStyle = smokeColor.interpolate(backgroundColor, age).toHex();
    ctx.stroke()
}

function createSystem() {
    particleSystem = new ParticleSystem(
        195,
        .3,
        new Vector(canvasRight + 70, canvasBottom * .67),
        250,
        2,
        .009,
        .01,
        createEffects(),
        12,
        .14,
        () => null, // /dev/null the particles, they're only "scaffolding"
        renderCurve
    );
}

function animate() {
    window.requestAnimationFrame(animate);

    ctx.clearRect(canvasLeft, canvasTop, canvasRight - canvasLeft, canvasBottom - canvasTop);

    particleSystem.simulate();
    particleSystem.render();
}

function init() {
    createSystem();
    window.requestAnimationFrame(animate);
}

if (window.addEventListener) {
    window.addEventListener('load', init)
} else {
    window.attachEvent('onload', init)
}
