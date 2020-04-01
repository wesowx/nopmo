import React from 'react';
import ResetAndJournalLogList from '../resetandjournalloglist/ResetAndJournalLogList';
import {connect} from 'react-redux';
import {store} from '../../index.js';
import {loadCurrentStreak} from '../../actions.js';
import './CurrentStreak.css';

const mapStatetoProps = (state) => {
  return {
    lastFap: new Date(store.getState().loadUserState.o).toString()
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    loadCurrentStreak: () => {
      dispatch(loadCurrentStreak());
    }
  }
}


class CurrentStreak extends React.Component {

  componentDidMount() {
    this.props.loadCurrentStreak()
  }

  componentDidUpdate() {
    this.props.loadCurrentStreak()
  }


  render() {
    return(
      <div className="ba b--black-10 br4 w-100 w-40-m w-40-l mw7 shadow-3 center ma2">
        <fieldset className="ba b--white w-95 ma1 mh2 br2">
          <legend className="tc f3 fw6 ma1 white w-30 center">Current Streak</legend>
          <div className='flex items-center w-100'>
            <div className="dib w-10 ma1">
              <p id='currentstarted' className='white f5 b ma0'>Started</p>
            </div>
            <div className="dib br2 ba b--white w-90 ma1">
              <p className="white f6 ma1">{this.props.lastFap}</p>
            </div>
          </div>
          <div className='flex w-100 items-center'>
            <ResetAndJournalLogList/>
          </div>
        </fieldset>
      </div>
    );
  }
}



export default connect(mapStatetoProps,mapDispatchtoProps)(CurrentStreak);
