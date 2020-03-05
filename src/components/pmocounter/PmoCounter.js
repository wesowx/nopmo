import React from 'react';
import {store} from '../../index.js';
import {connect} from 'react-redux';
import './PmoCounter.css';
import {updateRank} from '../../actions.js';

// One of 2 ways to get state, this is through redux library, importing the store from index and getstate from there.
const mapStatetoProps = (state) => {
  return {
    p: new Date(store.getState().loadUserState.p).getTime(),
    m: new Date(store.getState().loadUserState.m).getTime(),
    o: new Date(store.getState().loadUserState.o).getTime()
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    updateRank: (newrank) => {
      dispatch(updateRank(newrank));
    }
  }
}

class PmoCounter extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     p: 1,
  //     m: 2,
  //     o: 3
  //   }
  // }

  computePMO = () => {
    const getDay = 1 / 8.64e+7;
    let pCounter = document.querySelector("#pCounter");
    let mCounter = document.querySelector("#mCounter");
    let oCounter = document.querySelector("#oCounter");

    let pDays = Math.floor((new Date(new Date().getTime() +  1000) - this.props.p) * getDay);
    let mDays = Math.floor((new Date(new Date().getTime() +  1000) - this.props.m) * getDay);
    let oDays = Math.floor((new Date(new Date().getTime() +  1000) - this.props.o) * getDay);

    console.log(this.props.p);
    console.log('testPMO');

    pCounter.innerHTML = `:${pDays}`
    mCounter.innerHTML = `:${mDays}`
    oCounter.innerHTML = `:${oDays}`
  }

  rankUpdate = () => {
    let oCounter = document.querySelector("#oCounter");
    const getDay = 1 / 8.64e+7;
    let oDays = Math.floor((new Date(new Date().getTime() +  1000) - this.props.o) * getDay);

    console.log(`Testupdaterank: oDays is ${oDays}`);

    if (oDays >= 365) {
      this.props.updateRank("Fapstronaut");
    } else if (oDays >= 90) {
      this.props.updateRank("Faplord");
    } else if (oDays >= 30) {
      this.props.updateRank("Fapwizard");
    } else if (oDays >= 7) {
      this.props.updateRank("Fapsoldier");
    } else {
      this.props.updateRank("Fapper");
    }
  }

  componentDidMount() {
    this.computePMO();
    this.rankUpdate();
  }

  componentDidUpdate() {
    this.computePMO();
    this.rankUpdate();
  }



  render() {
    return(
      <div id="counter" className='white flex justify-center'>
        <div className='ph4 flex'>
          <p className='b f1'>P</p>
          <p id="pCounter" className='f1'></p>
        </div>
        <div className='ph4 flex'>
          <p className='b f1'>M</p>
          <p id="mCounter" className='f1'></p>
        </div>
        <div className='ph4 flex'>
          <p className='b f1'>O</p>
          <p id="oCounter" className='f1'></p>
        </div>
      </div>
    );
  }
}


export default connect(mapStatetoProps,mapDispatchtoProps)(PmoCounter);
