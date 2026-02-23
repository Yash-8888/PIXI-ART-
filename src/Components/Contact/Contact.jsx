import React from 'react'
import "./Contact.css"
import { useState } from 'react'

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "119c2e74-8b99-4511-9d2e-0ba9774c9c28");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            setResult("Error");
        }
    };
    return (
        <section className="contact">

            <h2>Contact Us</h2>
            <p className="contact-sub">
                We'd love to hear from you. Reach out to us for any inquiries or bookings.
            </p>

            <div className="contact-container">
                <form action="" className="contact-form" onSubmit={onSubmit} >
                    <input type="text" name='name' placeholder="Your Name" />
                    <input type="tel" name='phone' placeholder="Your mobile number" />
                    <textarea name='message' placeholder="Your Message"></textarea>
                    <button type='submit'>Send Message</button>
                    <span>{result}</span>
                </form>
                

                <div className="contact-info">

                    <div className="contact-item">
                        <div className="icon">📍</div>
                        <div>
                            <h4>Address</h4>
                            <p>Shop No 9B Shetye Market Parel Bhoiwada Mumbai</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="icon">📞</div>
                        <div>
                            <h4>Phone</h4>
                            <p>+91 9664182247</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="icon">✉️</div>
                        <div>
                            <h4>Email</h4>
                            <p>pixieartunisexsalon@gmail.com</p>
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



            </div>

        </section>
    )
}

export default Contact