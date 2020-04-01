import React from 'react';
import ResetAndJournalLogList from '../resetandjournalloglist/ResetAndJournalLogList';
import PastStreakLogList from './PastStreakLogList'
import {connect} from 'react-redux';
import {changePastStreakMode} from '../../actions.js';
import './PastStreakZoom.css';


const mapStatetoProps = (state) => {
  return {
    startdate: state.loadStreak.streakinfo.startdate,
    enddate: state.loadStreak.streakinfo.enddate,
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    changePastStreakMode: (e,mode) => {
      e.preventDefault();
      dispatch(changePastStreakMode(mode));
    }
  }
}


class PastStreakZoom extends React.Component {

  render() {
    return(
      <div className="ba b--black-10 br4 w-100 w-40-m w-40-l mw7 shadow-3 center ma2">
        <fieldset className="ba b--white w-95 ma1 mh2 br2">
          <legend className="tc f3 fw6 ma1 white w-30 center">Past Streak</legend>
          <div className='flex items-center w-100'>
            <div className="dib w-10 ma1">
              <p id='paststarted' className='white f5 b ma0'>Started</p>
            </div>
            <div className="dib br2 ba b--white w-90 ma1">
              <p className="white f6 ma1">{this.props.startdate}</p>
            </div>
          </div>
          <div className='flex items-center w-100'>
            <div className="dib w-10 ma1">
              <p id='pastended' className='white f5 b ma0'>Ended</p>
            </div>
            <div className="dib br2 ba b--white w-90 ma1">
              <p className="white f6 ma1">{this.props.enddate}</p>
            </div>
          </div>
          <div className='flex w-100 items-center'>
            <PastStreakLogList/>
          </div>
          <div className='flex w-100 items-center'>
            <div className="ma2 tc center">
              <p  onClick={(e)=>this.props.changePastStreakMode(e,'list')} className="b ph2 pv2 ba b--white bg-transparent grow pointer f3 dib white br2">Back</p>
            </div>
          </div>
        </fieldset>
      </div>
    );
  }
}



export default connect(mapStatetoProps,mapDispatchtoProps)(PastStreakZoom);
