import React from "react";
import '../Price/price.css'


function Price() {
    return (
        <>
            <div className="price-container">
                
                <div className="heading">
                    <h1>Choose Your Plan</h1>
                    <p>Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
                </div>
                <div className="price-card">
                <div className="card-1">
                    <div className="pricing-content">
                        <h2>Free</h2>
                        <h4>$0</h4>
                        <p>Capture ideas and find them quickly</p>
                    </div>
                    <div class="pricing-card-personal">
                        <ul>
                            <li> Sync unlimited devices</li>
                            <li> 10 GB monthly uploads</li>
                            <li> 200 MB max. note size</li>
                            <li> Customize Home dashboard and access extra widgets</li>
                            <li>Connect Google Calendar account</li>
                            <li> Add due dates, reminders, and notifications to your task</li>
                        </ul>
                    </div>
<button>Get Started</button>
                </div>
                <div className="card-2">
                    <div className="pricing-content">
                        <h2>Free</h2>
                        <h4>$11.99</h4>
                        <p>Capture ideas and find them quickly</p>
                    </div>
                    <div class="pricing-card-personal">
                        <ul>
                            <li> Sync unlimited devices</li>
                            <li> 10 GB monthly uploads</li>
                            <li> 200 MB max. note size</li>
                            <li> Customize Home dashboard and access extra widgets</li>
                            <li>Connect Google Calendar account</li>
                            <li> Add due dates, reminders, and notifications to your task</li>
                        </ul>
                    </div>
                    <button>Get Started</button>
                </div>
                <div className="card-3">
                    <div className="pricing-content">
                        <h2>Free</h2>
                        <h4>$49.99</h4>
                        <p>Capture ideas and find them quickly</p>
                    </div>
                    <div class="pricing-card-personal">
                        <ul>
                            <li> Sync unlimited devices</li>
                            <li> 10 GB monthly uploads</li>
                            <li> 200 MB max. note size</li>
                            <li> Customize Home dashboard and access extra widgets</li>
                            <li>Connect Google Calendar account</li>
                            <li> Add due dates, reminders, and notifications to your task</li>
                        </ul>
                    </div>
                    <button>Get Started</button>
                </div>
                </div>
                
            </div>
        </>
    );
}
export default Price;