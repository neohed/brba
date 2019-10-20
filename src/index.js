import {twoPi} from './js/constants'
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
const noColours = 30;
let sineValues = [];
const effects = [];

function createEffects() {
    sineValues = generateSineWaveValues(2);
    effects.push(new Wind(sineValues, new Vector(1, 0), 90, 1));
    effects.push(new Wind(sineValues, new Vector(-.3, -.3), 70, 0.6, 30));
}

const smokeParticleName = 'cSmokeParticle';

function createSmokeParticles(radius) {
    const x = radius;
    const y = radius;
    const smokeColor = new ColorRGB('#E0D85C');
    const backgroundColor = new ColorRGB('#1B2F15');
    const backgroundColorRatioStart = .65;
    const backgroundColorRatioStop = .95;
    const innerRadius = 0;

    for (let i = 0; i < noColours; i++) {
        const color = smokeColor.interpolate(backgroundColor, i / noColours * backgroundColorRatioStart);
        const particleName = smokeParticleName + i;

        c[particleName] = document.createElement('canvas');
        c[particleName].width = x * 2;
        c[particleName].height = y * 2;

        const ctxSmokeParticle = c[particleName].getContext('2d');
        const gradient = ctxSmokeParticle.createRadialGradient(x, y, innerRadius, x, y, radius);
        gradient.addColorStop(0, color.toHex());
        const newBackground = color.interpolate(backgroundColor, backgroundColorRatioStop);
        gradient.addColorStop(1, newBackground.toHex()); // background color

        ctxSmokeParticle.arc(x, y, radius, 0, twoPi);
        ctxSmokeParticle.fillStyle = gradient;
        ctxSmokeParticle.fill();
    }
}

function render(x, y, age) {
    const particleIndex = Math.floor(noColours * age);
    ctx.drawImage(
        c[smokeParticleName + particleIndex],
        Math.floor(x),
        Math.floor(y)
    );
}

function renderCurve(points) {
    ctx.beginPath();
    const splines = curve(ctx, points, 0.5, 25, true);
    ctx.moveTo(splines[0], splines[1]);
    for (let i = 2; i < splines.length; i += 2) {
        const x = Math.floor(splines[i]);
        const y = Math.floor(splines[i + 1]);
        ctx.lineTo(x, y)
    }
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#e0d85c';
    ctx.stroke()
}

function createSystem() {
    particleSystem = new ParticleSystem(
        270,
        .25,
        new Vector(canvasRight / 2, canvasBottom),
        200,
        4,
        .02,
        effects,
        12,
        render,
        renderCurve
    );
}

/*
function outOfBounds(v_position) {
    const {x, y} = v_position;

    return x < 0 || y < 0 || x > canvasRight || y > canvasBottom
}
*/

function animate() {
    window.requestAnimationFrame(animate);

    ctx.clearRect(canvasLeft, canvasTop, canvasRight - canvasLeft, canvasBottom - canvasTop);

    particleSystem.simulate();
    particleSystem.render();
}

function init() {
    createSmokeParticles(8);
    createEffects();
    createSystem();
    animate();
}

if (window.addEventListener) {
    window.addEventListener('load', init)
} else {
    window.attachEvent('onload', init)
}
