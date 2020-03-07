import React from 'react';
import fapper from './fapper.png';
import fapsoldier from './fapsoldier.png';
import fapwizard from './fapwizard.png';
import faplord from './faplord.png';
import fapstronaut from './fapstronaut.png';
import './RankCard.css';
import {connect} from 'react-redux';


const mapStatetoProps = (state) => {
  return {
    rank: state.loadUserState.rank
  }
}

class RankCard extends React.Component {
  constructor(props) {
    super(props);
  }

  currentRankImg = () => {
    let rank = this.props.rank;

    if (rank === 'Fapper') {
      return fapper;
    } else if (rank === 'Fapsoldier') {
      return fapsoldier;
    } else if (rank === 'Fapwizard') {
      return fapwizard;
    } else if (rank === 'Faplord') {
      return faplord;
    } else if (rank === 'Fapstronaut') {
      return fapstronaut;
    }
  }

  attachCurrentRankImg = (image) => {
    let currentRankImg = document.querySelector("#currentRankImg");
    console.log(image);
    currentRankImg.setAttribute("src", image);
  }

  componentDidMount() {
    this.attachCurrentRankImg(this.currentRankImg())
  }

  render() {
    return(
      <div id="rankcard" className="ba b--black-10 br4 w-100 w-40-m w-40-l mw7 shadow-3 center ma2">
        <fieldset className="ba b--white w-95 ma1 mh2 br2">
          <legend className="tc f3 fw6 ma1 white w-30 center">Current rank</legend>
          <div className="dib w-100 ma2 center tc">
            <img className='rankimg center' id='currentRankImg' src=''/>
          </div>
          <div className="dib br2 ba b--white w-100 ma1 center">
            <p className="white f4 tc ma0 b">{this.props.rank}</p>
          </div>
        </fieldset>
        <fieldset className="ba b--white w-95 ma1 mh2 br2">
          <legend className="tc f3 fw6 ma1 white w-20 center">Ranks</legend>
          <div className='flex w-100 items-center'>
            <div className="dib w-10 ma2">
              <img className='rankimg' src={fapper}/>
            </div>
            <div className="dib br2 ba b--white w-90 ma2">
              <p className="white f6 ma1"><span className='b'>Rank: Fapper [0 - 6 days] (o C</span>ounter)<br/>The start of a journey, usually the hardest phase. Stay strong, keep your days activity-filled.</p>
            </div>
          </div>
          <div className='flex w-100 items-center'>
            <div className="dib w-10 ma2">
              <img className='rankimg' src={fapsoldier}/>
            </div>
            <div className="dib br2 ba b--white w-90 ma2">
              <p className="white f6 ma1"><span className='b'>Rank: Fapsoldier [7 - 29 days]</span><br/>You may have felt some changes/benefits in your mental state, keep it up!</p>
            </div>
          </div>
          <div className='flex w-100 items-center'>
            <div className="dib w-10 ma2">
              <img className='rankimg' src={fapwizard}/>
            </div>
            <div className="dib br2 ba b--white w-90 ma2">
              <p className="white f6 ma1"><span className='b'>Rank: Fapwizard [30 - 89 days]</span><br/>Give yourself a pat on the back, only 0.7% of men worldwide hit this milestone!(fake stats)<br/>You should be feeling significant benefits around this time, but sometimes you might not think so as humans have a tendency to adapt. Remember what you were like at the start of this journey!</p>
            </div>
          </div>
          <div className='flex w-100 items-center'>
            <div className="dib w-10 ma2">
              <img className='rankimg' src={faplord}/>
            </div>
            <div className="dib br2 ba b--white w-90 ma2">
              <p className="white f6 ma1"><span className='b'>Rank: Faplord [90 days - 364 d</span>ays]<br/>Congratulations, you reached the 90-day milestone coveted by many in this community!<br/>Beware of flatlines and don't get too complacent, proud of you.</p>
            </div>
          </div>
          <div className='flex w-100 items-center'>
            <div className="dib w-10 ma2">
              <img className='rankimg' src={fapstronaut}/>
            </div>
            <div className="dib br2 ba b--white w-90 ma2">
              <p className="white f6 ma1"><span className='b'>Rank: Fapstronaut [365 days an</span>d above]<br/>You made it. Now stop using this and go live life.</p>
            </div>
          </div>
        </fieldset>
      </div>
    );
  }

}

// export default RankCard;

export default connect(mapStatetoProps)(RankCard);
