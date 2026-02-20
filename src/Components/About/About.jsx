import React from 'react'
import "./About.css"

const About = () => {
    return (
        <section className="about">
            <div className="about-container">

                {/* LEFT */}
                <div className="about-left">
                    <h3>About PIXI ART</h3>

                    <p>
                        Welcome to PIXI ART, where beauty meets luxury. For over 15 years,
                        we've been providing exceptional beauty services to our valued clients.
                    </p>

                    <p>
                        Our team of expert stylists and beauty professionals are dedicated
                        to helping you look and feel your absolute best.
                    </p>

                    <p>
                        Whether you're looking for a fresh new look or self-care,
                        we're here to make your beauty dreams come true.
                    </p>

                    <button className="about-btn">Meet Our Team</button>
                </div>

                
                <div className="about-right">

                    <div className="about-card">
                        <div className="icon">🏅</div>
                        <h2>15+</h2>
                        <p>Years Experience</p>
                    </div>

                    <div className="about-card">
                        <div className="icon">👥</div>
                        <h2>10K+</h2>
                        <p>Happy Clients</p>
                    </div>

                    <div className="about-card">
                        <div className="icon">⏰</div>
                        <h2>7 Days</h2>
                        <p>Open Weekly</p>
                    </div>

                    <div className="about-card">
                        <div className="icon">⭐</div>
                        <h2>4.9</h2>
                        <p>Rating</p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default About