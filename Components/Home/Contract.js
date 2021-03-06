import React from 'react';
import { Button } from 'react-bootstrap';

const Contract = () => {
    return (
        <div>
            <div className='d-flex justify-content-around'>
                <form className=" d-flex flex-column text-center p-5  " style={{ marginTop: "100px", marginBottom: "-50px", backgroundColor: "#FAFAFA", borderRadius: "10px" }}>
                    <h5>Contract Form</h5>
                    <input style={{ padding: "10px", margin: "10px", borderRadius: "10px", border: "0", boxShadow: "0 0 2px" }} type="text" placeholder='Name' />
                    <input type="email" name="" id="" placeholder='Email' style={{ padding: "10px", margin: "10px", borderRadius: "10px", border: "0", boxShadow: "0 0 2px" }} />
                    <textarea name="" placeholder='Message' style={{ padding: "10px", margin: "10px 10px 20px 10px", borderRadius: "10px", border: "0", boxShadow: "0 0 2px" }} ></textarea>

                    <Button variant='dark' style={{ width: "90%", margin: "auto", borderRadius: "10px" }}>Send</Button>
                </form>
                <img src="https://i.ibb.co/5MyP8rN/Call-center-01.png" alt="" style={{ width: "400px", marginBottom: "-100px" }} />
                <img src="
https://i.ibb.co/CPxHtL0/Map-01.png" alt="" style={{ width: "400px" }} />
            </div>
            <div style={{ width: "100%", height: "100px", backgroundColor: "blue" }}></div>
        </div>
    );
};

export default Contract;