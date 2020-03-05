import React from 'react';
import './ResetCard.css';
import {connect} from 'react-redux';
import {resetCounter} from '../../actions.js';

const mapStatetoProps = (state) => {
  return {
    joined: state.loadUserState.joined,
    fap: state.loadUserState.fap,
    totalTime: ((Date.now() - Date.parse(state.loadUserState.joined)) / 8.64e+7 / state.loadUserState.fap).toString()
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    onResetCounter: (e) => {
      e.preventDefault();
      dispatch(resetCounter())
    }
  }
}



class ResetCard extends React.Component {
  constructor(props) {
    super(props);
  }

  //
  // onSubmitReset = (e) => {
  //   e.preventDefault();
  //   let pBox = document.querySelector("#p");
  //   let mBox = document.querySelector("#m");
  //   let oBox = document.querySelector("#o");
  //
  //   fetch("http://localhost:8080/reset", {
  //     method: 'post',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //       p: pBox.checked,
  //       m: mBox.checked,
  //       o: oBox.checked
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(res => console.log(res));
  //
  //
  //   // loaduser
  // }

  // const calculateTotalTime = () => {
  //   let totalTime = this.props.joined - Date.now();
  //   return totalTime;
  // }

  render() {
    return(
      <div id="resetcard" className="ba b--black-10 br4 w-100 w-40-m w-40-l mw7 shadow-3 center ma2">
        <form>
          <fieldset className="ba b--transparent ph0 mh0 tc">
            <legend className="tc f1 fw6 white">Reset</legend>
            <div className="ma2 ba b--white w-30 tc br4 dib">
              <label className="white db fw6 lh-copy f2" htmlFor="p">P</label>
              <input className="pa2" type="checkbox" id="p" value="0"/>
            </div>
            <div className="ma2 ba b--white w-30 tc br4 dib">
              <label className="white db fw6 lh-copy f2" htmlFor="m">M</label>
              <input className="pa2" type="checkbox" id="m" value="0"/>
            </div>
            <div className="ma2 ba b--white w-30 tc br4 dib">
              <label className="white db fw6 lh-copy f2" htmlFor="o">O</label>
              <input className="pa2" type="checkbox" id="o" value="0"/>
            </div>
            <div className="ma3 tc">
              <input onClick={this.props.onResetCounter} className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f3 dib white" type="submit" value="Submit" />
            </div>
            <div className="ma3 tc ba b--white">
              <p className="i ma2 f3 white">DO NOT BINGE! YOUR CURRENT AVERAGE DAYS-PER-FAP RATIO IS <span className="b">{this.props.totalTime}</span></p>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(ResetCard);
