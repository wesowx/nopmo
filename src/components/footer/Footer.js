import React from 'react';
import github from './github.png';


class Footer extends React.Component {
  render() {
    return(
      <div className='w-100 bg-transparent f6 white b tc'>
        <p className='courier dib ma1'>Made by wesowx</p>
        <a className='dib ma1' href="https://github.com/wesowx" target="_blank">
          <img src={github}/>
        </a>
      </div>
    );
  }
}


export default Footer
