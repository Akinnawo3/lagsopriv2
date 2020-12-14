/**
 * Login Page
 */

import React, {useState} from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input } from 'reactstrap';
import LinearProgress from '@material-ui/core/LinearProgress';
import QueueAnim from 'rc-queue-anim';
import { Fab } from '@material-ui/core';
import axios from "axios"

// components
import { SessionSlider } from 'Components/Widgets';

// app config
import AppConfig from 'Constants/AppConfig';


const Signin = ({loading, history}) => {
   const [formData, setFormData] = useState({username: '', password: ''});
   /**
    * On User Login
    */
       // function onUserLogin() {
       //     if (this.state.email !== '' && this.state.password !== '') {
       //         this.props.history.push('/');
       //        // this.props.signinUserInFirebase(this.state, this.props.history);
       //     }
       //  }

   const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
   const { username, password } = formData;

   async function userLogin() {
      const body = {username, password};
      try {
         const res = await axios.post('http://165.22.116.11:8001/api/login/',body)
         const data = res.data.Authorized
         localStorage.setItem("user_id", data)
         history.push('/');
      }catch (e) {

      }
   }

   const onSubmit = async (e) => {
      e.preventDefault();
      userLogin();
   };

   /**
    * On User Sign Up
    */
   // function  onUserSignUp() {
   //    props.history.push('/signup');
   // }

   return (
       <QueueAnim type="bottom" duration={2000}>
          <div className="rct-session-wrapper">
             {loading &&
             <LinearProgress />
             }
             <AppBar position="static" className="session-header">
                <Toolbar>
                   <div className="container">
                      <div className="d-flex justify-content-between">
                         <div className="session-logo">
                            <Link to="/">
                               <img src={AppConfig.appLogo} alt="session-logo" className="img-fluid" width="110" height="35" />
                            </Link>
                         </div>
                         {/*<div>*/}
                         {/*   <a className="mr-15" onClick={() => this.onUserSignUp()}>Create New account?</a>*/}
                         {/*   <Button variant="contained" className="btn-light" onClick={() => this.onUserSignUp()}>Sign Up</Button>*/}
                         {/*</div>*/}
                      </div>
                   </div>
                </Toolbar>
             </AppBar>
             <div className="session-inner-wrapper">
                <div className="container">
                   <div className="row row-eq-height d-flex align-items-center justify-content-center">
                      <div className="col-sm-7 col-md-7 col-lg-8">
                         <div className="session-body text-center">
                            <div className="session-head mb-30">
                               <h2 className="font-weight-bold">Get started with {AppConfig.brandName}</h2>
                               {/*<p className="mb-0">Most powerful ReactJS admin panel</p>*/}
                            </div>
                            <Form onSubmit={onSubmit}>
                               <FormGroup className="has-wrapper">
                                  <Input type="mail" value={username} name="username" id="user-mail" className="has-input input-lg" placeholder="Enter Email Address" onChange={onChange} />
                                  <span className="has-icon"><i className="ti-email"></i></span>
                               </FormGroup>
                               <FormGroup className="has-wrapper">
                                  <Input value={password} type="Password" name="password" id="pwd" className="has-input input-lg" placeholder="Password" onChange={onChange} />
                                  <span className="has-icon"><i className="ti-lock"></i></span>
                               </FormGroup>
                               <FormGroup className="mb-15">
                                  <Button
                                      color="primary"
                                      className="btn-block text-white w-100"
                                      variant="contained"
                                      size="large"
                                      type="submit">
                                     Sign In
                                  </Button>
                               </FormGroup>
                            </Form>
                            {/*<p className="mb-20">or sign in with</p>*/}
                            {/*<Fab size="small" variant="round" className="btn-facebook mr-15 mb-20 text-white"*/}
                            {/*   onClick={() => this.props.signinUserWithFacebook(this.props.history)}*/}
                            {/*>*/}
                            {/*   <i className="zmdi zmdi-facebook"></i>*/}
                            {/*</Fab>*/}
                            {/*<Fab size="small" variant="round" className="btn-google mr-15 mb-20 text-white"*/}
                            {/*   onClick={() => this.props.signinUserWithGoogle(this.props.history)}*/}
                            {/*>*/}
                            {/*   <i className="zmdi zmdi-google"></i>*/}
                            {/*</Fab>*/}
                            {/*<Fab size="small" variant="round" className="btn-twitter mr-15 mb-20 text-white"*/}
                            {/*   onClick={() => this.props.signinUserWithTwitter(this.props.history)}*/}
                            {/*>*/}
                            {/*   <i className="zmdi zmdi-twitter"></i>*/}
                            {/*</Fab>*/}
                            {/*<Fab size="small" variant="round" className="btn-instagram mr-15 mb-20 text-white"*/}
                            {/*   onClick={() => this.props.signinUserWithGithub(this.props.history)}*/}
                            {/*>*/}
                            {/*   <i className="zmdi zmdi-github-alt"></i>*/}
                            {/*</Fab>*/}
                            <p className="text-muted">By signing up you agree to {AppConfig.brandName}</p>
                            <p><a target="_blank" href="#/terms-condition" className="text-muted">Terms of Service</a></p>
                         </div>
                      </div>
                      {/*<div className="col-sm-5 col-md-5 col-lg-4">*/}
                      {/*   <SessionSlider />*/}
                      {/*</div>*/}
                   </div>
                </div>
             </div>
          </div>
       </QueueAnim>
   );

}

// map state to props
const mapStateToProps = ({ authUser }) => {
   const { user, loading } = authUser;
   return { user, loading }
}

export default connect(mapStateToProps, {

})(Signin);
