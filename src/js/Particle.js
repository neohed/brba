import {Vector} from './Vector';
import {randomInRangeFloat} from "./utility";

class Particle {
    // Vectors
    v_position;
    v_velocity;
    particleSystem;

    // Scalar props
    age;
    mass;
    id;

    doRender;
    constructor(id, particleSystem, render) {
        this.id = id;
        this.particleSystem = particleSystem;
        this.doRender = render;

        this.age = 1; // Dead
    }

    create = () => {
        this.v_position = new Vector(0,Math.random() * 300 - 150);
        this.age = 0;
        this.particleSystem.registerLife(1);
        this.mass = Math.random();

        const direction = this.particleSystem.direction;
        const dispersion = 0.25;
        const randomAngle = (1 - (Math.random() * 2)) * Math.PI;
        const angle = randomAngle * dispersion + direction;

        this.v_velocity = new Vector(
            Math.cos(angle),
            Math.sin(angle)
        );

        const speed = randomInRangeFloat(3, 9);
        this.v_velocity.multiplyTo(speed);
    };

    simulate = () => {
        this.v_position.addTo(this.v_velocity);
        this.age += this.particleSystem.ageRate;

        if (this.age >= 1) {
            this.particleSystem.unRegisterLife(1)
        }
    };

    render = (v_sumEffects) => {
        const v_scaledEffects = v_sumEffects.multiply(this.age * .3 * (1 - this.mass));
        this.v_position.addTo(v_scaledEffects);

        const [x, y] = this.particleSystem.getCoords();
        const tx = this.v_position.x + x;
        const ty = this.v_position.y + y;

        this.doRender(tx, ty, this.age)
    };

    isAlive = () => this.age < 1;

    getCoords = () => {
        const {x, y} = this.v_position;

        return [x, y]
    }
}

export {
    Particle
};
