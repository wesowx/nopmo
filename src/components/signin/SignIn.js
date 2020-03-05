import React from 'react';
import {connect} from 'react-redux';
import {setPasswordField, setUsernameField, submitSignIn, routeChange} from '../../actions.js';
import banner from './nofap.png';
import fapper from '../rankcard/fapper.png';
import fapsoldier from '../rankcard/fapsoldier.png';
import fapwizard from '../rankcard/fapwizard.png';
import faplord from '../rankcard/faplord.png';
import fapstronaut from '../rankcard/fapstronaut.png';
// import {changeEmailState, changePasswordState} from '../reducers.js';



// One of 2 ways to get state, this using react-redux library (connect) which automatically connects mapstatetoprops to state through 1st parameter

const mapStatetoProps = (state) => {
  return state
  // return {
  //   signInEmail: state.changeEmailState.signInEmail,
  //   signInPassword: state.changePasswordState.signInPassword,
  // }
}


const mapDispatchtoProps = (dispatch) => {
  return {
    onUsernameChange: (e) => {
      dispatch(setUsernameField(e.target.value));
    },
    onPasswordChange: (e) => dispatch(setPasswordField(e.target.value)),
    onSubmitSignIn: (e) => {
      e.preventDefault();
      dispatch(submitSignIn());
    },
    onRouteChange: (e,route) => {
      e.preventDefault();
      dispatch(routeChange(route));
    }
  }
}




class SignIn extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     signInEmail: '',
  //     signInPassword: ''
  //   }
  // }
  //
  // onEmailChange = (event) => {
  //   this.setState({signInEmail: event.target.value});
  //   console.log(this.state.signInEmail);
  // }
  //
  // onPasswordChange = (e) => {
  //   this.setState({signInPassword: e.target.value});
  //   console.log(this.state.signInPassword);
  // }
  //
  // onSubmitSignIn = (e) => {
  //   e.preventDefault();
  //   console.log('hi');
  //   console.log(this.props.signInEmail);
  //   console.log(this.props.signInPassword);
  //
  //   fetch("http://localhost:8080/signin", {
  //     method: 'post',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //       email: this.props.signInEmail,
  //       password: this.props.signInPassword
  //     })
  //   })
  //   .then(response => response.json())
  //   .then(user => console.log(user))
  // }

  render() {
    return(
      <div>
        <div className="ba b--transparent center mw7 ma2 pv4">
          <div className="dib w-20 ma2 center tc">
            <img className='ma2 rankimg' src={fapper}/>
          </div>
          <div className="dib w-20 ma2 center tc">
            <img className='ma2 rankimg' src={fapsoldier}/>
          </div>
          <div className="dib w-20 ma2 center tc">
            <img className='ma2 rankimg' src={fapwizard}/>
          </div>
          <div className="dib w-20 ma2 center tc">
            <img className='ma2 rankimg' src={faplord}/>
          </div>
          <div className="dib w-20 ma2 center tc">
            <img className='ma2 rankimg' src={fapstronaut}/>
          </div>
        </div>
        <article className="black ba b--black-10 br4 w-100 w-40-m w-40-l mw7 shadow-3 center ma2 pv4">
          <main className="ph4 black-80">
            <form>
              <fieldset className="ba b--transparent ph0 mh0">
                <legend className="tc f1 fw6 ph0 mh0 white">Sign In</legend>
                <div className="mt3">
                  <label className="white db fw6 lh-copy f6" htmlFor="username">Username</label>
                  <input onChange={this.props.onUsernameChange} className="pa2 b--white input-reset ba bg-transparent hover-bg-black hover-white w-100" type="username" name="username"  id="username" />
                </div>
                <div className="mv3">
                  <label className="white db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input onChange={this.props.onPasswordChange} className="b pa2 b--white input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                </div>
                <div className="mt3 tc">
                  <input onClick={(e) => {this.props.onSubmitSignIn(e)}} className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white" type="submit" value="Sign in" />
                </div>
                <div className="mt3 tc">
                  <p  onClick={(e)=>this.props.onRouteChange(e,'register')} className="b ph2 pv2 ba b--white bg-transparent grow pointer f6 dib white">Register</p>
                </div>
              </fieldset>
            </form>
          </main>
        </article>
      </div>
    );
  };
}


export default connect(mapStatetoProps,mapDispatchtoProps)(SignIn);
