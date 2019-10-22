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

    simulate = () => {
        this.age += this.particleSystem.splineAgeRate;

        if (this.points.length < this.minPoints || this.age >= 1) {
            this.particleSystem.registerLife(this.points.length);
            this.points.length = 0
        }
    };

    render = (x, y) => {
        const splinePoints = [];
        this.points.forEach(particle => {
            if (particle.isAlive()) {
                const [px, py] = particle.getCoords();
                splinePoints.push(px + x, py + y)
            }
        });

        this.doRender(splinePoints, this.age)
    };

    isAlive = () => this.points.length > 0 && this.age < 1;
}

export {
    Spline
}
