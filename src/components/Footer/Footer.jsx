import React from "react";
import '../Footer/footer.css'
import app from '../../assests/images/App-icon.png'
import social from '../../assests/images/Social.png'
import logo1 from '../../assests/images/Logo1.png'
function Footer() {
    return (
        <>
        <footer>
        <div className="footer-container">
            <div className="upper-container">
                <h1>Try Whitespace<br />today</h1>
                <p>Get started for free.<br /> Add your whole team as your needs grow</p>
                <div className="free">
                <button>Try Taskfree key</button>
                </div>
                <p>On a big team?Contact sales</p>
                <div className="app-icons">
                <img src={app} alt="myimage" />
                </div>
            </div>
            <div className="lower-container">
            <div class="footer-content">
            <div class="brand-info">
            <img src={logo1} alt="myimage" />
                <p>Whitespace was created for the new ways we live and work. We make a better workspace around the world.</p>
            </div>
            <div class="footer-links">
                <div>
                    <h3>Product</h3>
                    <ul>
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Customer stories</li>
                    </ul>
                </div>
                <div>
                    <h3>Resources</h3>
                    <ul>
                        <li>Blog</li>
                        <li>Guides & tutorials</li>
                        <li>Help center</li>
                    </ul>
                </div>
                <div>
                    <h3>Company</h3>
                    <ul>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Media kit</li>
                    </ul>
                </div>
            </div>
            <div class="cta">
                <h3>Try It Today</h3>
                <p>Get started for free. Add your whole team as your needs grow.</p>
                <button>Start today</button>
            </div>
        </div>
        <div class="footer-bottom">
            <div className="list">
           <li>Terms & privacy</li>
           <li>Security</li>
           <li>Status</li>
           <li>@2021 Whitespace LLC.</li>
           </div>
           <div className="social-icons">
           <img src={social} alt="myimage" />
           </div>
            </div>
        </div>
        <div/>
        </div>
        </footer>
        </>

    );
}
export default Footer;