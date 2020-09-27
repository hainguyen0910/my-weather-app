import * as temperatureConstant from './../constants/temperature'

export const setLocation = () => {
    return {
        type: temperatureConstant.SET_LOCATION,
    }
}

export const setLocationSuccess = data => {
    return {
        type: temperatureConstant.SET_LOCATION_SUCCESS,
        payload: {
            data,
        }
    }
}

export const setLocationFailed = err => {
    return {
        type: temperatureConstant.SET_LOCATION_FAILED,
        payload: {
            err
        }
    }
}

export const getGeoNameID = () => {
    return {
        type: temperatureConstant.GET_GEO_NAME_ID,
    }
}

export const getGeoNameIDSuccess = data => {
    return {
        type: temperatureConstant.GET_GEO_NAME_ID_SUCCESS,
        payload: {
            data,
        }
    }
}

export const getGeoNameIDFailed = err => {
    return {
        type: temperatureConstant.GET_GEO_NAME_ID_FAILED,
        payload: {
            err,
        }
    }
}

export const getFiveDayForecastData = () => {
    return {
        type: temperatureConstant.GET_FIVE_DAY_FORECAST_DATA
    }
}

export const getFiveDayForecastDataSuccess = data => {
    return {
        type: temperatureConstant.GET_FIVE_DAY_FORECAST_DATA_SUCCESS,
        payload: {
            data,
        }
    }
}

export const getFiveDayForecastDataFailed = err => {
    return {
        type: temperatureConstant.GET_FIVE_DAY_FORECAST_DATA_FAILED,
        payload: {
            err,
        }
    }
}


export const setDayShowing = data => {
    return {
        type: temperatureConstant.SET_DAY_SHOWING,
        payload: {
            data,
        }
    }
}