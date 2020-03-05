import React from 'react';
import Tilt from 'react-tilt';
import reseticon  from './reseticon.png';
import './ResetButton.css';
import {connect} from 'react-redux';
import {routeChange} from '../../actions.js';


const mapStatetoProps = (state) => {
  return state
}

const mapDispatchtoProps = (dispatch) => {
  return {
    onRouteChange: (e,route) => {
      e.preventDefault();
      dispatch(routeChange(route));
    }
  }
}


class ResetButton extends React.Component {
  render() {
    return(
      <div className="container">
        <p className="b reset white ma1 tc">Reset</p>
        <Tilt className="Tilt pa3 br-100" options={{ max : 70, perspective: 1000 }}>
          <div onClick={(e)=>this.props.onRouteChange(e,'resetcard')} className="Tilt-inner pa2 tc">
            <img className="icon grow pointer" src={reseticon}/>
          </div>
        </Tilt>
      </div>
    );
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(ResetButton);
