import React from 'react';
import PropTypes from 'prop-types'

const Element = ({AtomicNumber, ChemicalSymbol, CommonName, AtomicWeight}) => (
    <div className="element">
        <h6 className="align-left">{AtomicNumber}</h6>
        <h1>{ChemicalSymbol}</h1>
        <h6>{CommonName}</h6>
        <h6>{AtomicWeight}</h6>
    </div>
);

Element.propTypes = {
    AtomicNumber: PropTypes.number.isRequired,
    ChemicalSymbol: PropTypes.string.isRequired,
    CommonName: PropTypes.string.isRequired,
    AtomicWeight: PropTypes.number.isRequired
};

export default Element;
