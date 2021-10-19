import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';



const services=[
    {
        "id": 1,
        "name": "COMPLETE DIAGNOSTIC",
        "doctor":"Dr. Md. Abu Siddik",
        "price": "300",
        "description": "All types of Diagnostics and Medical test and Report provide by our Experienced Doctors and Assistants  .",
        "img": "https://i.ibb.co/mtN69Cb/service-6.jpg"
    },
    {
        "id": 2,
        "name": "BLOOD CANCER",
        "doctor":"Dr. Md. Abu Siddik",
        "price": "100",
        "description": "We Have a Complete Treatment and Diagnostics for Blood Cancer Chemo Therapy and Medicinal treatments are available at our center.",
        "img": "https://i.ibb.co/sm8nrmk/service-5.jpg"
    },
    {
        "id": 3,
        "name": " NEUROLOGY SURGERY",
        "doctor":"Dr. Md. Abu Siddik",
        "price": "150",
        "description": "We Have number of experienced Neuro Surgoen and Specialist of Neurology working for years.",
        "img": "https://i.ibb.co/18Ppz2C/service-4.jpg"
    },
    {
        "id": 4,
        "name": "ALLERGIC ISSUE",
        "doctor":"Dr. Md. Abu Siddik",
        "price": "180",
        "description": "World Class Allergic Treatment are Available here not matter from when You are suffering for.",
        "img": "https://i.ibb.co/nDWGprz/service-3.jpg"
    },
    {
        "id": 5,
        "name": "DENTAL CARE",
        "doctor":"Dr. Md. Abu Siddik",
        "price": "100",
        "description": "World Class Dentist are also Available at our place all kinds of dental equipments and treatments are highly available and reasonable for patients .",
        "img": "https://i.ibb.co/rmWjN8h/service-2.jpg"
    },
    {
        "id": 6,
        "name": "BODY SURGERY",
        "doctor":"Dr. Md. Abu Siddik",
        "price": "300",
        "description": "We Have a Complete Treatment and Diagnostics for Blood Cancer Chemo Therapy and Medicinal treatments are available at our center.",
        "img": "https://i.ibb.co/z5Jyp8B/service-1.jpg"
    }
];

const ServiceDetails = () => {
    const { bookId } = useParams();
    console.log(bookId);
    // const [newService, setNewService] = useState([]);

    // useEffect(() => {
    //     fetch('services.json')
    //         .then(res => res.json())
    //         .then(data => setNewService(data));
    //         //console.log(newService);
    // }, []);
    // console.log(newService);


    
    //console.log(filterService);
    // {people.filter(person => person.age < 60).map(filteredPerson => (
    //     <li>
    //       {filteredPerson.name}
    //     </li>
    //   ))}

    return (
        <div className="mt-5 container justify-content-center mx-auto">
            <h3>Service Details Id: {bookId}</h3><br /><br />
            {
                services.filter( service => service.id == bookId).map(srvc => (
                    <div className="d-flex service-decor " >
                        <div><img src={srvc.img} alt="" /></div>
                        <div className="d-grid">
                        <h3>{srvc.name}</h3>
                        <h6>Doctor: {srvc.doctor}</h6>
                        <p>Price: ${srvc.price}</p>
                        <p>{srvc.description}</p>
                        <Link to='/online-consult'><button className="btn btn-info">Online Doctor Visit</button></Link>
                        </div>
                    </div>

                ))
            }
            <br /><br /><br /><br /><br /><br /><br />
        </div>
    );
};

export default ServiceDetails;