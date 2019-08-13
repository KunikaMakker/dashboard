import React from 'react';

const Planner = (props) => {
    const {selectedDate} = props;
    return(
        <div>
            {selectedDate}
        </div>
    )
}
export default Planner;