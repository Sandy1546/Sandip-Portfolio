import React from "react";
import styled from "styled-components";

const MySkills = () => {
    return (
        <Wrapper>
            <div className="container">
                    
                <div className="row">
                    

                            <div className="col-6 ">
                                <div className="Skills-title">
                                    <h2>My Skills</h2><br/>
                                    <p className="quote">Train now Be a Champion tomorrow...</p>
                                </div>
                            </div>

                            <div className="col-6 ">
                                <div className="Skills ">
                                    <h4>Programming Languages</h4>
                                    <p className="para">Java, C, C++, C#, Python, Javascript</p>
                                    <br/>
                                    <h4>Libraries</h4>
                                    <p className="para">React JS</p>
                                    <br/>
                                    <h4>Frameworks</h4>
                                    <p className="para">Asp .net</p>
                                    <br/>
                                    <h4>Testing Tools</h4>
                                    <p className="para">Selenium</p>
                                </div>
                            </div>
                        
                </div>
            </div>

        </Wrapper>
    );
}


const Wrapper = styled.section`

    margin-top: 3.125rem;

    background-image: url("Images/skills.jpg");
    background-size: 80% 95%;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;



    .Skills-title {
        padding-left: 2.188rem;
        padding-top: 5.625rem;
        position: absolute;
        right: 50%;
        margin-right: 15%; 
            
        text-align: left;
        color: white;
    }

    .Skills {
        color: white;
        padding-left: 1rem;
        padding-right: 1.25rem;

        h4 {
            font-size: 0.938rem;
        }
    }

    
    
`;


export default MySkills;