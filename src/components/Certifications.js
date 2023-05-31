import React, {useState} from "react";
import styled from "styled-components";

const Certifications = () => {

    const [show, setShow] = useState(false);

    const ShowCert = (src) => {
        console.log(show);
        if(show == true) {
            
            document.querySelector('.popup-Img').style.visibility = 'hidden';
            setShow(false);
        }
        else{
            
            document.querySelector('.popup-Img').style.visibility = 'visible';
            document.querySelector('.popup-Img img').src = src;
            
            setShow(true);
        }
    }


    return (
        <Wrapper>
            <div className="container" id="blur">
                
                <h1>CERTIFICATIONS</h1>

                <div className="row gy-3">

                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div onClick={()=>{ShowCert("Images/Certifications/CapstoneRetrievingProcessingAndVisualizing.jpg")}} 
                            className="card" >
                            <div className="card-body">
                                <h5 className="card-title">Capstone Retrieving Processing And Visualizing</h5>  
                            </div>
                        </div>
                    </div>


                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div onClick={()=>{ShowCert("Images/Certifications/UsingPythonToAccessWebData.jpg")}} 
                            className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Using Python To Access Web Data</h5>
                                </div>
                        </div>
                    </div>


                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div onClick={()=>{ShowCert("Images/Certifications/TeamworkSkillsCommunicatingEffectivelyInGroups.jpg")}} 
                            className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Teamwork Skills Communicating Effectively In Groups</h5>
                                </div>
                        </div>
                    </div>


                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div onClick={()=>{ShowCert("Images/Certifications/UsingDatabasesWithPython.jpg")}} 
                            className="card">
                            <div className="card-body">
                                <h5 className="card-title">Using Databases With Python</h5>
                            </div>
                        </div>
                    </div>


                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div onClick={()=>{ShowCert("Images/Certifications/PythonDataStructures.jpg")}} 
                            className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Python Data Structures</h5>
                                </div>
                        </div>
                    </div>


                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div onClick={()=>{ShowCert("Images/Certifications/CreateYourFirstPythonProgram.jpg")}} 
                            className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Create Your First Python Program</h5>
                                </div>
                        </div>
                    </div>


                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div onClick={()=>{ShowCert("Images/Certifications/ProgrammingForEverybody(GettingStartedWithPython).jpg")}} 
                            className="card">
                            <div className="card-body">
                                <h5 className="card-title">Programming For Everybody (Getting Started With Python)</h5>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            
                <div className="popup-Img" id="popup">
                    <span onClick={ShowCert}>&times;</span>
                    <img className="Img1" src="Images/Certifications/CapstoneRetrievingProcessingAndVisualizing.jpg" />
                    
                </div>
                  
        </Wrapper>

    );

    
}


const Wrapper = styled.section`
    margin-top: 5rem;

    h1 {
        font-size: 2.188rem;
        margin-bottom: 2.5rem;
    }

    .container {
        position: relative;
    }

    .card {
        height: 100%;
        background-color: #e6e6ff;
        border-radius: 1.25rem;
        cursor: pointer;

        :hover {
            text-decoration: underline;
            transform: scale(1.05);
            background-color: #ccccff;
            transition: all 0.3s linear;
        }
    }

    


    .popup-Img {
        position: fixed;
        top: 0;
        right: 0;
        width: 100vw;
        height: 100vh;
        margin: auto;
        text-align: center;
        background: black;
        display: flex;
        align-items: center;
        
        visibility: hidden;

        .Img1 {
            display: block;
            margin: auto;
            width: 60%;
        }

        span {
            position: absolute;
            top: 0;
            right: 0.625rem;
            font-size: 2.5rem;
            font-weight: bolder;
            color: white;
            cursor: pointer;
            z-index: 100;
        }
        
    }
     
`;


export default Certifications;