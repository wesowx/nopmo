import React from 'react';


class ResetAndJournalLogList extends React.Component {

  resetAndJournalLogArray = () => {
    const resetAndJournalLogs = this.props.logs;
    const logsArray = resetAndJournalLogs.map(
      (user,i) => {
        if (resetAndJournalLogs.i.color) {
          return <ResetLog color={user.color} date={user.date}/>
        } else if (resetAndJournalLogs.i.mood) {
          return <JournalLog/>
        }
      }
    )
    return logsArray;
  }

  attachLogs = (logsarray) => {
    const target = document.querySelector('#logswrapper');

  }

  componentDidMount() {
    this.attachLogs(this.resetAndJournalLogArray())
  }

  componentDidUpdate() {
    this.attachLogs(this.resetAndJournalLogArray())
  }

  render() {
    return(
      <div id='logswrapper'>
      </div>
    );
  }
}

export default ResetAndJournalLogList;
