import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
import styled from "styled-components";

function Bar(props) {
    const { percentage } = props;

    const OuterBar = styled.div`
        background: linear-gradient(180deg, rgba(56,149,95,.25), rgba(102,210,234,.25));
        width: 30px;
        height: 70.74px;
        border-radius: 2px;
        display: flex;
        align-items: flex-end;
    `;

    const InnerBar = styled.div`
        background: linear-gradient(180deg, rgba(56,149,95,1), rgba(102,210,234,0.5));
        width: 100%;
        height: ${percentage}%;
        opacity: 100 !important;
        border-radius: 2px;
    `;

    return (
        <OuterBar>
            <InnerBar />
        </OuterBar>
    );
}

Bar.propTypes = {
    percentage: PropTypes.number.isRequired
};

function Histogram(props) {
    const { bars, barCount } = props;
    
    const divStyle = {
        display: "flex",
        justifyContent: "space-around",
        margin: "10px 0"
    };

    return (
        <div style={divStyle}>
            {bars.slice(0,9).reverse().map((b,i) => i < barCount ? <Bar key={uuid.v4()} percentage={b}/> : "")}
        </div>
    );
}

Histogram.propTypes = {
    bars: PropTypes.array.isRequired,
    barCount: PropTypes.number.isRequired
};

export default Histogram;