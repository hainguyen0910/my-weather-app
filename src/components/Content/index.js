import React from 'react'
import Clock from '../Clock';
import './style.css';
import Description from './../Description';
import DaysOfWeek from './../DaysOfWeek';

function Content(props) {
    const { localityInfo, fiveDayWeatherForecast, handleShowDetailWeather } = props;
    return (
        <div className="content">
            <div className="title">
                <Clock localityInfo={localityInfo} />
            </div>
            <div className="main">
                <div className="app-left">
                    <Description />
                </div>
                <div className="app-right">
                    <DaysOfWeek
                        fiveDayWeatherForecast={fiveDayWeatherForecast}
                        handleShowDetailWeather={handleShowDetailWeather}
                    />
                </div>
            </div>
        </div>
    )
}

export default Content;
