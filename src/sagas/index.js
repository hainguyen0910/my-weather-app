import { call, delay, put, select, takeLatest } from 'redux-saga/effects';
import * as temperatureActions from './../actions/temperature';
import * as temperatureApis from './../apis/temperature';
import * as temperatureConstants from './../constants/temperature';

const getUserLocation = () => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
        location => resolve(location),
        error => reject(error),
    )
})

function* setLocation() {
    yield delay(500);
    const location = yield call(getUserLocation)
    const { latitude, longitude } = location.coords;
    if (latitude && longitude) {
        yield put(temperatureActions.setLocationSuccess([latitude, longitude]));
    }
    else {
        yield put(temperatureActions.setLocationFailed('err'));
    }
}


function* getGeoNameID() {
    yield delay(1000);
    const position = yield select(state => state.temperatureReducer.position)
    if (position) {
        const res = yield call(temperatureApis.getGeoNameID, position)
        const { data, status } = res;
        if (status === 200) {
            const newData = {
                countryName: data.countryName,
                principalSubdivision: data.principalSubdivision,
                city: data.city,
                locality: data.locality,
                geoNameID: data.localityInfo.administrative[1].geonameId
            };
            yield put(temperatureActions.getGeoNameIDSuccess(newData))
        }
        else {
            yield put(temperatureActions.getGeoNameIDFailed(data))
        }
    }
}

function* getForecastData() {
    yield delay(1500);
    const localityInfo = yield select(state => state.temperatureReducer.localityInfo);
    if (localityInfo) {
        const res = yield call(temperatureApis.getFiveDayForecastData, localityInfo.geoNameID)
        const { data, status } = res;
        if (status === 200) {
            const { list } = data;
            yield put(temperatureActions.getFiveDayForecastDataSuccess(list))
        }
        else {
            yield put(temperatureActions.getFiveDayForecastDataFailed(data))
        }
    }
}

function* rootSaga() {
    yield takeLatest(temperatureConstants.SET_LOCATION, setLocation);
    yield takeLatest(temperatureConstants.GET_GEO_NAME_ID, getGeoNameID);
    yield takeLatest(temperatureConstants.GET_FIVE_DAY_FORECAST_DATA, getForecastData)
}

export default rootSaga;