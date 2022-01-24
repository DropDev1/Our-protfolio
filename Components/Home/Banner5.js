import React from 'react';
import { Col, Row } from 'react-bootstrap';
const info = [{
    image: "https://www.drodd.com/images14/white7.jpg",
    count: "2220",
    title: "Completed Projects"
},
{
    image: "https://www.drodd.com/images14/white7.jpg",
    count: "2220",
    title: "Completed Projects"
}, {
    image: "https://www.drodd.com/images14/white7.jpg",
    count: "2220",
    title: "Completed Projects"
}, {
    image: "https://www.drodd.com/images14/white7.jpg",
    count: "2220",
    title: "Completed Projects"
}, {
    image: "https://www.drodd.com/images14/white7.jpg",
    count: "2220",
    title: "Completed Projects"
}, {
    image: "https://www.drodd.com/images14/white7.jpg",
    count: "2220",
    title: "Completed Projects"
},]

const Banner5 = () => {
    return (
        <div className="my-5 " style={{ backgroundImage: "linear-gradient(120deg,rgba(60,60,60,0.8),rgba(60,60,60,0.8)),url('https://ak.picdn.net/shutterstock/videos/5011133/thumb/1.jpg')", padding: "40px", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "400px", color: "white", backgroundPosition: "center" }}>
            <Row className="">

                {info.map(i => <Col className="text-light text-center p-5 d-flex flex-column align-items-center" md={2}>
                    <div style={{ width: "100px", height: "100px", borderRadius: "50%", backgroundColor: "white", margin: "10px" }}></div>
                    <h6>{i.count}</h6>
                    <p>{i.title}</p>
                </Col>)}
            </Row>

        </div>
    );
};

export default Banner5;