import React from 'react';
import {connect} from 'react-redux';
import {changePastStreakMode, loadPastStreak} from '../../actions.js';



const mapStatetoProps = (state) => {
  return state
}

const mapDispatchtoProps = (dispatch) => {
  return {
    changePastStreakMode: (e,mode) => {
      e.preventDefault();
      dispatch(changePastStreakMode(mode));
    },
    loadPastStreak: (e,paststreakid,start,end) => {
      dispatch(loadPastStreak(paststreakid,start,end));
    }
  }
}

class PastStreakListItem extends React.Component {


  render() {

    const getDay = 1 / 8.64e+7;

    const streakDays = Math.floor((new Date(this.props.enddate) - new Date(this.props.startdate)) * getDay);



    return(
      <div onClick={(e)=> {this.props.changePastStreakMode(e,'zoom'); this.props.loadPastStreak(e,this.props.streakid,this.props.startdate,this.props.enddate);}  } className='w-100 ma1 ba b--white br4 white'>
        <p className='ma1 f6'>Streak: {this.props.id + 1}</p>
        <p className='ma1 f6'>Started: {this.props.startdate}</p>
        <p className='ma1 f6'>Ended: {this.props.enddate}</p>
        <p className='ma1 f6'>Days: {streakDays}</p>
      </div>
    )
  }
}


export default connect(mapStatetoProps,mapDispatchtoProps)(PastStreakListItem);
