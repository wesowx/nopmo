import React from 'react';
import ResetLog from '../resetlog/ResetLog';
import PastJournalLog from './PastJournalLog';
import {connect} from 'react-redux';
import {store} from '../../index.js';


const mapStatetoProps = (state) => {
  return {
    logs: state.loadStreak.logs,
    startdate: state.loadStreak.streakinfo.startdate
  }
}

class PastStreakLogList extends React.Component {


  render() {
    const resetAndJournalLogs = this.props.logs;
    const logsArray = resetAndJournalLogs.map(
      (user,i) => {
        if (user.type === 'reset') {
          return <ResetLog key={i} color={user.color} date={new Date(user.date)} type={user.typeofrelapse}/>
        } else if (user.type === 'journal') {
          return <PastJournalLog key={i} date={new Date(user.date)} startdate={new Date(this.props.startdate)} mood={user.mood} confidence={user.confidence} cognition={user.cognition} motivation={user.motivation} productivity={user.productivity} writeup={user.writeup}/>
        }
      }
    )
    return(
      <div id='logswrapper' className='w-100'>
        {logsArray}
      </div>
    );
  }
}

export default connect(mapStatetoProps)(PastStreakLogList);
