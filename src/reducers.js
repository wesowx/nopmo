import {NAME_FIELD, USERNAME_FIELD, PASSWORD_FIELD} from './constants.js';
import {LOAD_USER, CREATE_USER} from './constants.js';
import {CHANGE_ROUTE} from './constants.js';
import {RESET_COUNTER} from './constants.js';
import {UPDATE_RANK} from './constants.js';
import {RESET_LOG, JOURNAL_LOG} from './constants.js';




// REDUCERS FOR SIGNIN COMPONENT

const initialSigninState = {
  signInUsername: '',
  signInPassword: ''
}

export const changeSigninState = (state=initialSigninState, action={}) => {
  switch(action.type) {
    case USERNAME_FIELD:
      return Object.assign({},state,{signInUsername:action.payload});
    case PASSWORD_FIELD:
      return Object.assign({},state,{signInPassword:action.payload});
    default:
      return state;
  }
}

// export const changePasswordState = (state=initialSigninState, action={}) => {
//   switch(action.type) {
//     case PASSWORD_FIELD:
//       return Object.assign({},state,{signInPassword:action.payload});
//     default:
//       return state;
//   }
// }

// REDUCERS FOR REGISTER COMPONENT

const initialRegisterState = {
  registerUsername: '',
  registerName: '',
  registerPassword: ''
}

export const changeRegisterState = (state=initialRegisterState, action={}) => {
  switch(action.type) {
    case USERNAME_FIELD:
      return Object.assign({},state,{registerUsername:action.payload});
    case NAME_FIELD:
      return Object.assign({},state,{registerName:action.payload});
    case PASSWORD_FIELD:
      return Object.assign({},state,{registerPassword:action.payload});
    default:
      return state;
  }
}

// export const changeRegisterNameState = (state=initialRegisterState, action={}) => {
//   switch(action.type) {
//     case NAME_FIELD:
//       return Object.assign({},state,{registerName:action.payload});
//     default:
//       return state;
//   }
// }
//
// export const changeRegisterPasswordState = (state=initialRegisterState, action={}) => {
//   switch(action.type) {
//     case PASSWORD_FIELD:
//       return Object.assign({},state,{registerPassword:action.payload});
//     default:
//       return state;
//   }
// }

// REDUCER FOR LOADING USER state

const initialUserState = {
  id: '',
  username: '',
  name: '',
  p: '',
  m: '',
  o: '',
  joined: '',
  rank: ''
}

export const loadUserState = (state=initialUserState, action={}) => {
  switch(action.type) {
    case LOAD_USER:
      return Object.assign({},state,{id:action.payload.id, username:action.payload.username, name:action.payload.name,
        p:action.payload.p, m:action.payload.m, o:action.payload.o, fap:action.payload.fap, joined:action.payload.joined, rank:action.payload.rank, currentstreakid:action.payload.currentstreakid});
    case CREATE_USER:
      return Object.assign({},state,{id:action.payload.id, username:action.payload.username, name:action.payload.name,
        p:action.payload.p, m:action.payload.m, o:action.payload.o, fap:action.payload.fap, joined:action.payload.joined, rank:action.payload.rank, currentstreakid:action.payload.currentstreakid});
    case RESET_COUNTER:
      return Object.assign({},state,{p:action.payload.p, m:action.payload.m, o:action.payload.o, fap:action.payload.fap, currentstreakid: action.payload.currentstreakid});
    case UPDATE_RANK:
      return Object.assign({},state,{rank: action.payload.rank});
    default:
      return state;
  }
}

// REDUCER TO CHANGE Routes

const initialRoute = {
  route: 'signIn'
}


export const changeRoute = (state=initialRoute, action={}) => {
  switch(action.type) {
    case CHANGE_ROUTE:
      return Object.assign({},state,{route:action.payload});
    default:
      return state
  }
}

// REDUCER TO STORE RESET AND JOURNAL LOGS

const initialStreakLogs = []

export const updateStreakLogs = (state=initialStreakLogs,action={}) => {
  switch(action.type) {
    case RESET_LOG:
      return [
        ...state,
        action.payload
      ]
    case JOURNAL_LOG:
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}

//REDUCER TO STORE CURRENT STREAK

const initialCurrentStreak = {
  logs: []
}


export const loadCurrentStreak = (state=initialCurrentStreak,action={}) => {
  switch(action.type) {
    case CURRENT_STREAK:
      return Object.assign({},state,{logs:action.payload})
  }
}
