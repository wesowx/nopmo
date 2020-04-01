import {NAME_FIELD, USERNAME_FIELD, PASSWORD_FIELD} from './constants.js';
import {LOAD_USER, CREATE_USER} from './constants.js';
import {CHANGE_ROUTE} from './constants.js';
import {RESET_COUNTER} from './constants.js';
import {UPDATE_RANK} from './constants.js';
import {CURRENT_STREAK, PAST_STREAK, PAST_STREAK_LIST, STREAK_MODE, PAST_STREAK_MODE, PAST_STREAK_INFO} from './constants.js';




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
  route: 'signIn',
  streakroute: 'currentStreak',
  paststreakroute: 'list'
}


export const changeRoute = (state=initialRoute, action={}) => {
  switch(action.type) {
    case CHANGE_ROUTE:
      return Object.assign({},state,{route:action.payload});
    case STREAK_MODE:
      return Object.assign({},state,{streakroute:action.payload});
    case PAST_STREAK_MODE:
      return Object.assign({},state,{paststreakroute:action.payload});
    default:
      return state
  }
}

//REDUCER TO STORE CURRENT OR PAST STREAK

const initialStreak = {
  streakinfo: '',
  logs: []
}


export const loadStreak = (state=initialStreak,action={}) => {
  switch(action.type) {
    case CURRENT_STREAK:
      return Object.assign({},state,{logs:action.payload});
    case PAST_STREAK:
      return Object.assign({},state,{logs:action.payload});
    case PAST_STREAK_INFO:
      return Object.assign({},state,{streakinfo:action.payload});
    default:
      return state
  }
}


//REDUCER TO STORE PAST STREAK LIST

const initialPastStreakList = {
  paststreaks: []
}

export const loadPastStreakList = (state=initialPastStreakList,action={}) => {
  switch(action.type) {
    case PAST_STREAK_LIST:
    return Object.assign({},state,{paststreaks:action.payload});
  default:
    return state
  }
}



//REDUCER TO STORE PAST STREAK MODE (redundant)


const initialMode = {
  mode: 'currentStreak'
}


export const streakMode = (state=initialMode, action={}) => {
  switch(action.type) {
    case STREAK_MODE:
      return Object.assign({},state,{mode:action.payload});
    default:
      return state
  }
}
