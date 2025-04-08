import React from "react";
import Logo from "../Logo/logo";
import './header.css'
import Button from "../Button/Button";


function Header() {
    return (
        <>
            <header>
                <div className="main-wrapper">
                    <div className="logo">
                        <Logo />
                    </div>
                    <div className="navbar">
            
                    </div>

                    <div className="btn">
                        <div className="login">
                            <button>Login</button>
                        </div>
                        <Button />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;