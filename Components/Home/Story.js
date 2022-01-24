import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
const story = [{
    title: "Lorem ipsum dolor sit amet consectetur", company: "Drop Dev", date: "20 january", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, exercitationem pariatur! Libero alias consequuntur earum architecto fuga vel dolorum unde?", image: "https://www.eurodns.com/assets/images/opengraph-tlds/WORK-og.png"
}, {
    title: "Lorem ipsum dolor sit amet consectetur", company: "Drop Dev", date: "20 january", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, exercitationem pariatur! Libero alias consequuntur earum architecto fuga vel dolorum unde?", image: "https://www.eurodns.com/assets/images/opengraph-tlds/WORK-og.png"
}, {
    title: "Lorem ipsum dolor sit amet consectetur", company: "Drop Dev", date: "20 january", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, exercitationem pariatur! Libero alias consequuntur earum architecto fuga vel dolorum unde?", image: "https://www.eurodns.com/assets/images/opengraph-tlds/WORK-og.png"
}]

const Story = () => {
    return (
        <div className='container d-flex flex-column align-items-center'>
            <h1 className='py-5'>Our Recent <span className='higlight'>Story</span></h1>

            <Row className="g-5 mb-5">
                {story.map(s => (
                    <Col md={4}>
                        <Card>
                            <Card.Img height="270px" variant="top" src={s.image} />
                            <Card.Body>

                                <Card.Text className='p-0 d-flex fw-bold text-primary justify-content-left'>
                                    <p>{s.company}</p><p>|</p><p>{s.date}</p>
                                </Card.Text>
                                <Card.Title className='text-primary'>{s.title}</Card.Title>
                                <Card.Text className='p-0'>
                                    {s.description}
                                </Card.Text>
                            </Card.Body>
                            <Button variant='none'>Read More</Button>
                        </Card>
                    </Col>
                ))}
            </Row>


        </div>
    );
};

export default Story;