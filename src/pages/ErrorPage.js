import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <Wrapper>
            <div className="container text-center error">
                <h2>404</h2>
                <h4>UH OH! You're lost.</h4>
                <p>
                    The page you are looking for does not exist. How you got here is a mystery. 
                    But you can click the button below to go back to the homepage.
                </p>
                <NavLink to={'/'}>
                    <button className="btn home-button">
                        Home
                    </button>
                </NavLink>
            </div>
        </Wrapper>
    );
}


const Wrapper = styled.section`
    .error {
        margin: auto;
        margin-top: 5%;

        h2 {
            font-size: 5rem;
        }
    }

    .home-button {
        background-color: purple;
        color: white;
    }
`;




export default ErrorPage;