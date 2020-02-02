import React from "react";
import PropTypes from "prop-types";
import Tile from "./Tile";
import Histogram from "./Histogram";
import ProgressBar from "./ProgressBar";

function DaysCompleted(props) {
    const h1Style = {
        textAlign: "center",
        color: "#BC9CFF",
        margin: "0",
        fontWeight: "400"
    };

    const { days, checkins } = props;

    return (
    <Tile elevation={"0.1"}>
        <h1 style={h1Style}>{days} Days Completed</h1>

        <Histogram bars={checkins.map(b => b.score * 5).slice(0,9).reverse()} barCount={10} />

        <ProgressBar percentage={Math.floor(days / 30 * 100)} />
    </Tile>
    );
}

export default DaysCompleted;

DaysCompleted.propTypes = {
    days: PropTypes.number.isRequired
};