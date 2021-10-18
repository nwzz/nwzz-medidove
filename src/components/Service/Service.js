import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const { id, name, description, img } = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            
            <p className="px-3">{description}</p>
            <Link to={`/booking/${id}`}>
                <button style={{backgroundColor:'cadetblue', color:'white'}} className="btn ">Read More </button>
            </Link>
        </div>
    );
};

export default Service;