import React, { useEffect } from 'react';
import Day from '../Day';
import './style.css';
import classNames from 'classnames'

function DaysOfWeek(props) {
    const { fiveDayWeatherForecast, handleShowDetailWeather } = props;

    const renderDay = (i) => {
        const today = new Date();
        today.setDate(today.getDate() + i);
        const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
        return today.toLocaleDateString('en-GB', options).replace(',', '');
    }

    const renderUrl = (i) => {
        let img = '';
        if (fiveDayWeatherForecast)
            if (i === 0) {
                img = fiveDayWeatherForecast[0].weather[0].main;
                return require(`./../../assets/image/${img}.svg`)
            }
            else if (i === 5) {
                img = fiveDayWeatherForecast[39].weather[0].main;
                return require(`./../../assets/image/${img}.svg`)
            }
            else if (i > 0 && i < 5) {
                img = fiveDayWeatherForecast[i * 8].weather[0].main;
                return require(`./../../assets/image/${img}.svg`)
            }
            else {
                return require(`./../../assets/image/Clouds.svg`)
            }
    }

    const renderTemp = (i) => {
        if (fiveDayWeatherForecast)
            if (i === 0) {
                return Math.round(fiveDayWeatherForecast[0].main.temp - 272.15) + "°C";
            }
            else if (i === 5) {
                return Math.round(fiveDayWeatherForecast[39].main.temp - 272.15) + "°C";
            }
            else if (i > 0 && i < 5) {
                return Math.round(fiveDayWeatherForecast[(i * 8)].main.temp - 272.15) + "°C";
            }
        return "--";
    }

    useEffect(() => {
        handleShowDetailWeather({ day: renderDay(0), temp: renderTemp(0), urlImg: renderUrl(0)})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fiveDayWeatherForecast]);
    return (
        <div className="days-of-week" >
            {
                Array.from(Array(7).keys()).map(i =>
                    <Day
                        className={classNames({ 'is-today': i === 0 })}
                        key={i}
                        day={renderDay(i)}
                        url={renderUrl(i)}
                        temp={renderTemp(i)}
                        handleShowDetailWeather={() => handleShowDetailWeather({ day: renderDay(i), temp: renderTemp(i), urlImg: renderUrl(i)})}
                    />
                )
            }
        </div>
    )
}

export default DaysOfWeek
