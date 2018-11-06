import React from 'react';
import PropTypes from 'prop-types';
import './link.scss';

export default function Link({ children, to, ...otherProps }) {
  return (
    <div style={{ marginTop: 5, marginBottom: 5 }} className="link">
      <a href={to} {...otherProps}>{children}</a>
    </div>
  );
};

Link.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string.isRequired,
};

Link.defaultProps = {
  children: null,
};