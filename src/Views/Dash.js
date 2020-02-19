import React from 'react'
import PropTypes from 'prop-types'
import CheckinComment from "../Components/CheckinComment"
import DaysCompleted from "../Components/DaysCompleted"

function Dash(props) {

    const {days, checkins} = props;

    return (
        <React.Fragment>
            <DaysCompleted days={days} checkins={checkins} />
            
            <CheckinComment />
        </React.Fragment>
    )
}

Dash.propTypes = {
    checkins: PropTypes.array.isRequired,
    days: PropTypes.number.isRequired
}

export default Dash;