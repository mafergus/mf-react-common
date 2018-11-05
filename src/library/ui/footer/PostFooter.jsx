import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import { primary } from 'util/colors';

const STYLE = {
  width: "100%",
  height: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const footerBp = {
  sm: 11,
  md: 10,
  lg: 8,
};

export default function PostFooter({ children, style }) {

  return (
    <Grid container style={{ ...STYLE, ...style }}>
      <Grid
        item
        sm={footerBp.sm}
        md={footerBp.md}
        lg={footerBp.lg}
      >
        {children}
      </Grid>
    </Grid>
  );
};

PostFooter.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
};

PostFooter.defaultProps = {
  children: null,
  style: {},
};