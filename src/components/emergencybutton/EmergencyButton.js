import React from 'react';
import Tilt from 'react-tilt';
import emergencybutton  from './emergencybutton.png';
import './EmergencyButton.css';
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


class EmergencyButton extends React.Component {
  render() {
    return(
      <div className="container">
        <p className="b emergency white ma1 tc">Emergency</p>
        <Tilt className="Tilt pa3 br-100" options={{ max : 70, perspective: 1000 }}>
          <div onClick={(e)=>this.props.onRouteChange(e,'emergencycard')} className="Tilt-inner pa2 tc">
            <img className="icon grow pointer" src={emergencybutton}/>
          </div>
        </Tilt>
      </div>
    );
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(EmergencyButton);
