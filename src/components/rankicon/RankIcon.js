import React from 'react';
import Tilt from 'react-tilt';
import fapper from '../rankcard/fapper.png';
import fapsoldier from '../rankcard/fapsoldier.png';
import fapwizard from '../rankcard/fapwizard.png';
import faplord from '../rankcard/faplord.png';
import fapstronaut from '../rankcard/fapstronaut.png';
import './RankIcon.css';
import {connect} from 'react-redux';
import {routeChange} from '../../actions.js';


const mapStatetoProps = (state) => {
  return {
    currentRank: state.loadUserState.rank
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    onRouteChange: (e,route) => {
      e.preventDefault();
      dispatch(routeChange(route));
    }
  }
}


class RankIcon extends React.Component {

  profileRankImg = () => {
    let currentRank = this.props.currentRank;
    if (currentRank === 'Fapper') {
      return fapper;
    } else if (currentRank === 'Fapsoldier') {
      return fapsoldier;
    } else if (currentRank === 'Fapwizard') {
      return fapwizard;
    } else if (currentRank === 'Faplord') {
      return faplord;
    } else if (currentRank === 'Fapstronaut') {
      return fapstronaut;
    }
  }

  attachProfileRankImg = (image) => {
    let profileRankImg = document.querySelector("#smallicon");
    console.log(image);
    profileRankImg.setAttribute("src", image);
  }

  componentDidUpdate() {
    this.attachProfileRankImg(this.profileRankImg())
  }

  componentDidMount() {
    this.attachProfileRankImg(this.profileRankImg())
  }

  render() {
    return(
      <div className="container">
        <p className="b rank white ma1 tc">{`Rank: ${this.props.currentRank}`}</p>
        <Tilt className="Tilt pa3 br-100" options={{ max : 70, perspective: 1000 }}>
          <div onClick={(e)=>this.props.onRouteChange(e,'rankcard')} className="Tilt-inner pa0 tc">
            <img id="smallicon" className="icon pointer grow" src=''/>
          </div>
        </Tilt>
      </div>
    );
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(RankIcon);
