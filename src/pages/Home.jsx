import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className='home-section'>
            <div className='background-dots'></div>
            <div className="intro">
                <h2 className="name">Hey there! I'm Nuha Aaisha</h2>
                <p className='work'>A full stack developer enthusiast.</p>
                <p className='tagline'>Building intuitive, fast, and responsive web applications.</p>
            </div>
        </div>
    );
}

export default Home;