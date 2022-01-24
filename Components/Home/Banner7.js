import React from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap'
const servicess = [{
    image: "https://geneticliteracyproject.org/wp-content/uploads/2017/04/Screen-Shot-2017-04-06-at-8.42.22-AM-1024x947.png", name: "Mechine Learning", details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eius vero repellendus ipsa. Adipisci numquam quibusdam incidunt assumenda est non vel? Veniam alias neque tenetur aliquam facere tempora sapiente quibusdam?"
}, {
    image: "https://geneticliteracyproject.org/wp-content/uploads/2017/04/Screen-Shot-2017-04-06-at-8.42.22-AM-1024x947.png", name: "Mechine Learning", details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eius vero repellendus ipsa. Adipisci numquam quibusdam incidunt assumenda est non vel? Veniam alias neque tenetur aliquam facere tempora sapiente quibusdam?"
}, {
    image: "https://geneticliteracyproject.org/wp-content/uploads/2017/04/Screen-Shot-2017-04-06-at-8.42.22-AM-1024x947.png", name: "Mechine Learning", details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eius vero repellendus ipsa. Adipisci numquam quibusdam incidunt assumenda est non vel? Veniam alias neque tenetur aliquam facere tempora sapiente quibusdam?"
}, {
    image: "https://geneticliteracyproject.org/wp-content/uploads/2017/04/Screen-Shot-2017-04-06-at-8.42.22-AM-1024x947.png", name: "Mechine Learning", details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eius vero repellendus ipsa. Adipisci numquam quibusdam incidunt assumenda est non vel? Veniam alias neque tenetur aliquam facere tempora sapiente quibusdam?"
}, {
    image: "https://geneticliteracyproject.org/wp-content/uploads/2017/04/Screen-Shot-2017-04-06-at-8.42.22-AM-1024x947.png", name: "Mechine Learning", details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eius vero repellendus ipsa. Adipisci numquam quibusdam incidunt assumenda est non vel? Veniam alias neque tenetur aliquam facere tempora sapiente quibusdam?"
}, {
    image: "https://geneticliteracyproject.org/wp-content/uploads/2017/04/Screen-Shot-2017-04-06-at-8.42.22-AM-1024x947.png", name: "Mechine Learning", details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eius vero repellendus ipsa. Adipisci numquam quibusdam incidunt assumenda est non vel? Veniam alias neque tenetur aliquam facere tempora sapiente quibusdam?"
}]

const Banner7 = () => {
    return (
        <div className='container my-5 py-5 d-flex align-items-center flex-column'>
            <Row className='g-4'>
                <Col md={6} className='d-flex flex-column align-items-center justify-content-center'>
                    <h1>Industries We Serve</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eius vero repellendus ipsa. Adipisci numquam quibusdam incidunt assumenda est non vel? Veniam alias neque tenetur aliquam facere tempora sapiente quibusdam?</p>
                    <Button varient="primary">Explore More</Button>
                </Col>
                {
                    servicess.map(s => <Col md={3}><Card className="shadow-sm p-3 d-flex flex-column align-items-center border-0">
                        <Card.Img variant="top" src={s.image} style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                        <Card.Body className='text-center'>
                            <Card.Title className='higlight '>{s.name}</Card.Title>
                            <Card.Text className="p-0">
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Button variant='none'>Read More</Button>
                    </Card>
                    </Col>)
                }

            </Row>




        </div>
    );
};

export default Banner7;