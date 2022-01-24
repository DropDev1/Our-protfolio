import React from 'react';

const Banner3 = () => {
    return (
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-lg-6 img">

                    <img className='img1' src="https://wallup.net/wp-content/uploads/2019/09/456778-computer-engineering-science-tech.jpg" alt="" />
                    <img className='img2' src="https://www.tetravx.com/wp-content/uploads/2017/12/iStock-626449606-1030x685.jpg" alt="" />

                </div>
                <div className="col-lg-6 pt-5 mt-5">
                    <h1 className='py-5'>Make your business more <span className="higlight">competitive</span> </h1>
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
            </div>

            <style jsx>{`
            .img1{
               
                width:400px;
                z-index:1;
            }
            .img2{
               
                width:400px;
                z-index:2;
                margin-top:200px;
                margin-left:-200px;

            }
        
      `}</style>
        </div>
    );
};

export default Banner3;