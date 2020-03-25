import React from 'react';


class CurrentStreak extends React.Component {
  render() {
    return(
      <div className="ba b--black-10 br4 w-100 w-40-m w-40-l mw7 shadow-3 center ma2">
        <fieldset className="ba b--white w-95 ma1 mh2 br2">
          <legend className="tc f3 fw6 ma1 white w-30 center">Current Streak</legend>
          <div className='flex w-100 items-center'>
            <div className="dib w-10 ma2">
              <p className='white f4'>Started</p>
            </div>
            <div className="dib br2 ba b--white w-90 ma2">
              <p className="white f6 ma1">*insert green dot* Started: this.props.lastFap</p>
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



export default CurrentStreak;
