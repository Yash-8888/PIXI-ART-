import React from 'react'
import "./Services.css"

const Services = () => {
    return (
        <section className="services">

            <h2>Our Services</h2>
            <p className="sub-text">
                Discover our full range of premium beauty and wellness services, tailored
                to enhance your natural beauty and boost your confidence.
            </p>

            <div className="service-container">

                <div className="card">
                    <div className="icon">✂️</div>
                    <h3>Hair Styling</h3>
                    <p>Expert cuts, coloring, and styling for all hair types.</p>
                    <span>From $45</span>
                </div>

                <div className="card">
                    <div className="icon">💅</div>
                    <h3>Nail Services</h3>
                    <p>Manicures, pedicures, nail art, and gel treatments.</p>
                    <span>From $30</span>
                </div>

                <div className="card">
                    <div className="icon">💄</div>
                    <h3>Makeup & Beauty</h3>
                    <p>Professional makeup for any occasion.</p>
                    <span>From $55</span>
                </div>

                <div className="card">
                    <div className="icon">❤️</div>
                    <h3>Spa Treatments</h3>
                    <p>Relaxing facials, massages, and skincare.</p>
                    <span>From $65</span>
                </div>

            </div>

        </section>

    )
}

export default Services
