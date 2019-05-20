import React from 'react';
import PropTypes from 'prop-types';


function Shape({ text, textColor, backgroundColor}) {

 
}

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default Shape;
