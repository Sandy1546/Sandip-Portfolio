import React from "react";
import styled from "styled-components";

const Experience = () => {
    return (
        <Wrapper>
            <div className="container">
                <h1>Experience</h1>

                <div className="row gy-5">
                    
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                    <div className="comp-Name">
                                            <p className="work-date">Aug-2022 to Feb-2023</p>
                                            <h6 className="comp">Persistent Systems Pvt Ltd.</h6>
                                    </div>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-8">
                                    <div className="details">
                                            <h6 className="role">Software Engineer</h6>
                                            <p className="work">
                                                <ul>
                                                    <li>
                                                        Designed and developed Loan Against Security module for SC Capitals.
                                                    </li>
                                                    <li>
                                                        Automated WordPress testing using Selenium and Java.
                                                    </li>
                                                    <li>
                                                        Automated SpiceJet testing using Selenium and Java.
                                                    </li>
                                                    <li>
                                                        Designed and developed Product Summary Page using
                                                        Salesforce(Apex, LWC). 
                                                    </li>
                                                </ul>
                                            </p>
                                    </div>
                            </div>
                        

                        

                            <div className="col-xs-12 col-sm-12 col-md-4">
                                    <div className="comp-Name">
                                            <p className="work-date">Jan-2022 to Jun-2022</p>
                                            <h6 className="comp">TechHut Pvt Ltd.</h6>
                                    </div>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-8">
                                    <div className="details">
                                            <h6 className="role">Software Developer Intern</h6>
                                            <p className="work">
                                                <ul>
                                                    <li>
                                                        Built an online T-shirt store. 
                                                    </li>
                                                    <li>
                                                        Developed Backend using Node JS and frontend using React JS.
                                                    </li>
                                                </ul>
                                            </p>
                                    </div>
                            </div>
                        


                        

                            <div className="col-xs-12 col-sm-12 col-md-4">
                                    <div className="comp-Name">
                                            <p className="work-date">Jul-2021 to Dec-2021</p>
                                            <h6 className="comp">Shaurya Technosoft Pvt Ltd.</h6>
                                    </div>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-8">
                                    <div className="details">
                                            <h6 className="role">Software Developer Intern</h6>
                                            <p className="work">
                                                <ul>
                                                    <li>
                                                        Worked on Asp.Net and learned about MVC structure and Sql
                                                        Server to develop a Student Management System.

                                                    </li>
                                                </ul>
                                            </p>
                                    </div>
                            </div>
                    
                </div>
            </div>
        </Wrapper>
    );   
}


const Wrapper = styled.section`

    margin-top: 3.75rem;

    h1 {
        font-size: 1.875rem;
        padding-bottom: 2.5rem;
    }

    .comp-Name {
        padding: 0.625rem;
        padding-right: 1.25rem;
        border-radius: 1.25rem;
        border-style: none none outset outset;
        height: 100%;

        p {
            font-size: 0.625rem;
            font-weight: bold;
            text-align: right;
        }

        h6 {
            text-align: right;
            font-weight: bold;
        }
    }

    .details {
        padding-right: 1.25rem;
        border-radius: 1.25rem;
        border-style: none inset outset none;

        h6 {
            font-weight: bold;
        }

        p {
            margin-top: 1.25rem;
            text-align: justify;
        }
    }
    
`;


export default Experience;