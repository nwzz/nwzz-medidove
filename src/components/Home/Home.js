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
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{height:'500px'}}>
                        <img
                            className="d-block w-100"
                            src={caro2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{height:'500px'}}>
                        <img
                            className="d-block w-100"
                            src={caro3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            
            <Services></Services>
        </div>
    );
};

export default Home;