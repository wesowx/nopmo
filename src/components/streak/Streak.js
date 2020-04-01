import React from 'react';
import CurrentStreak from '../currentstreak/CurrentStreak';
import PastStreak from '../paststreaks/PastStreak';
import StreakNav from './StreakNav';
import Journal from '../journal/Journal'
import Scroll from '../scroll/Scroll'
import './Streak.css'
import {connect} from 'react-redux';
import {changeStreakMode} from '../../actions.js';


const mapStatetoProps = (state) => {
  return {
    streakmode: state.changeRoute.streakroute
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    changeStreakMode: (e,mode) => {
      e.preventDefault();
      dispatch(changeStreakMode(mode));
    }
  }
}


class Streak extends React.Component {
  render() {
    const {streakmode} = this.props;

    if (streakmode === 'currentStreak') {
      return(
        <div id='streakcard' className="ba b--black-10 br4 w-100 w-40-m w-40-l mw7 shadow-3 center ma2">
          <StreakNav/>
          <Scroll>
            <CurrentStreak/>
          </Scroll>
        </div>
      )
    } else if (streakmode === 'pastStreak'){
      return(
        <div id='streakcard' className="ba b--black-10 br4 w-100 w-40-m w-40-l mw7 shadow-3 center ma2">
          <StreakNav/>
          <Scroll>
            <PastStreak/>
          </Scroll>
        </div>
      )
    } else if (streakmode === 'journal'){
      return(
        <div id='streakcard' className="ba b--black-10 br4 w-100 w-40-m w-40-l mw7 shadow-3 center ma2">
          <StreakNav/>
          <Journal/>
        </div>
      )
    }
  }
}


export default connect(mapStatetoProps,mapDispatchtoProps)(Streak);
