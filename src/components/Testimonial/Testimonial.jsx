import React from "react";
import './Testimonial.css'
import quote from '../../assests/images/Quote.png'
import Avatar from '../../assests/images/Avater.png'
import group from '../../assests/images/Group.png'
import Avatar2 from '../../assests/images/Avater2.png'
import Avatar1 from '../../assests/images/Avater1.png'

function Testimonial() {
    return (
        <>
            <section className="testimonial-section">
                <h1 className="section-title">What Our Clients Says</h1>
                <div className="testimonials">
                    <div className="testimonial-card">
                        <img src={quote} alt="myimage" />
                        <p className="quote"> Whitespace is designed as a collaboration tool for businesses that is a full project management solution.”</p>
                        <div className="user-info">
                            <img src={Avatar1} alt="myimage" />
                            <div className="last">
                                <p className="name">Oberon Shaw, MCH</p>
                                <p className="role">Head of Talent Acquisition, North America</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card2">
                        <img src={group} alt="myimage" />
                        <p className="quote">Whitespace is designed as a collaboration tool for businesses that is a full project management solution.”</p>
                        <div className="user-info">
                            <img src={Avatar2} alt="myimage" />
                            <div className="last">
                                <p className="name">Oberon Shaw, MCH</p>
                                <p className="role">Head of Talent Acquisition, North America</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card2">
                    <img src={group} alt="myimage" />
                        <p className="quote">Whitespace is designed as a collaboration tool for businesses that is a full project management solution.”</p>
                        <div className="user-info">
                        <img src={Avatar} alt="myimage" />
                            <div className="last">
                                <p className="name">Oberon Shaw, MCH</p>
                                <p className="role">Head of Talent Acquisition, North America</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}
export default Testimonial;