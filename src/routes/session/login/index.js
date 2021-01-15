import React, {useState} from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input } from 'reactstrap';
import LinearProgress from '@material-ui/core/LinearProgress';
import QueueAnim from 'rc-queue-anim';
import AppConfig from 'Constants/AppConfig';
import {loginUser} from "Actions/authAction";


const Signin = ({loginUser,  loading}) => {
   const [formData, setFormData] = useState({username: '', password: ''});

   const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
   const { username, password } = formData;

   const onSubmit =  (e) => {
      e.preventDefault();
      loginUser(username, password);
   };

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
                         {/*<div className="session-logo">*/}
                         {/*   <Link to="/">*/}
                         {/*      <img src={AppConfig.appLogo} alt="session-logo" className="img-fluid" width="110" height="35" />*/}
                         {/*   </Link>*/}
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
                            </div>
                            <Form onSubmit={onSubmit}>
                               <FormGroup className="has-wrapper">
                                  <Input type="mail" value={username} name="username" id="user-mail" className="has-input input-lg" placeholder="Enter Email Address" onChange={onChange} required/>
                                  <span className="has-icon"><i className="ti-email"></i></span>
                               </FormGroup>
                               <FormGroup className="has-wrapper">
                                  <Input value={password} type="Password" name="password" id="pwd" className="has-input input-lg" placeholder="Password" onChange={onChange} required/>
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
                            <p className="text-muted">By signing up you agree to {AppConfig.brandName}</p>
                            <p><a target="_blank" href="#/terms-condition" className="text-muted">Terms of Service</a></p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </QueueAnim>
   );

}

function mapDispatchToProps(dispatch) {
   return {
      loginUser: (username, password) => dispatch(loginUser(username, password)),
   };
}

const mapStateToProps = state => ({
   loading: state.loading.loading,

});


export default connect(mapStateToProps ,mapDispatchToProps)(Signin);
