import React from "react";
import '../Sponser/sponser.css'
import logo from '../../assests/images/Apple.png'
import logo1 from '../../assests/images/Vector.png'
import logo2 from '../../assests/images/logo2.png'
import logo3 from '../../assests/images/logo3.png'
import logo4 from '../../assests/images/Apps.png'

function Sponser(){
    return(
<>
<div className="sponser-container">
<h1>Our Sponsers</h1>
    <div className="logos">
    <img src={logo} alt="myimage"/>
    <img src={logo1} alt="myimage"/>
    <img src={logo2} alt="myimage"/>
    <img src={logo3} alt="myimage"/>
    </div>
</div>
<div className="app-container">
  
    
    <div className="img-container">
    <img src={logo4} alt="myimage"/>
    </div>
    <div className="app">
    <h1>Work with Your Favorite Apps Using whitepace</h1>
    <p>Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.</p>
    <div className="btn-more">
        <button>Read more</button>
    </div>
</div>
</div>
</>

    );
}
export default Sponser;