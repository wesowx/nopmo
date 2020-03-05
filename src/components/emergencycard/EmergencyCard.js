import React from 'react';
import './EmergencyCard.css';



class EmergencyCard extends React.Component {
  constructor(props) {
    super(props);
  }

  countdown = (limit) => {
    console.log('hi');
    const target = document.querySelector("#number");
    let num = 5;
    const change = setInterval(
          () => {
            target.innerHTML = num--;
            if (num == limit) {
              target.innerHTML = "GO";
              clearInterval(change);
            }
          },
          1000
        );

  }


  componentDidMount() {
    this.countdown(-1);
  }


  render() {
    return (
      <div id="emergencycard" className="white ba b--black-10 bw1 w-100 w-60-m w-60-l br4 mw7 shadow-6 center ma4">
        <p className="f2 ma4 tc">GO TAKE A COLD SHOWER <span className="b"> IMMEDIATELY</span> AFTER THIS COUNTDOWN</p>
        <div className="ma4 ba b--white tc mw6 center">
          <h1 id="number" className="white f-6 lh-solid">5</h1>
        </div>
        <p className="f2 ma4 tc b">JUST DO IT</p>
      </div>
    );
  }
}

export default EmergencyCard;
