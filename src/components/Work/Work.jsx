import React from "react";
import '../Work/work.css'
import Image from '../../assests/images/Image.png'
import Image2 from '../../assests/images/Image2.png'


function Work(){
return(
    <>
    <div className="main-container">
    <div className="work-container">
        <div className="content">
            <h1>Project Management</h1>
            <p>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photo with the mobile app and save them to a note</p>
            <div className="btn1">
                <button>Get Started</button>
            </div>
        </div>
        <div className="img-container">
        <img src={Image} alt="myimage"/>
        </div>
    </div>
    <div className="work-container2">
        <div className="img2-container">
        <img src={Image2} alt="myimage"/>
        </div>
        <div className="content-2">
            <h1>Work Together</h1>
            <p>With whitespace,share your notes with your colleagues and collaborate on them.You can also publish a note to the internet and share the URL with others.</p>
            <div className="btn2">
                <button>Get it now</button>
            </div>
        </div>
    </div>
    </div>
    </>
);
}
export default Work;