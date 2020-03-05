import React from 'react';
import fapper from '../rankcard/fapper.png';
import fapsoldier from '../rankcard/fapsoldier.png';
import fapwizard from '../rankcard/fapwizard.png';
import faplord from '../rankcard/faplord.png';
import fapstronaut from '../rankcard/fapstronaut.png';
import right from './right-arrow.png';
import './Sidebar.css';
import {connect} from 'react-redux';
import {routeChange} from '../../actions.js';


const mapStatetoProps = (state) => {
  return {
    currentRank: state.loadUserState.rank,
    name: state.loadUserState.name
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    onRouteChange: (e,route) => {
      e.preventDefault();
      dispatch(routeChange(route));  }
    }
}




class Sidebar extends React.Component {

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
    let profileRankImg = document.querySelector("#sidebaricon");
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
      <div className="body">
        <div className="wrapper d-flex align-items-stretch">
          <nav id="sidebar">
            <div className="custom-menu">
              <input type="image" onClick={this.props.toggleSidebar} id="sidebarCollapse" src={right} />
            </div>
            <div className="img bg-wrap text-center py-4">
              <div className="user-logo">
                <img id='sidebaricon' src=''/>
                <h3>{this.props.name}</h3>
              </div>
            </div>
            <ul className="list-unstyled components mb-5">
              <li className="active">
                <a onClick={(e)=>this.props.onRouteChange(e,'home')} href=""><span className="fa fa-home mr-3"></span> Profile</a>
              </li>
              <li>
                <a onClick={(e)=>this.props.onRouteChange(e,'motivation')} href=""><span className="fa fa-gift mr-3"></span> Motivation</a>
              </li>
              <li>
                <a onClick={(e)=>this.props.onRouteChange(e,'research')} href=""><span className="fa fa-trophy mr-3"></span> Research</a>
              </li>
              <li>
                <a onClick={(e)=>this.props.onRouteChange(e,'signIn')} href=""><span className="fa fa-cog mr-3"></span> Sign out</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}


export default connect(mapStatetoProps,mapDispatchtoProps)(Sidebar);
