import React from 'react'
import "./Contact.css"

const Contact = () => {
    return (
        <section className="contact">

            <h2>Contact Us</h2>
            <p className="contact-sub">
                We'd love to hear from you. Reach out to us for any inquiries or bookings.
            </p>

            <div className="contact-container">

                {/* LEFT SIDE */}
                <div className="contact-info">

                    <div className="contact-item">
                        <div className="icon">📍</div>
                        <div>
                            <h4>Address</h4>
                            <p>123 Beauty Avenue, New York, NY</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="icon">📞</div>
                        <div>
                            <h4>Phone</h4>
                            <p>(555) 123-4567</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="icon">✉️</div>
                        <div>
                            <h4>Email</h4>
                            <p>info@pixiart.com</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="icon">⏰</div>
                        <div>
                            <h4>Working Hours</h4>
                            <p>Mon – Sat : 9AM – 7PM</p>
                        </div>
                    </div>

                </div>

                {/* RIGHT SIDE – FORM */}
                <div className="contact-form">

                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <textarea placeholder="Your Message"></textarea>

                    <button>Send Message</button>

                </div>

            </div>

        </section>
    )
}

export default Contact