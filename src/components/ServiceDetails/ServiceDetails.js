import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';


const ServiceDetails = () => {
    const { bookId } = useParams();
    const [newService, setNewService] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setNewService(data));
    }, [])


    const filterService = newService.filter( service =>service.id === {bookId});
    console.log(filterService);

    return (
        <div>
            <h3>this is service details: {bookId}</h3>
            
        </div>
    );
};

export default ServiceDetails;