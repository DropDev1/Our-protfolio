import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const SubmissionForm = () => {
    return (
        <Container>

            <Form className='my-5 py-5 w-75 mx-auto '>
                <Row className="mb-3">
                    <Form.Group as={Col}>

                        <Form.Control placeholder="Name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">

                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>


                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>

                        <Form.Control placeholder="Phone Number" />
                    </Form.Group>
                    <Form.Group as={Col} >

                        <Form.Control placeholder="Subject" />
                    </Form.Group>


                </Row>
                <Row>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                        <Form.Control as="textarea" rows={3} placeholder='Your Message' />
                    </Form.Group>
                </Row>




                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default SubmissionForm;