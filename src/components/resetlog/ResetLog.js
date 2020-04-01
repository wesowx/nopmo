import React from 'react';
import blackdot from './blackdot.png';
import orangedot from './orangedot.png';
import reddot from './reddot.png';
import './ResetLog.css';

class ResetLog extends React.Component {


  attach = () => {
    if (this.props.color === 'orange') {
      return orangedot;
    } else if (this.props.color === 'black') {
      return blackdot;
    } else if (this.props.color === 'red') {
      return reddot;
    }
  }


  render() {
    return(
      <div className='w-100 items-center ma1 ba b--white br4'>
        <img id='resetdot' className='mh2 dib' src={this.attach()}/>
        <p className='dib mh2 f6 white'>{this.props.type}</p>
        <p className='dib mh2 f6 white'>{`Date: ${this.props.date}`}</p>
      </div>
    )
  }
}


export default ResetLog;
