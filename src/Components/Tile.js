import React from "react";
import PropTypes from "prop-types";

function Tile(props) {
  const { children, elevation } = props;

  const divStyle = {
    boxShadow: `0px 10px 20px rgba(31, 32, 64, ${elevation})`,
    borderRadius: "5px 5px 5px 5px",
    padding: "10px"
  };

  return <div style={divStyle}>{children}</div>;
}

export default Tile;

Tile.propTypes = {
  elevation: PropTypes.string
};

Tile.defaultProps = {
  elevation: "0.05"
};