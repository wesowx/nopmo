import React from 'react';
import {connect} from 'react-redux';
import {store} from '../../index.js';


class PastJournalLog extends React.Component {

  render() {
    const getDay = 1 / 8.64e+7;

    const logDay = Math.floor((this.props.date - this.props.startdate) * getDay);


    return(
      <div className='white w-100 items-center ma1 ba b--white br4'>
        <div className= 'center w-100 ma1 tc'>
          <p id='lastfap' className='mh1 f6'>Day: {logDay}</p>
          <p className='mh1 f6'>{`Date: ${this.props.date}`}</p>
        </div>
        <div className='flex justify-center w-100 ma1'>
          <p className='mh1 b f6'>Mood: {this.props.mood}/10</p>
          <p className='mh1 b f6'>Confidence: {this.props.confidence}/10</p>
          <p className='mh1 b f6'>Cognition: {this.props.cognition}/10</p>
        </div>
        <div className='flex justify-center w-100 ma1'>
          <p className='mh1 b f6'>Motivation: {this.props.motivation}/10</p>
          <p className='mh1 b f6'>Productivity: {this.props.productivity}/10</p>
        </div>
        <div className='w-90 ma1 bg-white center br2'>
          <p className='f6 black'>{this.props.writeup}</p>
        </div>
      </div>
    )
  }
}

export default PastJournalLog;
