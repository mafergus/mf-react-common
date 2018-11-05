import React from 'react';
import PropTypes from 'prop-types';

export default function Title({ style, children }) {
  const STYLE = {
    fontWeight: 400,
    marginBottom: 20,
    color: "white",
    textAlign: "left",
    ...style
  };
  return <h4 style={STYLE}>{children}</h4>;
};

Title.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
};

Title.defaultProps = {
  children: null,
  style: {},
};