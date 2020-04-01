import React from 'react';
import PastStreakListItem from './PastStreakListItem.js'
import {connect} from 'react-redux';

const mapStatetoProps = (state) => {
  return {
    paststreaks: state.loadPastStreakList.paststreaks
  }
}

class PastStreakList extends React.Component {
  render() {
    const paststreaklist = this.props.paststreaks;

    const paststreakarray = paststreaklist.map(
      (item,i) => {
        return <PastStreakListItem key={i} id={i} streakid={item.streakid} startdate={new Date(item.startdate).toString()} enddate={new Date(item.enddate).toString()}/>
      }
    )


    return(
      <div>
        {paststreakarray}
      </div>
    );
  }
}



export default connect(mapStatetoProps)(PastStreakList);
