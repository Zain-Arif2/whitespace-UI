import React from "react";
import '../Customize/customize.css'
import Button from "../Button/Button";
import Image from '../../assests/images/Image.png'

function Customize() {
    return (
        <>
            <div className="main-container-2">
                <div className="work-container-2">
                    <div className="content-3">
                        <h1>Use as Extension</h1>
                        <p>Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
                        <div className="btn3">
                            <Button />
                        </div>
                    </div>
                    <div className="img-container">
                        <img src={Image} alt="myimage" />
                    </div>
                </div>
            </div>
            <div className="main-container-3">
            <div className="work-container-3">
                <div className="img2-container">
                    <img src={Image} alt="myimage" />
                </div>
               
                    <div className="content-4">
                        <h1>Customise it
                            to your needs</h1>
                        <p>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                        </p>
                        <div className="btn3">
                            <Button />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
export default Customize;