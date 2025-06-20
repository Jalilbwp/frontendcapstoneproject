import { Outlet, Link } from "react-router-dom"
import { useState } from 'react';
import { FaRegTimesCircle, FaGripLines } from '

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
    return (
      <>
      <div className="mobile-nav" onClick={togg
        {isOpen ? <FaRegTimesCircle /> : <FaGri
      </div>
      <nav className={`nav ${isOpen ? 'active' 
        <Link to="/" className="nav-item">HOME<
        <a href="#" className="nav-item">ABOUT<
        <a href="#" className="nav-item">MENU</
        <Link to="/booking" className="nav-item
        <a href="#" className="nav-item">ORDER 
        <a href="#" className="nav-item">LOGIN<
      </nav>
      </>
    )
  }
  

  
