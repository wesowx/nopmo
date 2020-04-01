import React from 'react';
import PastStreakList from './PastStreakList';
import PastStreakZoom from './PastStreakZoom';
import {connect} from 'react-redux';
import {loadAllPastStreaks} from '../../actions.js';


const mapStatetoProps = (state) => {
  return {
    paststreakroute: state.changeRoute.paststreakroute
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    loadAllPastStreaks: () => dispatch(loadAllPastStreaks())
  }
}


class PastStreak extends React.Component {

  componentDidMount() {
    this.props.loadAllPastStreaks();
  }

  componentDidUpdate() {
    this.props.loadAllPastStreaks();
  }

  render() {
    const {paststreakroute} = this.props;

    if (paststreakroute === 'list') {
      return(
        <PastStreakList/>
      )
    } else if (paststreakroute === 'zoom') {
      return(
        <PastStreakZoom/>
      )
    }

  }
}



export default connect(mapStatetoProps,mapDispatchtoProps)(PastStreak);
