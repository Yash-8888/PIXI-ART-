import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* COLUMN 1 */}
                <div className="footer-col">
                    <h2 className="logo">✂ PIXI ART</h2>
                    <p>
                        Elevating beauty experiences with premium services and expert care.
                    </p>
                </div>

                {/* COLUMN 2 */}
                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Gallery</li>
                        <li>About</li>
                    </ul>
                </div>

                {/* COLUMN 3 */}
                <div className="footer-col">
                    <h3>Services</h3>
                    <ul>
                        <li>Hair Styling</li>
                        <li>Nail Services</li>
                        <li>Makeup & Beauty</li>
                        <li>Spa Treatments</li>
                    </ul>
                </div>

                {/* COLUMN 4 */}
                <div className="footer-col">
                    <h3>Follow Us</h3>

                    <div className="social-icons">
                        <span>🌐</span>
                        <span>📘</span>
                        <span>🐦</span>
                    </div>

                </div>

            </div>

            <hr />

            <p className="copyright">
                © 2025 PIXI ART. All rights reserved.
            </p>

        </footer>
    )
}

export default Footer