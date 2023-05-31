import React from "react";
import HeroSection from "../components/HeroSection";
import Intro from "../components/Intro";
import styled from "styled-components";

const Home = () => {
    return(
        <Wrapper>
        <div>
            <HeroSection/>
            <Intro />
            
        </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    
`;

export default Home;