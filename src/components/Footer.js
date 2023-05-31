import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const Footer = () => {
    return (
        <Wrapper>
            <div className="container text-center">

                <div className="row">
                    <div className="first-row">
                        <div className="col-6">
                            <div className="readyToGetStarted">
                                <p>Want to collaborate? <br/> Talk to us today</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="getStarted-btn">
                                <NavLink to='/contact'>
                                    <button on className="btn btn-primary btn-sm btn-icon">
                                        CONTACT US
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>


                {/*<div className="row second-row">
                    <div className="col blocks">
                        <p>Sandip Singh <br/><br/> The best ecommerce website you would have ever seen</p>
                    </div>
                    <div className="col blocks">
                        <p>Subscribe to get important updates</p>
                        <button className="simple-btn btn-icon">
                            SUBSCRIBE
                        </button>
                    </div>
                    <div className="col blocks">
                        <p>Follow Us</p>
                        <FaDiscord className="social-icon"/>
                        <FaInstagram className="social-icon"/>
                        <FaYoutube className="social-icon"/>
                    </div>
                    <div className="col blocks">
                        <p>Call Us<br/><br/>+91 2345678901</p>
                    </div>
    </div>*/}

                {/*<div className="row third-row bottommost-footer ">
                <div className="col blocks">
                    <p>@{new Date().getFullYear()} SinghSandip All Rights Reserved</p>
                </div>
                    <div className="col blocks">
                        <p>PRIVACY POLICY<br/>TERMS & CONDITIONS</p>
                    </div>
                </div>              
</div>*/}

                <div className="row">
                    <div className="third-row bottommost-footer">
                        <div className="col-6">
                            <div className="blocks">
                                <p>@{new Date().getFullYear()} SinghSandip All Rights Reserved</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="blocks">
                                <p>PRIVACY POLICY<br/>TERMS & CONDITIONS</p>
                            </div>
                        </div>
                    </div>
                    
                </div>


            </div>
        </Wrapper>

    );
};


const Wrapper = styled.footer`
    margin-top: 3.125rem; 
    background: linear-gradient(180deg, white 20%, black 20%);
    width: 100vw;


    .first-row {
        background-color: lightgrey;
        border-radius: 0.625rem;
        width: 60%;
        height: 20%;
        margin: auto;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        
        .readyToGetStarted {
            text-align: center;
            padding-left: 1.25rem;
        }

        .getStarted-btn {
            color: purple;   
        }

    }

    .third-row{

    }

    .second-row {
        width: 3.125rem;
        height: 6.25rem;
        margin: auto;
        

        .blocks {
            font-size: 0.625rem;
            margin-top: 1.25rem;
            color: white;
        }
    }

    .btn-icon {
        
        background-color: purple;
        border-color: purple;
    }

    .simple-btn {
        border-radius: 0.25rem  ;
        color: white;
    }
    
    .social-icon {
        border-radius: 50%;
        margin-left: 0.313rem;
    }

    .bottommost-footer {
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 0.063rem solid lightgrey;
        font-size: 0.625rem;
        color: white;
        display: flex;
        justify-content: center;
    }
`;



export default Footer;