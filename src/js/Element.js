class Element {
    constructor(atomicNumber, atomicMass, name, chemicalSymbol) {
        this.AtomicNumber = atomicNumber;
        this.AtomicMass = atomicMass;
        this.Name = name;
        this.ChemicalSymbol = chemicalSymbol;
    }

    getTemplate = () =>
        `<div class="element ${this.ChemicalSymbol.length === 2 ? 'wider' : ''}">
            <h6 class="align-left">${this.AtomicNumber}</h6>
            <h1>${this.ChemicalSymbol}</h1>
            <h6>${this.Name}</h6>
            <h6>${this.AtomicMass}</h6>
        </div>`
}

export {
    Element
}
