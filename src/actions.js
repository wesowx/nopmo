import {NAME_FIELD, USERNAME_FIELD, PASSWORD_FIELD} from './constants.js';
import {LOAD_USER, CREATE_USER} from './constants.js';
import {CHANGE_ROUTE} from './constants.js';
import {RESET_COUNTER} from './constants.js';
import {UPDATE_RANK} from './constants.js';



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
      username: getState().changeUsernameState.signInUsername,
      password: getState().changePasswordState.signInPassword
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
      name: getState().changeRegisterNameState.registerName,
      username: getState().changeRegisterUsernameState.registerUsername,
      password: getState().changeRegisterPasswordState.registerPassword
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
      username: getState().loadUserState.username
    })
  })
  .then(res => res.json())
  .then(user => dispatch({type:RESET_COUNTER, payload:user}))
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
