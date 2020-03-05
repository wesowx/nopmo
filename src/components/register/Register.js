import React from 'react';
import {connect} from 'react-redux';
import {setNameField, setPasswordField, setUsernameField, submitRegister, routeChange} from '../../actions.js';

const mapStatetoProps = (state) => {
  return state
}


const mapDispatchtoProps = (dispatch) => {
  return {
    onRouteChange: (e,route) => {
      e.preventDefault();
      dispatch(routeChange(route));
    },
    onNameChange: (e) => dispatch(setNameField(e.target.value)),
    onUsernameChange: (e) => dispatch(setUsernameField(e.target.value)),
    onPasswordChange: (e) => dispatch(setPasswordField(e.target.value)),
    onSubmitRegister: (e) => {
      e.preventDefault();
      dispatch(submitRegister());
    }
  }
}


class Register extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     registerName: '',
  //     registerEmail: '',
  //     registerPassword: ''
  //   }
  // }
  //
  // onNameChange = (e) => {
  //   this.setState({registerName: e.target.value})
  // }
  //
  // onEmailChange = (e) => {
  //   this.setState({registerEmaill: e.target.value});
  // }
  //
  // onPasswordChange = (e) => {
  //   this.setState({registerPassword: e.target.value});
  // }

  // onSubmitRegister = (e) => {
  //   e.preventDefault();
  //   console.log('hi');
  //   console.log(this.props.registerName);
  //   console.log(this.props.registerEmail);
  //   console.log(this.props.registerPassword);
  // }



  render() {
    return(
      <article className="ba b--black-10 br4 w-100 w-40-m w-40-l mw7 shadow-3 center ma2">
        <main className="pa4 black-80">
          <form>
            <fieldset className="ba b--transparent ph0 mh0">
              <legend className="tc f1 fw6 ph0 mh0 white">Register</legend>
              <div className="mt3">
                <label className="white db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input onChange={this.props.onNameChange} className="pa2 b--white input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="name"  id="name" />
              </div>
              <div className="mt3">
                <label className="white db fw6 lh-copy f6" htmlFor="username">Username</label>
                <input onChange={this.props.onUsernameChange} className="pa2 b--white input-reset ba bg-transparent hover-bg-black hover-white w-100" type="username" name="username"  id="username" />
              </div>
              <div className="mv3">
                <label className="white db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input onChange={this.props.onPasswordChange} className="b pa2 b--white input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
              </div>
              <div className="mt3 tc">
                <input onClick={(e)=>{this.props.onSubmitRegister(e)}} className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white" type="submit" value="Register" />
              </div>
              <div className="mt3 tc">
                <p  onClick={(e)=>this.props.onRouteChange(e,'signIn')} className="b ph2 pv2 ba b--white bg-transparent grow pointer f6 dib white">Sign In</p>
              </div>
            </fieldset>
          </form>
        </main>
      </article>
    );
  };
}


export default connect(mapStatetoProps,mapDispatchtoProps)(Register);
