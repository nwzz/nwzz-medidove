import React from 'react';
import './Footer.css';
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGithub, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className="container-fluid bg-dark footer position-absolute mb-0" fixed="bottom">
            <div className="footer-decor row">
                <div className="col-md-3 d-grid">
                    <div><img src={logo} alt="" /></div><br /><br />
                    <div className="d-flex justify-content-center gap-3">
                        
                    <FontAwesomeIcon icon={faInstagram} size='2x' />
                    <FontAwesomeIcon icon={faGoogle} size='2x'/>
                    <FontAwesomeIcon icon={faFacebookF} size='2x'/>
                    <FontAwesomeIcon icon={faGithub} size='2x'/>
                    <br /><br />
                    </div>
                    <p>Call us: 0134567897834</p>
                    <p>Email us: example@mail.co</p>
                    
                </div>
                <div className="col-md-3 d-grid">
                    <h4>Popular Courses </h4>
                    <p>C programming</p>
                    <p>Python Programming</p>
                    <p>React Native For Android</p>
                    <p>Machine Learning</p>
                </div>
                <div className="col-md-3 d-grid">
                    <h4>Organization</h4>
                    <p>Privacy Policy</p>
                    <p>Refund Policy</p>
                    <p>Terms and Conditions</p>
                </div>
                <div className="col-md-3 d-grid">
                    <h4>Others</h4>
                    <p>Study</p>
                    <p>Skills</p>
                    <p>Communication</p>
                </div>
            </div><br /><br />s
            
            <div className="copyRight text-center">
                    <p style={{color:'white', paddingBottom :'0'}}>Copyright {(new Date()).getFullYear()}<FontAwesomeIcon icon={faCopyright} /> All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;