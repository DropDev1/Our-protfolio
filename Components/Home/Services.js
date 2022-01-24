import React from 'react';

import { Button } from 'react-bootstrap'
const services = [{
    name: "Artificial Intelligence",
    image: "https://cdn.dribbble.com/users/479536/screenshots/6130940/artificial_intelligence_logo_4x.jpg",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ad, id minima dolores ut corrupti ducimus ipsam facilis, aliquid praesentium perferendis, beatae alias quas neque consequatur quo incidunt ullam laboriosam."
}, {
    name: "Artificial Intelligence",
    image: "https://cdn.dribbble.com/users/479536/screenshots/6130940/artificial_intelligence_logo_4x.jpg",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ad, id minima dolores ut corrupti ducimus ipsam facilis, aliquid praesentium perferendis, beatae alias quas neque consequatur quo incidunt ullam laboriosam."
}, {
    name: "Artificial Intelligence",
    image: "https://cdn.dribbble.com/users/479536/screenshots/6130940/artificial_intelligence_logo_4x.jpg",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ad, id minima dolores ut corrupti ducimus ipsam facilis, aliquid praesentium perferendis, beatae alias quas neque consequatur quo incidunt ullam laboriosam."
}, {
    name: "Artificial Intelligence",
    image: "https://cdn.dribbble.com/users/479536/screenshots/6130940/artificial_intelligence_logo_4x.jpg",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ad, id minima dolores ut corrupti ducimus ipsam facilis, aliquid praesentium perferendis, beatae alias quas neque consequatur quo incidunt ullam laboriosam."
}, {
    name: "Artificial Intelligence",
    image: "https://cdn.dribbble.com/users/479536/screenshots/6130940/artificial_intelligence_logo_4x.jpg",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ad, id minima dolores ut corrupti ducimus ipsam facilis, aliquid praesentium perferendis, beatae alias quas neque consequatur quo incidunt ullam laboriosam."
}, {
    name: "Artificial Intelligence",
    image: "https://cdn.dribbble.com/users/479536/screenshots/6130940/artificial_intelligence_logo_4x.jpg",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ad, id minima dolores ut corrupti ducimus ipsam facilis, aliquid praesentium perferendis, beatae alias quas neque consequatur quo incidunt ullam laboriosam."
}]
const Services = () => {
    return (
        <div className='container d-flex flex-column align-items-center'>
            <div className="row my-5">
                <div className="col-lg-5">
                    <h1>See Wide Range of  <p className='higlight'>Our Services</p> </h1>

                </div>
                <div className="col-lg-7">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae at est impedit ad, vel odit sunt. Magni, rem. Ducimus perferendis dicta dolore laboriosam accusamus maxime repellat deleniti est itaque rerum!</p>

                </div>
            </div>
            <div className="row g-5">
                {
                    services.map(s => <div className='col-lg-4'>
                        <div className=" d-flex flex-column px-4  pt-3" style={{ boxShadow: "0 0px 3px 0px", borderRadius: "10px" }}>
                            <img src={s.image} width="100px" alt="" className='mb-5' />
                            <h4 className='service-title my-5'>{s.name}</h4>
                            <p >{s.details}</p>
                            <Button className='mt-5 fw-bold mb-3 d-flex align-items-right w-100 ' variant='none'>Read More</Button>
                        </div>

                    </div>)
                }


            </div>
            <Button className='m-4 px-5 py-3'>See More</Button>
        </div>
    );
};

export default Services;