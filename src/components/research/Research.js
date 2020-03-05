import React from 'react';
import './Research.css';


const Research = () => {
  return(
    <div id="researchcard" className="ba b--black-10 br4 w-100 w-40-m w-40-l mw7 shadow-3 center ma2">
      <fieldset className="flex ba b--white w-95 ma2 br2">
        <legend className="tc f3 fw6 ma1 white w-30">Your Brain on Porn</legend>
        <div className="dib br2 ba b--white w-100 ma2 center">
          <p className="white f3 tc ma1 b">Addiction-related brain changes: <br/>Sensitization<br/>Desensitization<br/>Hypofrontality(willpower erosion)</p>
        </div>
        <div className="dib br2 ba b--white w-100 ma2 mv3 center">
          <p className="white f3 tc ma1 b">Damaged reward circuit</p>
        </div>
        <div className="dib br2 ba b--white w-100 ma2 mv3 center">
          <p className="white f3 tc ma1 b">Lower sexual/relationship satisfaction</p>
        </div>
        <div className="dib br2 ba b--white w-100 ma2 mv3 center">
          <p className="white f3 tc ma1 b">Decreased mental-emotional health and cognitive ability</p>
        </div>
        <div className="dib br2 ba b--white w-100 ma2 mv3 center">
          <p className="white f3 tc ma1 b">Links to "un-egalitarian attitudes" and sexist views</p>
        </div>
        <div className="dib bg--light-gray br2 ba b--white w-50 ma2 mv3 center tc">
          <a href="https://www.yourbrainonporn.com/relevant-research-and-articles-about-the-studies/brain-studies-on-porn-users-sex-addicts/" target="_blank" className="white f3 tc ma1 b">Sources</a>
        </div>
      </fieldset>
    </div>
  );
}


export default Research;
