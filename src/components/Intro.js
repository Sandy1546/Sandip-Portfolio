import React from "react";
import styled from "styled-components";
import Service from "./Service";

const Intro = () => {
    return (
        <Wrapper>
            <div className="container">
                
                <h5 className= "quote">
                            You have the vision, I have the skill. Come let's make something together.
                </h5>
                    
                        
                           
                        
                    

                    <div className=" service">
                        <Service />
                    </div>


                    {/*<div className="col">
                        <p>
                        Transforming raw data into actionable insight is about 
                        integrating and analyzing data from all sources to find 
                        the best and most optimized business decisions.<br/> However, 
                        the massive amount of data collected by analytics software 
                        can be overwhelming. It gets even more daunting when you 
                        try to make sense of this big data.<br/> 
                        Therefore, to effectively use big data, your team must 
                        understand what data means to the organization and what 
                        it brings to the company to improve operations and efficiency. 
                        In this case, you will find processes like data filtering, 
                        grouping, and segmenting helpful. There are ways you can 
                        use to turn data into actionable insights, as illustrated 
                        in this article.<br/><br/>

                        Using big data technology is an essential process to 
                        embrace digital transformation. Accordingly, prioritizing 
                        customers in any data analysis is vital for the business.
                         However, you need an integrated solution for data analysis, 
                         data interpretation, and taking immediate and automated 
                         action. This process will help you make informed decisions 
                         that improve business efficiency.
                        </p>
    </div>*/}
                </div>
            
        </Wrapper>
    );
}


const Wrapper = styled.section`
    
    margin-top: 6.25rem; 

    .quote {
        text-align: center;
        font-family:cursive;
        font-weight: bold;
    }

    .col {
        
        
        .comp-Img {
            display: block;
            margin: auto;
            margin-top: 3.75rem;
            
        }

        

        
        .service {
            
        }

`;


export default Intro;