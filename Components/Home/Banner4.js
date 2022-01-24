import React from 'react';

const Banner4 = () => {
    return (
        <div className="container my-5 py-5">
            <div className="row mb-5"> <div className="col-lg-8 mt-5 ">
                <h1 className='my-5'>Do what Matters and we'll <span className='higlight'> handle</span> The.</h1>
                <p style={{ color: "black", paddingLeft: "0px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div style={{ display: 'flex' }}>
                    <ul>
                        <p> <img src="https://toddlitton.com/wp-content/uploads/2018/08/LittonArrow3.png" alt="" style={{ width: "25px", height: "25px", marginRight: "10px" }} />Influencing Sales</p>
                        <p> <img src="https://toddlitton.com/wp-content/uploads/2018/08/LittonArrow3.png" alt="" style={{ width: "25px", height: "25px", marginRight: "10px" }} />Engaging Customer</p>
                    </ul>
                    <ul>
                        <p> <img src="https://toddlitton.com/wp-content/uploads/2018/08/LittonArrow3.png" alt="" style={{ width: "25px", height: "25px", marginRight: "10px" }} /> Generating Insights</p>
                        <p> <img src="https://toddlitton.com/wp-content/uploads/2018/08/LittonArrow3.png" alt="" style={{ width: "25px", height: "25px", marginRight: "10px" }} />Boosting Operation</p>
                    </ul>
                </div>
            </div>
                <div class="col-lg-4">

                    <img style={{ width: "100%", height: "400px" }} className='img2' src="https://www.parkersoftware.com/wp-content/uploads/2020/10/pankaj-patel-_SgRNwAVNKw-unsplash-scaled.jpg" alt="" />

                </div>

            </div>
        </div>
    );
};

export default Banner4;