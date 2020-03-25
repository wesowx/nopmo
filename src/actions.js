import {NAME_FIELD, USERNAME_FIELD, PASSWORD_FIELD} from './constants.js';
import {LOAD_USER, CREATE_USER} from './constants.js';
import {CHANGE_ROUTE} from './constants.js';
import {RESET_COUNTER} from './constants.js';
import {UPDATE_RANK} from './constants.js';
import {RESET_LOG,JOURNAL_LOG} from './constants.js';



// ACTIONS FOR INPUT PORTION OF SIGNIN AND REGISTER COMPONENTS

export const setUsernameField = (text) => {
  return {
    type: USERNAME_FIELD,
    payload: text
  }
}

export const setPasswordField = (text) => {
  return {
    type: PASSWORD_FIELD,
    payload: text
  }
}


export const setNameField = (text) => {
  return {
    type: NAME_FIELD,
    payload: text
  }
}
//
// export const setRegisterEmailField = (text) => {
//   return {
//     type: REGISTER_EMAIL_FIELD,
//     payload: text
//   }
// }
//
// export const setRegisterPasswordField = (text) => {
//   return {
//     type: REGISTER_PASSWORD_FIELD,
//     payload: text
//   }
// }

// ACTION TO LOAD AND CREATE USER

export const submitSignIn = () => (dispatch, getState) => {
  console.log('hi');

  fetch("https://immense-garden-67456.herokuapp.com/signin", {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      username: getState().changeSigninState.signInUsername,
      password: getState().changeSigninState.signInPassword
    })
  })
  .then(response => response.json())
  .then(user => {
    if (user.id) {
      dispatch({type:LOAD_USER, payload:user});
      dispatch({type:CHANGE_ROUTE, payload:'home'})
    } else {
      alert(user);
    }
  })
}

export const submitRegister = () => (dispatch, getState) => {

  fetch("https://immense-garden-67456.herokuapp.com/register", {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      name: getState().changeRegisterState.registerName,
      username: getState().changeRegisterState.registerUsername,
      password: getState().changeRegisterState.registerPassword
    })
  })
  .then(response => response.json())
  .then(user => {
    if (user.id) {
      dispatch({type:LOAD_USER, payload:user});
      dispatch({type:CHANGE_ROUTE, payload:'home'})
    } else {
      alert(user);
    }
  })
}

// ACTION TO CHANGE ROUTES

export const routeChange = (route) => {
  return {
    type: CHANGE_ROUTE,
    payload: route
  }
}

// ACTION TO RESET counter

export const resetCounter = () => (dispatch,getState) => {
  let pBox = document.querySelector("#p");
  let mBox = document.querySelector("#m");
  let oBox = document.querySelector("#o");

  fetch("https://immense-garden-67456.herokuapp.com/reset", {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      p: pBox.checked,
      m: mBox.checked,
      o: oBox.checked,
      username: getState().loadUserState.username,
      currentstreakid: getState().loadUserState.currentstreakid
    })
  })
  .then(res => res.json())
  .then(user => dispatch({type:RESET_COUNTER, payload:user}))

  dispatch({type:CHANGE_ROUTE, payload:'home'});
}


// ACTION CREATOR TO FETCH UPDATERANK API, AND DISPATCH UPDATED RANK TO state

export const updateRank = (newrank) => (dispatch, getState) => {
  fetch("https://immense-garden-67456.herokuapp.com/updaterank", {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      rank: newrank,
      username: getState().loadUserState.username
    })
  })
  .then(res => res.json())
  .then(user => dispatch({type:UPDATE_RANK, payload:user}))
}


// ACTION CREATOR TO UPDATE STREAKLOG STATE WITH JOURNAL LOG (for this state, send to state first THEN when streak ends fetch server to update streak table in database)

export const submitJournal = () => (dispatch, getState) => {
  const moodValue = document.querySelector('#Mood').value;
  const confidenceValue = document.querySelector('#Confidence').value;
  const cognitionValue = document.querySelector('#Cognition').value;
  const motivationValue = document.querySelector('#Motivation').value;
  const productivityValue = document.querySelector('#Productivity').value;
  const writeupValue = document.querySelector('#writeup').value;


  if (moodValue.length && confidenceValue.length && cognitionValue.length && motivationValue.length && productivityValue.length) {
    fetch("https://immense-garden-67456.herokuapp.com/journal", {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: getState().loadUserState.username,
        currentstreakid: getState().loadUserState.currentstreakid,
        mood: moodValue,
        confidence: confidenceValue,
        cognition: cognitionValue,
        motivation: motivationValue,
        productivity: productivityValue,
        writeup: writeupValue
      })
    })
    .then(res => res.json())
    .then(user => alert(user))
  } else {
    alert('Please fill up the indicators, you can leave write-up blank')
  }

}

// ACTION CREATOR TO FETCH CURRENTSTREAK AND DISPATCH TO state

export const loadCurrentStreak = () => (dispatch, getState) => {
  fetch("https://immense-garden-67456.herokuapp.com/currentstreak", {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      currentstreakid: getState().loadUserState.currentstreakid
    })
  })
  .then(res => res.json())
  .then(streak => dispatch({
    type: CURRENT_STREAK,
    payload: streak
  }))
}
