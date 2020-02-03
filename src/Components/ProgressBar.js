import React from "react";
import PropTypes from "prop-types";

function ProgressBar(props) {
    const { percentage } = props;
    
    const barStyle = {
        width: "100%",
        height: "12.85px",
        background: "rgba(188, 156, 255, 0.25)",
        borderRadius: "20px"
    };

    const innerBar = {
        width: `${percentage}%`,
        height: "100%",
        background: "linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)",
        borderRadius: "20px"
    };

    const textStyle = {
        fontFamily: "Montserrat, sans-serif",
        color: "rgba(31, 32, 65, 0.5)",
        marginTop: "10px"
    };

    return (
    <div>
        <div style={barStyle}>
            <div style={innerBar}></div>
        </div>

        <div style={textStyle}>
            <span><b>{100-percentage}%</b> TO<div>GOAL</div></span>
        </div>
    </div>
    );
}

export default ProgressBar;

ProgressBar.propTypes = {
    percentage: PropTypes.number
};

ProgressBar.defaultProps = {
    percentage: 0
};