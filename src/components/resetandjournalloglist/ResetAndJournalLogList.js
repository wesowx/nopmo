import React from 'react';
import ResetLog from '../resetlog/ResetLog';
import JournalLog from '../journallog/JournalLog';
import {connect} from 'react-redux';
import {store} from '../../index.js';


const mapStatetoProps = (state) => {
  return {
    logs: store.getState().loadStreak.logs
  }
}

class ResetAndJournalLogList extends React.Component {


  render() {
    const resetAndJournalLogs = this.props.logs;
    const logsArray = resetAndJournalLogs.map(
      (user,i) => {
        if (user.type === 'reset') {
          return <ResetLog key={i} color={user.color} date={new Date(user.date)} type={user.typeofrelapse}/>
        } else if (user.type === 'journal') {
          return <JournalLog key={i} date={new Date(user.date)} mood={user.mood} confidence={user.confidence} cognition={user.cognition} motivation={user.motivation} productivity={user.productivity} writeup={user.writeup}/>
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

export default connect(mapStatetoProps)(ResetAndJournalLogList);
