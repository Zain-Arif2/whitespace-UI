import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import '../Sidebar/sidebar.css'

const SidebarWithHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      <div className="hamburger" onClick={toggleSidebar}>
        <CiMenuBurger />
      </div>
      <div className={` ${isOpen ? 'open' : 'sidebar'}`}>
        <ul>
          <li><a href="#">Product</a></li>
          <li><a href="#">Soultion</a></li>
          <li><a href="#">Reasources</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarWithHamburger;
