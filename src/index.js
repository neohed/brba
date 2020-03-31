import {Vector} from './js/Vector';
import {ParticleSystem} from "./js/ParticleSystem";
import {ColorRGB} from "./js/ColorRGB";
import {generateSineWaveValues} from './js/utility'
import {Wind} from "./js/Wind";
import {curve} from './js/lib/curve_func'
import {BrBa} from './js/BrBa'
import {parseKeys} from "./js/querystring";
import './css/brba.css'

// Globals
const floor = Math.floor;
const textInput = document.getElementById('textInput');
const output = document.getElementById('output');
const canvas = document.getElementById('surface');
const ctx = canvas.getContext('2d');
const canvasLeft = 0, canvasTop = 0;
let canvasRight, canvasBottom;
const brba = new BrBa();

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
    const splines = curve(ctx, points, 1, 32, true);
    ctx.moveTo(splines[0], splines[1]);
    for (let i = 2, length = splines.length; i < length; i += 2) {
        const x = floor(splines[i]);
        const y = floor(splines[i + 1]);
        ctx.lineTo(x, y)
    }
    ctx.lineWidth = floor(48 * age);// + 6;
    ctx.strokeStyle = smokeColor.interpolate(backgroundColor, age).toHex();
    ctx.className = 'deep-line';
    ctx.stroke()
}

function createSystem() {
    particleSystem = new ParticleSystem(
        195,
        .3,
        new Vector(canvasRight + 70, canvasBottom * .67),
        260,
        2,
        .006,
        .008,
        createEffects(),
        16,
        .14,
        () => null, // /dev/null the particles, they're only "scaffolding"
        renderCurve,
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

    canvasRight = canvas.width = width;
    canvasBottom = canvas.height = height;
    output.style.left = floor((canvasRight - 180) / 2) + 'px';
    output.style.top = canvasBottom / 2 - 18 + 'px';
    textInput.style.left = floor((canvasRight - 280) / 2) + 'px';
    textInput.style.top = canvasBottom - 64 + 'px'
}

function onResize() {
    resizeCanvas();
    createSystem()
}

const createTextTemplate = (text) => `
    <div class="text">
        <h1>${text}</h1>
    </div>
`;

function updateOutput(value) {
    const items = brba.breakBad(value);
    output.innerHTML = '';
    output.style.left = floor(canvasRight / 2 - (value.length * 24)) + 'px';
    items.forEach(item => {
        if (item === null) {
            output.innerHTML += '<span class="spacer" />'
        } else if (typeof item === 'string') {
            output.innerHTML += createTextTemplate(item)
        } else {
            output.innerHTML += item.getTemplate()
        }
    });
}

function init() {
    resizeCanvas();
    const urlParams = parseKeys();
    if (urlParams.has('txt')) {
        const value = urlParams.get('txt');
        textInput.value = value;
        updateOutput(value)
    }
    createSystem();
    textInput.onkeyup = ({target}) => updateOutput(target.value);
    window.requestAnimationFrame(animate)
}

window.addEventListener('resize', onResize);
window.addEventListener('load', init);
