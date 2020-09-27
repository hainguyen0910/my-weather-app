import React, { useEffect } from 'react'
import './style.css';
import Header from './../../components/Header';
import Content from './../../components/Content';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as temperatureActions from './../../actions/temperature';


function Board(props) {
    const { temperature, temperatureCreator } = props;
    const fiveDayWeatherForecast = temperature.fiveDayWeatherForecast;
    const { localityInfo } = temperature;

    useEffect(() => {
        const { setLocation, getGeoNameID, getFiveDayForecastData } = temperatureCreator;
        setLocation();
        getGeoNameID();
        getFiveDayForecastData();
    }, [temperatureCreator])

    const handleShowDetailWeather = day => {
        const { setDayShowing } = temperatureCreator;
        setDayShowing(day);
    }

    return (
        <div className="board">
            <Header />
            <Content
                fiveDayWeatherForecast={fiveDayWeatherForecast}
                handleShowDetailWeather={handleShowDetailWeather}
                localityInfo={localityInfo} />
        </div>
    )
}


const mapStateToProps = state => {
    return {
        temperature: state.temperatureReducer,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        temperatureCreator: bindActionCreators(temperatureActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
