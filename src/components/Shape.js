import React from 'react';
import PropTypes from 'prop-types';


function Shape({ text, textColor, backgroundColor}) {

 //returns a div 
 
}

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default Shape;
