import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Login.css';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
//import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';
//import { useForm } from 'react-hook-form';

    

const Login = () => {
    
    

    const {signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleBlur = () =>{
        console.log('clicked');
    }
    

    const handleSubmit = () =>{
        console.log('submit clicked');
    }
    
    // console.log(location.state?.from);
    // const redirect_uri = location.state?.from || '/';

    

    const handleGoogleSignIn= () =>{

        signInUsingGoogle();
        
    }

    return (

        <div className="d-grid justify-content-center mt-5 ">
            <div className="login-form shadow p-3 mb-5 bg-body rounded " style={{width: '550px',padding:'20px'}}>
                <Form onSubmit={handleSubmit} >
                    <h5 className="">Sign In With Your Email and Password</h5><br />
                    <Form.Group controlId="formGroupEmail" onBlur={handleBlur}>
                        <Form.Control type="email" name="email" style={{ fontFamily: 'FontAwesome' }} placeholder="&#x10f0e0; Enter your email address" />
                    </Form.Group> <br />
                    <Form.Group controlId="formGroupPassword" onBlur={handleBlur}>
                        <Form.Control type="password" name="password" className="form-icon" placeholder="&#xf30d; Enter Your Password" />
                    </Form.Group> <br />

                    <div className="row ">
                        <div className="col-md-5 d-flex justify-content-start align-content-center my-auto">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault"><small className="checkbox">Remember me</small>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-7 d-flex justify-content-end my-auto">
                            <a href="#"><span>Forgot Password</span></a>
                        </div>
                    </div>


                    <br /> <br /> 
                    <Form.Group className="justify-content-start d-flex gap-3" >

                        <input className="submit-btn btn btn-spcl" style={{color:'white', backgroundColor:'goldenrod'}} type="submit" value='Sign In' />
                        <br /><br /><h6>New here? <Link to='/register' >Register</Link> or Login with:</h6>

                    </Form.Group>
                </Form><br />
                <div className="d-flex justify-content-center gap-3 ">
                    
                <button onClick={handleGoogleSignIn} className="btn login-btn"><FontAwesomeIcon icon={faGoogle} size='2x' /></button>
                <button className="btn login-btn "><FontAwesomeIcon icon={faFacebookF} size='2x' /></button>
                <button className="btn login-btn "><FontAwesomeIcon icon={faGithub} size='2x' /></button><br />
                </div>
            </div>
        </div>
    );
};

export default Login;