import React from "react";
import styled from "styled-components";

const Education = () => {
    return (
        <Wrapper>
            <div className="container">
                <h1>Education</h1>

                <div className="row gy-5">

                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div className="degree">
                                <p className="duration">2018-2022</p>
                                <h6 className="edu">Bachelor of Technology in <br/>Electronics and Telecommunication Engineering</h6>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-8">
                        <div className="Institute">
                                <h6 className="institute-Name"><span className="ques">Institute:</span> Vishwakarma Institute of Information Technology</h6><br/>
                                <h6 className="institute-Name"><span className="ques">University:</span> Savitribai Phule Pune University</h6>
                                <p className="location">Pune, India</p>
                                <p className="grade">CGPA: 8.78</p>
                        </div>
                    </div>


                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div className="degree">
                                <p className="duration">2017-2018</p>
                                <h6 className="edu">Higher Secondary</h6>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-8">
                        <div className="Institute">
                                <h6 className="institute-Name"><span className="ques">Institute:</span> Kendriya Vidyalaya Army Area</h6><br/>
                                <h6 className="institute-Name"><span className="ques">Board:</span> Central Board of Secondary Education</h6>
                                <p className="location">Pune, India</p>
                                <p className="grade">Percentage: 79%</p>
                        </div>
                    </div>


                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div className="degree">
                                <p className="duration">2015-2016</p>
                                <h6 className="edu">Senior Secondary</h6>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-8">
                        <div className="Institute">
                                <h6 className="institute-Name"><span className="ques">Institute:</span> Kendriya Vidyalaya Army Area</h6><br/>
                                <h6 className="institute-Name"><span className="ques">Board:</span> Central Board of Secondary Education</h6>
                                <p className="location">Pune, India</p>
                                <p className="grade">CGPA: 8.8</p>
                        </div>
                    </div>

                </div>
                
            </div>
        </Wrapper>
    );
};


const Wrapper = styled.section`
    margin-top: 1.875rem;

    h1 {
        font-size: 1.875rem;
        padding-bottom: 2.5rem;
    }

    .degree {
        padding: 0.625rem;
        padding-right: 1.25rem;
        border-radius: 1.25rem;
        border-style: none none outset outset;
        height: 100%;

        p {
            font-size: 0.75rem;
            font-weight: bold;
            text-align: right;
        }

        h6 {
            text-align: right;
            font-weight: bold;
            font-size: 1.125rem;
        }
    }

    .Institute {
        padding-left: 1.875rem;
        padding-right: 1.25rem;
        border-radius: 1.25rem;
        border-style: none inset outset none;

        h6 {
            font-weight: bold;
            
            .ques {
                font-weight: 400;
                font-size: 1.063rem;
            }
        }

        p {
            margin-top: 1.25rem;
            text-align: right;
            font-weight: bold;
            font-style: italic;
        }
    }
    
`;


export default Education;