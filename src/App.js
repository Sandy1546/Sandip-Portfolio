import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectsPage from "./pages/ProjectsPage";

const App = () => {
  return(
    
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />;
                <Route path="/about" element={<AboutMe />} />;
                <Route path="/contact" element={<ContactPage />} />;
                <Route path="/projects" element={<ProjectsPage />}/>
                <Route path="*" element={<ErrorPage />} />;
            </Routes>
            <Footer />
        </Router>
    
        );
}

export default App;
