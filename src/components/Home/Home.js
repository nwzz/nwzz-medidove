import React from 'react';
import { Carousel } from 'react-bootstrap';
import Services from '../Services/Services';
import caro1 from '../../images/caro1.jpg';
import caro2 from '../../images/caro2.jpg';
import caro3 from '../../images/caro3.jpg';

const Home = () => {
    return (
        <div>
            <div>
                <Carousel variant="dark">
                    <Carousel.Item style={{height:'500px'}}>
                        <img
                            className="d-block w-100 align-item-center"
                            src={caro1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5>Best Care & Best Doctors</h5>
                            <p>We care about You the best Way</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{height:'500px'}}>
                        <img
                            className="d-block w-100"
                            src={caro2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5>Best Care & Best Doctors</h5>
                            <p>We Provide Care and Love more than Treatment</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{height:'500px'}}>
                        <img
                            className="d-block w-100"
                            src={caro3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5>Feel Hospital as Home</h5>
                            <p>We Provide Care and Love more than Treatment</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            
            <Services></Services>
        </div>
    );
};

export default Home;