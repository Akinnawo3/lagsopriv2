import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input } from 'reactstrap';
import LinearProgress from '@material-ui/core/LinearProgress';
import QueueAnim from 'rc-queue-anim';
import AppConfig from 'Constants/AppConfig';
import { loginUser } from "Actions/authAction";


const Signin = ({ loginUser, loading }) => {
   const [formData, setFormData] = useState({ phone_number: '', password: '' });
   const [peek, setPeek] = useState(false);

   const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
   const { phone_number, password } = formData;

   const onSubmit = (e) => {
      e.preventDefault();
      loginUser(phone_number, password);
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
                                 <Input type="number" value={phone_number} name="phone_number" className="has-input input-lg" placeholder="Enter phone number" onChange={onChange} required />
                                 <span className="has-icon"><i className="ti-mobile"></i></span>
                              </FormGroup>
                              <FormGroup className="has-wrapper">
                                 <Input value={password} type={peek ? 'text' : 'password'} name="password" className="has-input input-lg" placeholder="Password" onChange={onChange} required />
                                 <span className="has-icon">
                                    {!peek ?
                                       <img onClick={() => setPeek(!peek)} src={require('../../../assets/img/eye-png-icon-28.jpg')} style={{ width: '20px', height: '20px' }} /> :

                                       <img onClick={() => setPeek(!peek)} src={require('../../../assets/img/eye_slash_icon.png')} style={{ width: '20px', height: '20px' }} />
                                    }


                                 </span>
                              </FormGroup>
                              <FormGroup className="mb-15">
                                 <Button
                                    disabled={loading}
                                    color="primary"
                                    className="btn-block text-white w-100"
                                    variant="contained"
                                    size="large"
                                    type="submit">
                                    Sign In
                                 </Button>
                              </FormGroup>
                           </Form>
                           {/* <p className="text-muted">By signing up you agree to {AppConfig.brandName}</p> */}
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


export default connect(mapStateToProps, mapDispatchToProps)(Signin);
