import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleSubmit = () => {
        console.log('submit clicked');
    }

    const handleBlur = () => {
        console.log('clicked blur');
    }
    return (
        <div className="d-grid justify-content-center mt-5 ">
            <div className="login-form shadow p-3 mb-5 bg-body rounded " style={{width: '550px',padding:'20px'}}>
                <Form onSubmit={handleSubmit} >
                <h5 className="">Register for a new Account</h5><br />



                    <Form.Group controlId="formGroupName" onBlur={handleBlur}>
                        <Form.Control type="name" name="name" placeholder="&#x10f0e0; Enter your Full Name" />
                    </Form.Group> <br />

                    <Form.Group controlId="formGroupEmail" onBlur={handleBlur}>
                        <Form.Control type="email" name="email" placeholder="&#x10f0e0; Enter your email address" />
                    </Form.Group> <br />

                    <Form.Group controlId="formGroupPhone" onBlur={handleBlur}>
                        <Form.Control type="phone" name="phone" placeholder="&#x10f0e0; Enter your Phone Number" />
                    </Form.Group> <br />

                    <Form.Group controlId="formGroupPassword" onBlur={handleBlur}>
                        <Form.Control type="password" name="password" className="form-icon" placeholder="&#xf30d; Enter Your Password" />
                    </Form.Group> <br />
                    <div className="justify-content-start">

                        <small>Already Have an Account? <Link to={'/login/'}><span >Sign In</span></Link> </small><br />
                        <small>By creating an account you are agree to Amazon user <span className="signin-link"><a href="#">Privacy Policy</a></span> and <span className="signin-link"><a href="#">Terms and Conditions</a></span>.</small>

                    </div><br /><br />



                    <Form.Group className="justify-content-start d-flex" >

                        <input className="submit-btn btn" style={{color:'white', backgroundColor:'goldenrod'}} type="submit" value='Sign Up' />or
                        <br /><button className="btn btn-primary">Google SignIn</button>

                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default Register;