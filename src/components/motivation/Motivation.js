import React from 'react';
import mountain from './mountain.jpg';
import cactus from './cactus.jpg';
import stars from './stars.jpg';
import sunset from './sunset.jpg';
import volcano from './volcano.jpg';
import './Motivation.css';

const quote1 = "The days that break you are the days that make you";
const quote2 = "Don't count the days, make the days count";
const quote3 = "When there is no enemy within, the enemies outside can do no harm";
const quote4 = "Progress demands sacrifice";
const quote5 = "We gain the strength of the temptation we resist";


class Motivation extends React.Component {

  randInt = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  randomizeBackground = () => {
    let randInt = this.randInt(1,5);

    if (randInt === 1) {
      return mountain;
    } else if (randInt === 2) {
      return cactus;
    } else if (randInt === 3) {
      return stars;
    } else if (randInt === 4) {
      return sunset;
    } else if (randInt === 5) {
      return volcano;
    }
  }

  setBackground = (background) => {
    let back = document.querySelector("#background");
    back.setAttribute("style", `background-image: url(${background})`);
  }

  setQuote = (text) => {
    let quote = document.querySelector("#quote");
    quote.innerHTML = text
  }

  randomizeQuote = () => {
    let randInt = this.randInt(1,5);

    if (randInt === 1) {
      return quote1;
    } else if (randInt === 2) {
      return quote2;
    } else if (randInt === 3) {
      return quote3;
    } else if (randInt === 4) {
      return quote4;
    } else if (randInt === 5) {
      return quote5;
    }
  }

  componentDidMount() {
    this.setQuote(this.randomizeQuote());
  }

  render() {
    return(
      <div id="background" className="flex items-center ba b--black-10 br4 w-100 w-40-m w-40-l mw7 center h-75 shadow-3 ma2 tc">
        <p id="quote" className="calisto b f-subheadline white tc center"></p>
      </div>
    );
  }
}


export default Motivation;
