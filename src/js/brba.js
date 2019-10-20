function BrBa(name) {
    function urlName() {
        const results = /\\?n=([^&#]*)/.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    function Element() {
    }

    Element.prototype.Set = function (atomicNumber, relativeAtomicMass, name, chemicalSymbol) {
        this.AtomicNumber = atomicNumber;
        this.RelativeAtomicMass = relativeAtomicMass;
        this.Name = name;
        this.ChemicalSymbol = chemicalSymbol;
    };

    Element.fromArray = function (a) {
        const e = new Element();
        e.Set.apply(e, a);
        return e;
    };

    const aNames = $('#n').val($('<div/>').text(urlName() || name).html()).val().split(' '),
        elements = [],
        foundElements = [],
        aData = '1,1.00794,Hydrogen,H;2,4.002602,Helium,He;3,6.941,Lithium,Li;4,9.012182,Beryllium,Be;5,10.811,Boron,B;6,12.0107,Carbon,C;7,14.0067,Nitrogen,N;8,15.9994,Oxygen,O;9,18.9994,Fluorine,F;10,20.1797,Neon,Ne;11,22.98976928,Sodium,Na;12,24.305,Magnesium,Mg;13,26.9815386,aluminium,Al;14,28.0855,Silicon,Si;15,30.973762,Phosphorus,P;16,32.065,Sulphur,S;17,35.453,Chlorine,Cl;18,39.948,Argon,Ar;19,39.0983,Potassium,K;20,40.078,Calcium,Ca;21,44.955912,Scandium,Sc;22,47.867,Titanium,Ti;23,50.9415,Vanadium,V;24,51.9961,Chromium,Cr;25,54.938045,Manganese,Mn;26,55.845,Iron,Fe;27,58.933195,Cobalt,Co;28,58.6934,Nickel,Ni;29,63.546,Copper,Cu;30,65.38,Zinc,Zn;31,69.723,Gallium,Ga;32,72.64,Germanium,Ge;33,74.9216,Arsenic,As;34,78.96,Selenium,Se;35,79.904,Bromine,Br;36,83.798,Krypton,Kr;37,85.4678,Rubidium,Rb;38,87.62,Strontium,Sr;39,88.90585,Yttrium,Y;40,91.224,Zirkonium,Zr;41,92.90638,Niobium,Nb;42,95.96,Molybdaenum,Mo;43,98,Technetium,Tc;44,101.07,Ruthenium,Ru;45,102.9055,Rhodium,Rh;46,106.42,Palladium,Pd;47,107.8682,Silver,Ag;48,112.411,Cadmium,Cd;49,114.818,Indium,In;50,118.71,Tin,Sn;51,121.76,Antimony,Sb;52,127.6,Tellurium,Te;53,126.90447,Iodine,I;54,131.293,Xenon,Xe;55,132.9054519,Cesium,Cs;56,137.327,Barium,Ba;57,138.90547,Lanthanum,La;58,140.116,Cerium,Ce;59,140.90765,Praseodymium,Pr;60,144.242,Neodymium,Nd;61,145,Promethium,Pm;62,150.36,Samarium,Sm;63,151.964,Europium,Eu;64,157.25,Gadolinium,Gd;65,158.92535,Terbium,Tb;66,162.5001,Dysprosium,Dy;67,164.93032,Holmium,Ho;68,167.259,Erbium,Er;69,168.93421,Thulium,Tm;70,173.054,Ytterbium,Yb;71,174.9668,Lutetium,Lu;72,178.49,Hafnium,Hf;73,180.94788,Tantalum,Ta;74,183.84,Tungsten,W;75,186.207,Rhenium,Re;76,190.23,Osmium,Os;77,192.217,Iridium,Ir;78,192.084,Platinum,Pt;79,196.966569,Gold,Au;80,200.59,Hydrargyrum,Hg;81,204.3833,Thallium,Tl;82,207.2,Lead,Pb;83,208.980401,Bismuth,Bi;84,210,Polonium,Po;85,210,Astatine,At;86,220,Radon,Rn;87,223,Francium,Fr;88,226,Radium,Ra;89,227,Actinium,Ac;90,232.03806,Thorium,Th;91,231.03588,Protactinium,Pa;92,238.02891,Uranium,U;93,237,Neptunium,Np;94,244,Plutonium,Pu;95,243,Americium,Am;96,247,Curium,Cm;97,247,Berkelium,Bk;98,251,Californium,Cf;99,252,Einsteinium,Es;100,257,Fermium,Fm;101,258,Mendelevium,Md;102,259,Nobelium,No;103,262,Lawrencium,Lr;104,261,Rutherfordium,Rf;105,262,Dubnium,Db;106,266,Seaborgium,Sg;107,264,Bohrium,Bh;108,277,Hassium,Hs;109,268,Meitnerium,Mt;110,271,Ununnilium,Ds;111,272,Unununium,Rg;112,285,Ununbium,Uub;113,284,Ununtrium,Uut;114,289,Ununquadium,Uuq;115,288,Ununpentium,Uup;116,292,Ununhexium,Uuh;118,294,Ununoctium,Uuo'.split(';');

    let html = '',
        aDataIndex = aData.length,
        currentName,
        foundUnique,
        symbol;

    while (aDataIndex--) {
        elements.push(Element.fromArray(aData[aDataIndex].split(',')));
    }

    //Sort by length of ChemicalSymbol as we want to try and use the longest ones first.
    elements.sort( (a, b) => a.ChemicalSymbol.length - b.ChemicalSymbol.length);

    for (let indexName in aNames) {
        if (aNames.hasOwnProperty(indexName)) {
            currentName = aNames[indexName].toLowerCase();
            aDataIndex = elements.length;
            foundUnique = false;

            while (aDataIndex-- && !foundUnique) {
                if (currentName.indexOf(elements[aDataIndex].ChemicalSymbol.toLowerCase()) !== -1) {
                    symbol = elements[aDataIndex].ChemicalSymbol;
                    foundUnique = true;

                    for (let i = 0, foundElementsLength = foundElements.length; i < foundElementsLength; i++) {
                        foundUnique = foundUnique && foundElements[i].ChemicalSymbol !== symbol;
                    }

                    foundElements.push(elements[aDataIndex]);
                }
            }

            if (foundElements.length > 0) {
                symbol = foundElements[foundElements.length - 1].ChemicalSymbol;
                html += aNames[indexName].replace(new RegExp(symbol, 'i'), '<a href="#" title="' + foundElements[foundElements.length - 1].Name + '">' + symbol + '</a>') + ' ';
            } else {
                html += aNames[indexName] + ' ';
            }
        }
    }

    $('#brba').html(html).find('a').tooltip();
}
$(function () {
    $('#b').click(function () {
        const x = window.location.href;
        window.location.href = x.substring(0, x.indexOf('?')) + "?n=" + $('#n').val();
    });
    BrBa("Aaron Paul");
});
