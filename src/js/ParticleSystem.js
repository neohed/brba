import {Particle} from './Particle';
import {Spline} from "./Spline";
import {toRadians} from "./utility";
import {Vector} from "./Vector";
//todo Need to use pointers instead of id's!
class ParticleSystem {
    particles;
    maxParticles;
    direction;
    dispersion;
    ageRate;
    splineAgeRate;
    effects;
    splines;
    maxSplines;
    v_position;

    // Creation manipulation
    particlePerSecond;
    splinesPerSecond;
    particlesResidue;
    splinesResidue;
    lastSimulation;
    liveCandidates;

    constructor(
        direction,
        dispersion,
        v_position,
        maxParticles,
        particlePerSecond,
        ageRate,
        splineAgeRate,
        effects,
        maxSplines,
        splinesPerSecond,
        render,
        renderCurve
    ) {
        this.direction = toRadians(direction);
        this.dispersion = dispersion;
        this.v_position = v_position;
        this.maxParticles = maxParticles;
        this.particlePerSecond = particlePerSecond;
        this.ageRate = ageRate;
        this.splineAgeRate = splineAgeRate;
        this.effects = effects;
        this.maxSplines = maxSplines;
        this.splinesPerSecond = splinesPerSecond;

        this.particles = [];
        this.particlesResidue = 0;
        this.splinesResidue = 0;
        this.lastSimulation = Date.now();
        this.liveCandidates = [];
        this.splines = [];

        for (let i = 0; i < this.maxParticles; i++) {
            this.particles.push(new Particle(i, this, render));
        }

        for (let i = 0; i < this.maxSplines; i++) {
            this.splines.push(new Spline(i, this, renderCurve));
        }
    }

    simulate = () => {
        const now = Date.now();
        const secondsElapsed = (now - this.lastSimulation) / 1000;
        this.lastSimulation = now;

        let particlesToCreate = Math.floor(this.particlePerSecond * secondsElapsed + this.particlesResidue);
        this.particlesResidue = (this.particlePerSecond + this.particlesResidue) - particlesToCreate;

        let splinesToCreate = Math.floor(this.splinesPerSecond * secondsElapsed + this.splinesResidue);
        this.splinesResidue = (this.splinesPerSecond + this.splinesResidue) - splinesToCreate;

        this.particles.forEach(particle => {
            if (particle.isAlive()) {
                particle.simulate();
            } else if (particlesToCreate > 0) {
                particle.create();
                particlesToCreate--;
            }
        });

        this.splines.sort((a, b) => b.age - a.age).forEach(spline => {
            if (spline.isAlive()) {
                spline.simulate()
            } else if (splinesToCreate > 0 && this.liveCandidates.length >= spline.minPoints) {
                spline.create(this.liveCandidates.splice(0, spline.maxPoints));
                splinesToCreate--
            }
        });
    };

    render = () => {
        const v_sum_effects = new Vector(0, 0);
        this.effects.forEach(effect =>
            v_sum_effects.addTo(effect.getVector())
        );

        this.particles
            .forEach(particle => {
                if (particle.isAlive()) {
                    particle.render(v_sum_effects)
                }
            });

        const {x, y} = this.v_position;

        this.splines.forEach(spline => {
            if (spline.isAlive()) {
                spline.render(x, y)
            }
        });
    };

    registerLife = (id) => this.liveCandidates.push(id);
    unRegisterLife = (id) => {
        const idIndex = this.liveCandidates.indexOf(id);

        if (idIndex === -1) {
            this.splines.forEach(spline => spline.unRegisterLife(idIndex))
        } else {
            this.liveCandidates.splice(idIndex, 1)
        }
    };
    getCoords = () => {
        const {x, y} = this.v_position;

        return [x, y]
    }
}

export {
    ParticleSystem
};
