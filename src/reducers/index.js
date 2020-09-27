import { combineReducers } from 'redux';
import temperatureReducer from './temperature';

const rootReducer = combineReducers({
    temperatureReducer: temperatureReducer,
});

export default rootReducer;