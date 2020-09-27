import axiosService from './axiosService';
import { API_GET_CITY_CODE, API_ENDPOINT } from './../constants';


export const getGeoNameID = position => {
    let lat = position[0];
    let long = position[1];
    const urlGetGeoNameID = `?latitude=${lat}&longitude=${long}`;
    return axiosService.get(API_GET_CITY_CODE + urlGetGeoNameID)
}

export const getCurrentWeatherData = geoNameID => {
    const url = `weather?id=${geoNameID}&appid=19e50d623624bf0b7dc22f767f67e973`;
    return axiosService.get(API_ENDPOINT + url);
}

export const getFiveDayForecastData = geoNameID => {
    const url = `forecast?id=${geoNameID}&appid=19e50d623624bf0b7dc22f767f67e973`;
    return axiosService.get(API_ENDPOINT + url);
}