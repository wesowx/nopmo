import React from 'react';
import './Journal.css';
import {connect} from 'react-redux';
import {submitJournal} from '../../actions.js';


const mapStatetoProps = (state) => {
  return {
    lastFap: new Date(state.loadUserState.o)
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    onSubmitJournal: (e) => {
      dispatch(submitJournal());
    }
  }
}

class Journal extends React.Component {
  render() {

    const getDay = 1 / 8.64e+7;

    const lastFap = Math.floor((new Date() - this.props.lastFap) * getDay);

    return(
      <div id='journalcard' className="ba b--black-10 br4 w-100 w-40-m w-40-l mw7 shadow-3 center ma2">
        <fieldset className="ba b--white w-95 ma1 mh2 br2">
          <legend className="tc f3 fw6 ma1 white w-30 center">Journal</legend>
          <div className='flex w-100 items-center'>
            <div className="dib w-70 ma2">
              <p className='white f4'>{`Current Date: ${new Date()}`}</p>
            </div>
            <div className="dib br2 ba b--white w-30 ma2">
              <p className="white f6 ma1">Day: {lastFap}</p>
            </div>
          </div>
          <div className='flex w-100 items-center'>
            <div id='indicators' className='w-50 ma2 flex flex-column white f4'>
              <div className='w-100 ma1'>
                <p className='dib'>Mood:</p>
                <input className='dib w-10 ma1' type='number' min="0" max="10" id='Mood' name='Mood'/>
                <p className='dib'>/10</p>
              </div>
              <div className='w-100 ma1'>
                <p className='dib'>Confidence:</p>
                <input className='dib w-10 ma1' type='number' min="0" max="10" id='Confidence' name='Confidence'/>
                <p className='dib'>/10</p>
              </div>
              <div className='w-100 ma1'>
                <p className='dib'>Cognition:</p>
                <input className='dib w-10 ma1' type='number' min="0" max="10" id='Cognition' name='Cognition'/>
                <p className='dib'>/10</p>
              </div>
              <div className='w-100 ma1'>
                <p className='dib'>Motivation:</p>
                <input className='dib w-10 ma1' type='number' min="0" max="10" id='Motivation' name='Motivation'/>
                <p className='dib'>/10</p>
              </div>
              <div className='w-100 ma1'>
                <p className='dib'>Productivity:</p>
                <input className='dib w-10 ma1' type='number' min="0" max="10" id='Productivity' name='Productivity'/>
                <p className='dib'>/10</p>
              </div>
            </div>
            <div id='writeupwrapper' className='w-50 h5 ma2'>
              <textarea className='w-100 f6' type='text' id='writeup' name='writeup' placeholder='Enter optional write-up' />
            </div>
          </div>
          <div className="mt1 tc">
            <p  onClick={this.props.onSubmitJournal} className="w-30 b ma1 ph2 pv2 ba b--white bg-transparent grow pointer f6 dib white">Submit</p>
          </div>
          <div className="mt1 tc">
            <p  className="w-30 b ma1 ph2 pv2 ba b--white bg-transparent grow pointer f6 dib white">Back</p>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Journal);
