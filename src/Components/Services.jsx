/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(services=> setServices(services))
    },[])
    return (
        <div className="text-center">
            <h1 className="text-[#FF3811] font-bold text-2xl">Service</h1>
            <h1 className="text-5xl py-7 font-bold">Our Service Area</h1>
            <p className="text-lg">the majority have suffered alteration in some form, by injected humour, or randomised <br /> Words which don't look even slightly believable. </p>
            <div className="grid grid-cols-3 my-10 gap-7">
                {
                    services.map(service=> <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;