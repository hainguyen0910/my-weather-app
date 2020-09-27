import React, { useState, useEffect } from 'react';
import './style.css';

function Clock(props) {
    const { localityInfo } = props;
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        var timerID = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return function cleanUp() {
            clearInterval(timerID)
        }
    }, [])

    return (
        <div className="welcome">
            <div className="space"></div>
            <div className="info">
                {localityInfo && <p>{localityInfo.city}, {localityInfo.principalSubdivision}, {localityInfo.countryName} </p>}
                <p>{date.toLocaleTimeString()}</p>
            </div>
        </div>
    )
}

export default Clock;
