import React from 'react';
import PropTypes from 'prop-types';

function Shape({ text, color, backgroundColor }) {
  const styles = {
    width: '100px',
    height: '100px',
    color,
    backgroundColor
  };

  return (
    <div style={styles}><p>{text}</p></div>
  );
}

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default Shape;
