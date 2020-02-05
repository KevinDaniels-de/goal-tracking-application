import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function ProgressBar(props) {
    const { percentage } = props;

    const OuterBar = styled.div`
        width: 100%;
        height: 12.85px;
        background: rgba(188, 156, 255, 0.25);
        border-radius: 20px;
    `;

    const InnerBar = styled.div`
        width: ${percentage}%;
        height: 100%;
        background: linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%);
        border-radius: 20px;
    `;

    const TextStyle = styled.div`
        font-family: Montserrat, sans-serif;
        color: rgba(31, 32, 65, 0.5);
        margin-top: 10px;
    `;

    return (
    <div>
        <OuterBar>
            <InnerBar />
        </OuterBar>

        <TextStyle>
            <span><b>{percentage}%</b> TO GOAL</span>
        </TextStyle>
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