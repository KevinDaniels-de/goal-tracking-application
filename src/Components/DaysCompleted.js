import React from "react";
import PropTypes from "prop-types";
import Tile from "./Tile";
import Histogram from "./Histogram";
import ProgressBar from "./ProgressBar";
import styled from "styled-components";

function DaysCompleted(props) {
    const DaysCompleteHeading = styled.h1`
        text-align: center;
        margin: 0;
        font-weight: 400;
        color: ${props => props.theme.colors.purple};
    `;

    const { days, checkins } = props;

    return (
    <Tile elevation={"0.1"}>
        <DaysCompleteHeading>{days} Days Completed</DaysCompleteHeading>

        <Histogram bars={checkins.map(b => b.score * 5)} barCount={10} />

        <ProgressBar percentage={Math.floor(days / 30 * 100)} />
    </Tile>
    );
}

export default DaysCompleted;

DaysCompleted.propTypes = {
    days: PropTypes.number.isRequired
};