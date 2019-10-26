class Element {
    constructor(atomicNumber, atomicMass, name, chemicalSymbol) {
        this.AtomicNumber = atomicNumber;
        this.AtomicMass = atomicMass;
        this.Name = name;
        this.ChemicalSymbol = chemicalSymbol;
    }
}

const createElementTemplate = (element) => `
        <div class="element">
            <h6 class="align-left">${element.AtomicNumber}</h6>
            <h1>${element.ChemicalSymbol}</h1>
            <h6>${element.Name}</h6>
            <h6>${element.AtomicMass}</h6>
        </div>
`;

export {
    Element,
    createElementTemplate
}
