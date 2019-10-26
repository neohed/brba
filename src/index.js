import {Vector} from './js/Vector';
import {ParticleSystem} from "./js/ParticleSystem";
import {ColorRGB} from "./js/ColorRGB";
import {generateSineWaveValues} from './js/utility'
import {Wind} from "./js/Wind";
import {curve} from './js/lib/curve_func'
import {BrBa} from './js/BrBa'
import './css/brba.css'

// Globals
const textInput = document.getElementById('textInput');
const output = document.getElementById('output');
const c = document.getElementById('surface');
const ctx = c.getContext('2d');
const canvasLeft = 0, canvasTop = 0;
let canvasRight, canvasBottom;
const bb = new BrBa();

let particleSystem;
const smokeColor = new ColorRGB('#E0D85C'); //F2E98A
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
    ctx.lineWidth = Math.floor(12 * age) + 6;
    ctx.strokeStyle = smokeColor.interpolate(backgroundColor, age).toHex();
    ctx.stroke()
}

function createSystem() {
    particleSystem = new ParticleSystem(
        195,
        .3,
        new Vector(canvasRight + 70, canvasBottom * .67),
        260,
        2,
        .009,
        .01,
        createEffects(),
        14,
        .14,
        () => null, // /dev/null the particles, they're only "scaffolding"
        renderCurve
    )
}

function animate() {
    window.requestAnimationFrame(animate);

    ctx.clearRect(canvasLeft, canvasTop, canvasRight - canvasLeft, canvasBottom - canvasTop);

    particleSystem.simulate();
    particleSystem.render()
}

function getWindowSize() {
    const {innerWidth, innerHeight} = window;

    return [innerWidth, innerHeight]
}

function resizeCanvas() {
    const [width, height] = getWindowSize();
    c.width = width;
    c.height = height;
    [canvasRight, canvasBottom] = getWindowSize();
    output.style.left = (canvasRight - 180) / 2 + 'px';
    output.style.top = canvasBottom / 2 - 8 + 'px';
    textInput.style.left = (canvasRight - 180) / 2 + 'px';
    textInput.style.top = canvasBottom - 32 + 'px'
}

function onResize() {
    resizeCanvas();
    createSystem()
}

function init() {
    resizeCanvas();
    createSystem();
    window.requestAnimationFrame(animate)
}

window.addEventListener('resize', onResize);

$(function() {
    init();
    //const template = $.templates("#elementTemplate");

    $('#textInput').keyup(function({target}) {
        //$('#output').html('');
        const input = target.value;
        const parts = bb.breakBad(input);

        parts.map(part => {
            if (typeof part === 'string') {
                $('#output').appendTo('<span>' + part + '</span>');
            } else {
                /*
                const htmlOutput = template.render(part);
                $('#output').appendTo(htmlOutput)

                 */
                //console.log(part)
            }
        });
    })
});
