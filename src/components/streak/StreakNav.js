import React from 'react';
import {connect} from 'react-redux';
import {changeStreakMode, changePastStreakMode} from '../../actions.js';


const mapStatetoProps = (state) => {
  return state
}

const mapDispatchtoProps = (dispatch) => {
  return {
    changeStreakMode: (e,mode) => {
      e.preventDefault();
      dispatch(changeStreakMode(mode));
    },
    changePastStreakMode: (e,mode) => {
      e.preventDefault();
      dispatch(changePastStreakMode(mode));
    }
  }
}


class StreakNav extends React.Component {
  render() {
    return(
      <div className = 'w-100 flex white'>
        <div className="ma2 tc">
          <p  onClick={(e)=>this.props.changeStreakMode(e,'currentStreak')} className="b ph2 pv2 ba b--white bg-transparent grow pointer f3 dib white br2">Current Streak</p>
        </div>
        <div className="ma2 tc">
          <p  onClick={(e)=>{this.props.changeStreakMode(e,'pastStreak'); this.props.changePastStreakMode(e,'list')}} className="b ph2 pv2 ba b--white bg-transparent grow pointer f3 dib white br2">Past Streaks</p>
        </div>
        <div className="ma2 tc">
          <p  onClick={(e)=>this.props.changeStreakMode(e,'journal')} className="b ph2 pv2 ba b--white bg-transparent grow pointer f3 dib white br2">Journal</p>
        </div>
      </div>
    )
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(StreakNav);
