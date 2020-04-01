import React from 'react';
import './App.css';
import RankIcon from '../components/rankicon/RankIcon';
import EmergencyButton from '../components/emergencybutton/EmergencyButton';
import EmergencyCard from '../components/emergencycard/EmergencyCard';
import RedditLogo from '../components/redditlogo/RedditLogo';
import Sidebar from '../components/sidebar/Sidebar';
import SignIn from '../components/signin/SignIn';
import Register from '../components/register/Register';
import ResetButton from '../components/resetbutton/ResetButton';
import PmoCounter from '../components/pmocounter/PmoCounter';
import ResetCard from '../components/resetcard/ResetCard';
import RankCard from '../components/rankcard/RankCard';
import Profile from '../components/profile/Profile';
import Research from '../components/research/Research';
import Motivation from '../components/motivation/Motivation';
import Journal from '../components/journal/Journal';
import Streak from '../components/streak/Streak';
import {connect} from 'react-redux';

const mapStatetoProps = (state) => {
  return {
    route: state.changeRoute.route
  }
}



class App extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {test:'success'};
  // }

  toggleSidebar = (e) => {
    const sidebar = document.querySelector("#sidebar");
    sidebar.classList.toggle("active");
    const menuButton = document.querySelector(".custom-menu");
    menuButton.classList.toggle("active");
    const others = document.querySelector('#nonsidebar');
    others.classList.toggle("sidebaractive")
  }


  render() {
    if (this.props.route === 'signIn') {
      return(
        <div id="app">
          <SignIn/>
        </div>
      );
    } else if (this.props.route === 'register') {
      return(
        <div id="app">
          <Register/>
        </div>
      );
    } else if (this.props.route === 'home') {
      return(
        <div id="app">
          <Sidebar toggleSidebar={this.toggleSidebar}/>
          <div id="nonsidebar">
            <PmoCounter/>
            <Profile/>
            <RankIcon/>
            <EmergencyButton/>
            <ResetButton/>
            <RedditLogo/>
          </div>
        </div>
      )
    } else if (this.props.route === 'rankcard') {
      return(
        <div id="app">
          <Sidebar toggleSidebar={this.toggleSidebar}/>
          <div id="nonsidebar">
            <PmoCounter/>
            <RankCard/>
            <RankIcon/>
            <EmergencyButton/>
            <ResetButton/>
            <RedditLogo/>
          </div>
        </div>
      );
    } else if (this.props.route === 'emergencycard') {
      return(
        <div id="app">
          <Sidebar toggleSidebar={this.toggleSidebar}/>
          <div id="nonsidebar">
            <PmoCounter/>
            <EmergencyCard/>
            <RankIcon/>
            <EmergencyButton/>
            <ResetButton/>
            <RedditLogo/>
          </div>
        </div>
      );
    } else if (this.props.route === 'resetcard') {
      return(
        <div id="app">
          <Sidebar toggleSidebar={this.toggleSidebar}/>
          <div id="nonsidebar">
            <PmoCounter/>
            <ResetCard/>
            <RankIcon/>
            <EmergencyButton/>
            <ResetButton/>
            <RedditLogo/>
          </div>
        </div>
      );
    } else if (this.props.route === 'research') {
      return(
        <div id="app">
          <Sidebar toggleSidebar={this.toggleSidebar}/>
          <div id="nonsidebar">
            <PmoCounter/>
            <Research/>
            <RankIcon/>
            <EmergencyButton/>
            <ResetButton/>
            <RedditLogo/>
          </div>
        </div>
      );
    } else if (this.props.route === 'motivation') {
      return(
        <div id="app">
          <Sidebar toggleSidebar={this.toggleSidebar}/>
          <div id="nonsidebar">
            <PmoCounter/>
            <Motivation/>
            <RankIcon/>
            <EmergencyButton/>
            <ResetButton/>
            <RedditLogo/>
          </div>
        </div>
      );
    } else if (this.props.route === 'streak') {
      return(
        <div id="app">
          <Sidebar toggleSidebar={this.toggleSidebar}/>
          <div id="nonsidebar">
            <PmoCounter/>
            <Streak/>
            <RankIcon/>
            <EmergencyButton/>
            <ResetButton/>
            <RedditLogo/>
          </div>
        </div>
      );
    }


    // return(
    //   <div id="app">
    //     <Sidebar/>
    //     <PmoCounter/>
    //     <SignIn/>
    //     <Register/>
    //     <EmergencyCard/>
    //     <ResetCard/>
    //     <RankCard/>
    //     <RankIcon/>
    //     <EmergencyButton/>
    //     <ResetButton/>
    //     <RedditLogo/>
    //   </div>
    // );
  };
}



export default connect(mapStatetoProps)(App);
