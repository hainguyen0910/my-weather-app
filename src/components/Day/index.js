import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import './style.css';


function Day(props) {
    const { day, temp, url, handleShowDetailWeather, className } = props;

    return (
        <Card className={className + " day-card"} onClick={handleShowDetailWeather}  >
            <CardContent className="card-title" >
                <strong>{day}</strong>
                <div className="wrapper">
                    <div className="icon-weather" ><img src={url} alt="" /></div>
                    <div className="temperature" > <strong>{temp}</strong></div>
                </div>
            </CardContent>
        </ Card>
    )
}

export default Day
