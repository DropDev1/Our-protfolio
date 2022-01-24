import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";

const reviews = [{
    name: "Stan Lee", review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, in quas? Officiis, harum laboriosam? Iusto cupiditate enim nulla voluptate porro atque magnam nisi voluptates amet?", image: "https://www.drodd.com/images14/white7.jpg"
}, {
    name: "Stan Lee", review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, in quas? Officiis, harum laboriosam? Iusto cupiditate enim nulla voluptate porro atque magnam nisi voluptates amet?", image: "https://www.drodd.com/images14/white7.jpg"
}, {
    name: "Stan Lee", review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, in quas? Officiis, harum laboriosam? Iusto cupiditate enim nulla voluptate porro atque magnam nisi voluptates amet?", image: "https://www.drodd.com/images14/white7.jpg"
}, {
    name: "Stan Lee", review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, in quas? Officiis, harum laboriosam? Iusto cupiditate enim nulla voluptate porro atque magnam nisi voluptates amet?", image: "https://www.drodd.com/images14/white7.jpg"
}, {
    name: "Stan Lee", review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, in quas? Officiis, harum laboriosam? Iusto cupiditate enim nulla voluptate porro atque magnam nisi voluptates amet?", image: "https://www.drodd.com/images14/white7.jpg"
}, {
    name: "Stan Lee", review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, in quas? Officiis, harum laboriosam? Iusto cupiditate enim nulla voluptate porro atque magnam nisi voluptates amet?", image: "https://www.drodd.com/images14/white7.jpg"
}, {
    name: "Stan Lee", review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, in quas? Officiis, harum laboriosam? Iusto cupiditate enim nulla voluptate porro atque magnam nisi voluptates amet?", image: "https://www.drodd.com/images14/white7.jpg"
},]

const Banner6 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div className=' text-center my-5 py-5'>
            <h1 className='my-5'>Trusted by over <span className='higlight'>250,000 </span> Business Owners</h1>
            <Container>
                <Slider {...settings}>
                    {
                        reviews.map(r => <div>
                            <div className='m-3 p-3 border d-flex flex-column align-items-center' style={{ border: "0", boxShadow: "0 0 1px " }}> <p className='review-title' style={{ color: "black", padding: "20px" }}>{r.review}</p>
                                <img src="https://www.topbeautymagazines.com/wp-content/uploads/2020/06/Hairstyles-For-Square-Faces-Women-5.jpg" style={{ borderRadius: "50%", height: "100px", width: "100px" }} alt="" />
                                <h6 className=' py-3'>{r.name}</h6></div>

                        </div>)
                    }

                </Slider></Container>

        </div>
    );
};

export default Banner6;