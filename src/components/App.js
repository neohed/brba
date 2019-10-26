import React, {useState, useRef, useEffect, useLayoutEffect} from 'react';
import useEvent from './useEvent'
import getWindowSize from './getWindowSize'
import createSystem from '../js/smokeSystem'

let particleSystem;

const App = () => {
    const [screenSize, setScreenSize] = useState([1362, 600]);
    //const [particleSystem, setParticleSystem] = useState(null);
    const canvasRef = useRef(null);
    const resizeCanvas = () => setScreenSize(getWindowSize());

    useLayoutEffect(() => {
        resizeCanvas();
    }, []);

    useEffect(() => {
        if (canvasRef.current === null) {
            console.log('null ref'); return
        }
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const [width, height] = screenSize;
        //setParticleSystem(createSystem(ctx, width, height));
        particleSystem = createSystem(ctx, width, height);
        window.requestAnimationFrame(animate(ctx))
    }, [canvasRef]);

    useEvent('resize', () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        resizeCanvas();
        const [width, height] = screenSize;
        //setParticleSystem(createSystem(ctx, width, height));
        particleSystem = createSystem(ctx, width, height);
    });

    const animate = (ctx) => () => {
        window.requestAnimationFrame(animate(ctx));
        ctx.clearRect(0, 0, width, height);
        particleSystem.simulate();
        particleSystem.render()
    };

    const [width, height] = screenSize;
    const canvasStyle = {
        width,
        height
    };
    const outputStyle = {
        left: (width - 180) / 2 + 'px',
        top: height / 2 - 8 + 'px'
    };
    const textInputStyle = {
        left: (width - 180) / 2 + 'px',
        top: height - 32 + 'px'
    };

    return (
        <div>
            <input id="textInput" type="text" style={textInputStyle} />
            <div id="output" style={outputStyle} />
            <canvas id="surface" ref={canvasRef} style={canvasStyle} />
        </div>
    )
};

export default App;
