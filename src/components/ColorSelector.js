import React from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ color, backgroundColor, handleChange }) {
  return (
    <p>
      Change Text Color: 
      <input name="color" type="color" value={color} onChange={handleChange}/>
      Change Background Color: 
      <input name="color" type="color" value={backgroundColor} onChange={handleChange}/>
    </p>
  );
}

ColorSelector.propTypes = {
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default ColorSelector;
