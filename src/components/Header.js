import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar";

const Header = () => {
    return(
        <MainHeader >
            <div className='navbar navbar-light bg-dark'>
                <NavLink to={'/'} className='name nav-link'>
                    Sandip
                </NavLink>
                <NavBar />
            </div>
        </MainHeader>
    );
};


const MainHeader = styled.header`
    margin: 0;
    padding: 0;
    

    .name {
        margin: 0.5rem;
        margin-left: 6.25rem;
        font-weight: bold;
        font-size: 1.563rem;
        color: lightgrey;
        
    }


`;


export default Header;