import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Timeline from "./pages/Timeline";
import Quotes from "./pages/Quotes";
import Services from "./pages/Services";
import './App.css';

function App() {
    return (
        <>
            <Navbar />
            <div id="home"><Home /></div>
            <div id="about"><About /></div>
            <div id="skills"><Skills /></div>
            <div id="certificates"><Certifications /></div>
            <div id="services"><Services /></div>
            <div id="timeline"><Timeline /></div>
            <div id="projects"><Projects /></div>
            <div id="quotes"><Quotes/></div>
            <div id="contact"><Contact /></div>
        </>
    );
}

export default App;
