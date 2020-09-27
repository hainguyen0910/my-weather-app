import * as temperatureConstants from './../constants/temperature'

const initialState = {
    position: null,
    localityInfo: null,
    fiveDayWeatherForecast: null,
    dayShowing: null
};

const temperatureReducer = (state = initialState, action) => {
    switch (action.type) {

        case temperatureConstants.SET_LOCATION: {
            return {
                ...state
            }
        }

        case temperatureConstants.SET_LOCATION_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                position: data,
            }
        }

        case temperatureConstants.SET_LOCATION_FAILED: {
            return {
                ...state
            }
        }

        case temperatureConstants.GET_GEO_NAME_ID: {
            return {
                ...state,
            }
        }

        case temperatureConstants.GET_GEO_NAME_ID_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                localityInfo: data
            }
        }

        case temperatureConstants.GET_GEO_NAME_ID_FAILED: {
            return {
                ...state,
            }
        }

        case temperatureConstants.GET_FIVE_DAY_FORECAST_DATA: {
            return {
                ...state
            }
        }

        case temperatureConstants.GET_FIVE_DAY_FORECAST_DATA_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                fiveDayWeatherForecast: data,
            }
        }

        case temperatureConstants.GET_FIVE_DAY_FORECAST_DATA_FAILED: {
            return {
                ...state
            }
        }

        case temperatureConstants.SET_DAY_SHOWING: {
            const { data } = action.payload;
            return {
                ...state,
                dayShowing: data,
            }
        }

        default:
            return state;
    }
}

export default temperatureReducer;