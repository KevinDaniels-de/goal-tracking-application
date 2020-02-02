import React from "react";
import PropTypes from "prop-types";
import Tile from "./Tile";
import Histogram from "./Histogram";

function DaysCompleted(props) {
  const h1Style = {
    textAlign: "center",
    color: "#BC9CFF",
    margin: "0"
  };

  const { days, checkins } = props;
  
  return (
    <Tile elevation={"0.1"}>
        <h1 style={h1Style}>{days} Days Completed</h1>

        <Histogram bars={checkins.map(b => b.score)} barCount={checkins.length}></Histogram>
    </Tile>
  );
}

DaysCompleted.propTypes = {
  days: PropTypes.number.isRequired
};

export default DaysCompleted;