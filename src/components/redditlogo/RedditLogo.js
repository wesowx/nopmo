import React from 'react';
import Tilt from 'react-tilt';
import redditicon  from './redditicon.png';
import './RedditLogo.css';


function RedditLogo() {
  return(
    <div className="container">
      <Tilt className="Tilt pa3 br-100" options={{ max : 70, perspective: 1000 }}>
        <div className="Tilt-inner pa2 tc">
          <a href="https://www.reddit.com/r/NoFap/" target="_blank">
            <img className="icon" src={redditicon}/>
          </a>
        </div>
      </Tilt>
    </div>
  );
}

export default RedditLogo;
