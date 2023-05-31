import React from "react";
import styled from "styled-components";

const HeroSection = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className="row gy-3">
                    <div className="col-xs-12 col-sm-12 col-md-6 ">
                        <div className="detail">
                            <h4>Hello</h4>
                            <h1>I Am Sandip Singh</h1>
                            <h5>Software Developer</h5>
                            <h6>
                                Dynamic individual with a proven ability to efficiently 
                                solve problems and collaborate with teams to deliver 
                                high-quality creative solutions in a timely manner.
                            </h6>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <div className="hero-Img">
                            <figure >
                                <img  src="Images/id_pic1.jpg" className="img-fluid" width="500px" alt="hero Image"/>
                            </figure>
                        </div>    
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}


const Wrapper = styled.section`
    
    .container {
        margin-top: 3.75rem;

        .row {
            width: 100%;
            height: 100%;
            
            h4 {
                margin-top: 6.25rem;
            
            }

            h1 {
                margin-top: 1.25rem;
                font-size: 2.188rem;
            }

            h5 {
                margin-top: 0.938rem;
                font-size: 1.563rem;
            }

            h6 {
                margin-top: 2.5rem;
                font-size: 1.25rem;
                text-align: justify;
            }

            img {
                border-radius: 1.25rem;
            }

            .detail {
                padding-left: 0.5rem;
                padding-bottom: 0.5rem;
                height: 100%;
                border-style: none none inset inset;
                border-radius: 1.5rem;
                padding-top: 1.25rem;
                
                
                
            }

            
        }
        
    }
    
`;


export default HeroSection;