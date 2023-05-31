import React from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import styled from "styled-components";

const NavBar = () => {
        return (
            <NavB >
                <div className="nav justify-content-end">
                    <ul className="nav ">
                        <li>
                            <NavLink to='/' className='nav-link '>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className='nav-link '>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/projects' className='nav-link '>
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' className='nav-link '>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </NavB>
        );
};


const NavB = styled.nav`

    .nav-link{
        color: white;

        &:hover,
        &:active {
            font-weight: bold;
                }
            }
    margin-right: 9%;  

    .active {
        text-decoration: underline;
    }
    
    
    

`;


export default NavBar;