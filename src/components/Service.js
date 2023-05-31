import React from "react";
import styled from "styled-components";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";

const Service = () => {
    return (
        <Wrapper>
            <div className="container">
                

                <div className="service">
                    <h2>What I Can Do For You</h2>
               {/*} <h5 className="quote">
                    “Perfection is achieved not when there 
                    is nothing more to add,<br/> but rather when 
                    there is nothing more to take away.”
    </h5>
                <h4 className="quote-Author">--Dr. Antoine de Saint-Exupery</h4>*/}

                    <div className="row gy-5">
                        <div className="col-xs-12 col-sm-12 col-md-4 ">
                            <div className="service-col ">
                                <div className="data">
                                    <h5><FaLaptopCode className="icon"/>&nbsp;&nbsp;&nbsp; WEB DEVELOPMENT​</h5>
                                    <p>
                                        If you are looking for a developer who’ll 
                                        take over the research and development of 
                                        your website, I am a well-established 
                                        professional to help you with this.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-4">
                            <div className="service-col">
                                <div className="data">
                                    <h5><MdOutlinePhoneIphone className="icon"/>&nbsp;&nbsp;&nbsp;APP DEVELOPMENT​</h5>
                                    <p>
                                        If you are looking for a user-friendly app that 
                                        will attract more mobile users, I can help you 
                                        design and build a platform with the latest and 
                                        trendiest look and feel.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-4">
                            <div className="service-col">
                                <figure>
                                    <img src="Images/Intro.jpg" className="img-fluid" width="300" alt="Intro logo" />

                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};


const Wrapper = styled.section`
    
    margin-top: 1.25rem;

    .service {
        padding-top: 1.25rem;
    }

        h2 {
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            margin-bottom: 2.5rem;
        }

        .service-col{
            width: 100%;
            height: 100%;
            
            border-radius: 1.25rem;
            border-style: none inset inset none ;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 

            display: flex;
            align-items: center;
 
            figure {
                padding: 1.875rem;
                padding-bottom: 1rem;
                margin: auto;

                img {
                    border-radius: 1.25rem;
                }
            }
        }

        p{
            padding-left: 2.5rem;
            text-align: left;
        }

    
`;


export default Service;