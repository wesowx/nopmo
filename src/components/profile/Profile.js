import React from 'react';
import fapper from './fapper.png';
import fapsoldier from './fapsoldier.png';
import fapwizard from './fapwizard.png';
import faplord from './faplord.png';
import fapstronaut from './fapstronaut.png';
import {connect} from 'react-redux';
import './Profile.css';

// **** PROBLEM: LOADUSER ACTION IS CALLED AFTER COMPONENT MOUNTED, SOLUTION IS TO CALL ATTACHIMG METHOD WITH COMPONENTDIDUPDATE

const mapStatetoProps = (state) => {
  return {
    currentRank: state.loadUserState.rank,
    name: state.loadUserState.name,
    joined: new Date(state.loadUserState.joined),
    daysPerFap: ((Date.now() - Date.parse(state.loadUserState.joined)) / 8.64e+7 / state.loadUserState.fap).toString(),
    lastFap: new Date(state.loadUserState.o)
  }
}

class Profile extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

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
    let profileRankImg = document.querySelector("#profileRankImg");
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
      <div id='profilecard' className="ba b--black-10 br4 w-100 w-40-m w-40-l mw7 shadow-3 center ma2">
        <fieldset className="flex ba b--white w-95 ma2 br2">
          <legend className="tc f3 fw6 ma1 white w-30">Profile</legend>
          <div className="dib w-20 ma2 center tc">
            <img id='profileRankImg' src=''/>
          </div>
          <div className="dib br2 ba b--white w-100 ma2 center">
            <p className="white f3 tc ma1 b">{`Name: ${this.props.name}`}</p>
          </div>
          <div className="dib br2 ba b--white w-100 ma2 center">
            <p className="white f3 tc ma1 b">{`Rank: ${this.props.currentRank}`}</p>
          </div>
          <div className="dib br2 ba b--white w-100 ma2 center">
            <p className="white f3 tc ma1 b">{`Joined: ${this.props.joined}`}</p>
          </div>
          <div className="dib br2 ba b--white w-100 ma2 center">
            <p className="white f3 tc ma1 b">{`Last Fap(o): ${this.props.lastFap}`}</p>
          </div>
          <div className="dib br2 ba b--white w-100 ma2 center">
            <p className="white f3 tc ma1 b">{`Average days-per-fap: ${this.props.daysPerFap}`}</p>
          </div>
        </fieldset>
      </div>
    );
  }

}

// export default RankCard;

export default connect(mapStatetoProps)(Profile);
