import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const items = [{
    name: "Application", image: "https://i.ibb.co/G5rxQxj/Icon-8-01.png"
}, {
    name: "Industry", image: "https://i.ibb.co/swJDPCR/Icon-10-01.png"
}
    , {
    name: "Technology", image: "https://i.ibb.co/ZchxLTB/Icon-9-01.png"
}]

const Banner2 = () => {
    return (<Container className='banner2'>
        <Container>
            <Container>
                <Row xs={3} md={3} className="g-5">
                    {items.map(i => <Col className=''>
                        <Card style={{ borderRadious: "30px" }} className="d-flex flex-column align-items-center justify-content-center rounded shadow-sm border-0">
                            <img src={i.image} alt="" />
                            <h3>{i.name}</h3>
                            <p className="p-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, assumenda!</p>

                        </Card>
                    </Col>)}



                </Row></Container></Container></Container>
    );
};

export default Banner2;