
// Need a smarter algorithm for splines. They shouldn't pop in and out of existence as particles
// do. They should get "topped up" as they lose particles.

// Create "vector shadows" or offsets with some random offset-vector. Interpolate size and color.

class Spline {
    id;
    particleSystem;
    maxPoints;
    minPoints;
    points;
    doRender;
    age;

    constructor(id, particleSystem, render) {
        this.id = id;
        this.particleSystem = particleSystem;
        this.doRender = render;
        this.maxPoints = 16;
        this.minPoints = 6;
        this.points = [];
        this.age = 1;
    }

    create = (points) => {
        this.points = points;
        this.age = 0;
    };

    topUp = (id) => this.points.push(id);

    simulate = () => {
        if (this.points.length < this.minPoints) {
            this.points.length = 0;
        }

        this.age += this.particleSystem.splineAgeRate
    };

    render = (x, y) => {
        const splinePoints = [];
        this.points.forEach(particleId => {
            const particle = this.particleSystem.particles[particleId];
            if (particle.isAlive()) {
                const [px, py] = particle.getCoords();
                splinePoints.push(px + x, py + y)
            }
        });

        this.doRender(splinePoints, this.age)
    };

    unRegisterLife = (id) => {
        const idIndex = this.points.indexOf(id);

        if (idIndex > -1) {
            this.points.splice(idIndex, 1)
        }
    };

    isFull = () => this.points.length === this.maxPoints;
    isAlive = () => this.points.length > 0 && this.age < 1;
}

export {
    Spline
}
