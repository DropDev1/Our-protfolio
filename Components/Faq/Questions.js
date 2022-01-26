import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const questions = [{
    id: 1,
    query: "Lorem, ipsum dolor sit amet consectetur adipisicing", answer: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum mollitia sequi eveniet ut, velit possimus deleniti voluptatum nisi! Error soluta quia illo nesciunt. Nisi, accusamus."
}, {
    id: 2, query: "Lorem, ipsum dolor sit amet consectetur adipisicing", answer: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum mollitia sequi eveniet ut, velit possimus deleniti voluptatum nisi! Error soluta quia illo nesciunt. Nisi, accusamus."
}, {
    id: 3, query: "Lorem, ipsum dolor sit amet consectetur adipisicing", answer: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum mollitia sequi eveniet ut, velit possimus deleniti voluptatum nisi! Error soluta quia illo nesciunt. Nisi, accusamus."
}, {
    id: 4, query: "Lorem, ipsum dolor sit amet consectetur adipisicing", answer: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum mollitia sequi eveniet ut, velit possimus deleniti voluptatum nisi! Error soluta quia illo nesciunt. Nisi, accusamus."
}, {
    id: 5, query: "Lorem, ipsum dolor sit amet consectetur adipisicing", answer: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum mollitia sequi eveniet ut, velit possimus deleniti voluptatum nisi! Error soluta quia illo nesciunt. Nisi, accusamus."
}, {
    id: 6, query: "Lorem, ipsum dolor sit amet consectetur adipisicing", answer: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum mollitia sequi eveniet ut, velit possimus deleniti voluptatum nisi! Error soluta quia illo nesciunt. Nisi, accusamus."
}, {
    id: 7,
    query: "Lorem, ipsum dolor sit amet consectetur adipisicing", answer: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum mollitia sequi eveniet ut, velit possimus deleniti voluptatum nisi! Error soluta quia illo nesciunt. Nisi, accusamus"
}, {
    id: 8,
    query: "Lorem, ipsum dolor sit amet consectetur adipisicing", answer: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum mollitia sequi eveniet ut, velit possimus deleniti voluptatum nisi! Error soluta quia illo nesciunt. Nisi, accusamus"
}, {
    id: 9,
    query: "Lorem, ipsum dolor sit amet consectetur adipisicing", answer: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum mollitia sequi eveniet ut, velit possimus deleniti voluptatum nisi! Error soluta quia illo nesciunt. Nisi, accusamus"
},]

const Questions = () => {
    return (
        <div>
            <div style={{ textAlign: "center", width: "50%", margin: "auto", paddingTop: "30px" }}><h1 className='higlight'>Frequently Asked Questions</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tempora qui officia, temporibus, fugiat dolore eos assumenda quia eius quaerat dolor consequuntur necessitatibus omnis provident ea quibusdam totam voluptates odit?</p></div>
            <Container className='my-5'>
                <Accordion>

                    {questions.map(q => <Accordion.Item eventKey={q.id} className='bd-light shadow-sm border-0 rounded fs-6 fw-bold' >
                        <Accordion.Header className='bd-light fs-3' >{q.query} ?</Accordion.Header>
                        <Accordion.Body>
                            {q.answer}
                        </Accordion.Body>
                    </Accordion.Item>
                    )}

                </Accordion>
            </Container>
        </div>
    );
};

export default Questions;