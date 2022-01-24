import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const members = [{
    name: "Ron Maddy", designation: "Web developer", image: "http://www.instaloverz.com/wp-content/uploads/2016/08/17-Formal-Men-Fashion.jpg"
}, {
    name: "Ron Maddy", designation: "Web developer", image: "http://www.instaloverz.com/wp-content/uploads/2016/08/17-Formal-Men-Fashion.jpg"
}, {
    name: "Ron Maddy", designation: "Web developer", image: "http://www.instaloverz.com/wp-content/uploads/2016/08/17-Formal-Men-Fashion.jpg"
}]

const Teams = () => {
    return (
        <div className='container pb-5 d-flex flex-column align-items-center'>
            <h1 className='py-4'>Meet the<span className='higlight'> Expert  Team</span></h1>
            <Row className='g-5'>
                {
                    members.map(m => <Col>
                        <Card>
                            <Card.Img variant="top" src={m.image} />
                            <Card.Body className='text-center'>
                                <Card.Title className='higlight'>{m.name}</Card.Title>
                                <Card.Text className='p-0'>
                                    {m.designation}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>)
                }

            </Row>

            <Button className='my-5'>See More</Button>

        </div>
    );
};

export default Teams;