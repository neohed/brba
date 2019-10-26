class Element {
    constructor(atomicNumber, atomicMass, name, chemicalSymbol) {
        this.AtomicNumber = atomicNumber;
        this.AtomicMass = atomicMass;
        this.Name = name;
        this.ChemicalSymbol = chemicalSymbol;
    }
}

const createElementTemplate = ({AtomicNumber, ChemicalSymbol, Name, AtomicMass}) => `
        <div class="element ${ChemicalSymbol.length === 2 ? 'wider' : ''}">
            <h6 class="align-left">${AtomicNumber}</h6>
            <h1>${ChemicalSymbol}</h1>
            <h6>${Name}</h6>
            <h6>${AtomicMass}</h6>
        </div>
`;

export {
    Element,
    createElementTemplate
}
