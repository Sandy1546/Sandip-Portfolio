import React from "react";
import styled from "styled-components";

const Projects = () => {
    return (
        <Wrapper>
            <div className="container">
                <h1>PROJECTS</h1>
            
                <div className="row gy-5">

                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div className="card">
                            <img className="img-fluid card-img" src="Images/apnaBazar.png" alt="Apna Bazar logo"/>
                            <div class="card-body">
                                <h5 class="card-title">Apna Bazar Ecommerce Website</h5>
                                <p class="card-text">
                                    <ul>
                                        <li>Apna Bazar is an E-commerce website where user can buy electronic products.</li>
                                        <li>Website was built using React JS.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div className="card">
                            <img className="img-fluid card-img" src="Images/todo.jpg" alt="ToDo Image"/>
                                <div className="card-body">
                                    <h5 className="card-title">ToDo List</h5>
                                    <p className="card-text">
                                        <ul>
                                            <li>
                                                Developed a ToDo Application where user can make a list of the task to be completed.
                                            </li>
                                            <li>User can add and delete the task.</li>
                                            <li>It was built using React Js.</li>
                                        </ul>

                                    </p>
                                </div>
                        </div>
                    </div>


                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div className="card">
                            <img className="img-fluid card-img" src="Images/student-report-management-system.png" alt="Student Management System logo"/>
                            <div className="card-body">
                                <h5 className="card-title">Student Record Management System</h5>
                                <p className="card-text">
                                    <ul>
                                        <li>Developed a Student Management System with different levels of authorization.</li>
                                        <li>The project was built using Asp.Net, MVC framework and C# language.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div className="card">
                            <img className="img-fluid card-img" src="Images/onlinebanking.jpg" alt="Apana Bank logo"/>
                                <div className="card-body">
                                    <h5 className="card-title">Apana Bank</h5>
                                    <p className="card-text">
                                        <ul>
                                            <li>The project was intended to maintain an updated record of account holders</li>
                                            <li>The project was built using C++ programming and concept of data handling.</li>
                                        </ul>
                                    </p>
                                </div>
                        </div>
                    </div>    


                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div className="card">
                            <img className="img-fluid card-img" src="Images/dino_alt.jpg" alt="Chrome Dino logo"/>
                                <div className="card-body">
                                    <h5 className="card-title">Automatic Chrome Dino</h5>
                                    <p className="card-text">
                                        <ul>
                                            <li>Developed a Python program that is capable of playing the Chrome Dino game.</li>
                                        </ul>
                                    </p>
                                    
                                </div>
                        </div>
                    </div>


                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div className="card">
                            <img className="img-fluid card-img" src="Images/vaccumCleaner.jpg" alt="Vaccum Cleaner Image"/>
                                <div className="card-body ">
                                    <h5 className="card-title">Automatic Vaccum Cleaner</h5>
                                    <p className="card-text ">
                                        <ul>
                                            <li>Developed a smart vacuum cleaner that can work without human intervention.</li>
                                            <li>The system was capable of avoiding obstacles and changing its course in presence of an obstacle ahead.</li>
                                        </ul>
                                    </p>
                                </div>
                        </div>
                    </div>


                </div>

                    

                    
               

            </div>
        </Wrapper>
    );
}


const Wrapper = styled.section`
    margin-top: 2.5rem;
    
    h1 {
        font-size: 2.188rem;
        padding-bottom: 2.5rem;
    }

    

    .card {
        height: 100%;
        background-color: #e6e6e6;
        border-radius: 1.25rem;
    }

    .card-img {
        padding: 0.625rem;
        max-height: 12.5rem;
        border-radius: 1.25rem;
    }

`;


export default Projects;