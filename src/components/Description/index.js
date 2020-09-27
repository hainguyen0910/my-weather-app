import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as temperatureActions from './../../actions/temperature';
import './style.css';


function Description(props) {
    const { temperature } = props;
    const val = temperature.dayShowing;
   
    return (
        <div className="description" >
            <div className="icon-description">
                {val && <img src={val.urlImg} alt="" />}
            </div>
            <div className="day-description">
                {val && <div><p>{val.day}</p><p>{val.temp}</p></div>}
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Description) 
