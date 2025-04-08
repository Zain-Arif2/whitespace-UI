import React from "react";
import '../Data/data.css'
import Image3 from '../../assests/images/Element-2.png'
function Data(){
    return(
<>
<div className="main">
<div className="data-container">
    <div className="heading-2">
        <h1>Your work, everywhere you are</h1>
        <p>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
        <div className="try-btn">
            <button>Try Taskey</button>
        </div>
    </div>
</div>
<div className="data-container-2">
    <div className="left-container">
        <h1>100% your data</h1>
        <p>The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.</p>
        <div className="read-btn">
        <button>Read more</button>
        </div>
    </div>
    
    <div className="right-container">
    <img src={Image3} alt="myimage" />
    </div>
</div>
</div>
</>

    );
}
export default Data;
