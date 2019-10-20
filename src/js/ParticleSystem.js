import {Particle} from './Particle';
import {toRadians} from "./utility";
import {Vector} from "./Vector";
import {randomInRangeInt} from './utility'

class ParticleSystem {
    particles;
    maxParticles;
    direction;
    dispersion;
    ageRate;
    effects;
    splines;
    maxSplines;

    // Vectors
    v_position;

    // Creation manipulation
    particlePerSecond;
    residue;
    lastSimulation;
    liveCandidates;
    renderCurve;

    constructor(direction, dispersion, v_position, maxParticles, particlePerSecond, ageRate, effects, maxSplines, render, renderCurve) {
        this.direction = toRadians(direction);
        this.dispersion = dispersion;
        this.v_position = v_position;
        this.maxParticles = maxParticles;
        this.particlePerSecond = particlePerSecond;
        this.ageRate = ageRate;
        this.effects = effects;
        this.maxSplines = maxSplines;
        this.renderCurve = renderCurve;

        this.particles = [];
        this.residue = 0;
        this.lastSimulation = Date.now();
        this.liveCandidates = new Set();
        this.splines = [];

        for (let i = 0; i < this.maxParticles; i++) {
            this.particles.push(new Particle(i, this, render));
        }
    }

    simulate = () => {
        const now = Date.now();
        const secondsElapsed = (now - this.lastSimulation) / 1000;
        this.lastSimulation = now;
        let particlesToCreate = Math.floor(this.particlePerSecond * secondsElapsed + this.residue);
        this.residue = (this.particlePerSecond + this.residue) - particlesToCreate;

        this.particles.forEach(particle => {
            if (particle.isAlive()) {
                particle.simulate();
            } else if (particlesToCreate > 0) {
                particle.create();
                particlesToCreate--;
            }
        })
    };

    render = () => {
        const v_sum_effects = new Vector(0, 0);
        this.effects.forEach(effect => {
            v_sum_effects.addTo(effect.getVector())
        });

        this.particles
            .forEach(particle => {
                if (particle.isAlive()) {
                    particle.render(v_sum_effects)
                }
            });

        const {x, y} = this.v_position;

        this.splines.forEach(spline => {
            const splinePoints = [];

            spline.forEach(particleId => {
                const particle = this.particles[particleId];
                if (particle.isAlive()) {
                    const [px, py] = particle.getCoords();
                    splinePoints.push(px + x, py + y)
                }
            });

            this.renderCurve(splinePoints)
        });
    };

    registerLife = (id) => {
        this.liveCandidates.add(id);

        if (this.splines.length < this.maxSplines) {
            const splineSize = randomInRangeInt(4, 8);

            if (this.liveCandidates.size >= splineSize) {
                this.splines.push([...this.liveCandidates]);
                this.liveCandidates.clear();
            }
        }
    };

    unRegisterLife = (id) => this.liveCandidates.delete(id);

    getCoords = () => {
        const {x, y} = this.v_position;

        return [x, y]
    }
}

export {
    ParticleSystem
};
