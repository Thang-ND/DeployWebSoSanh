import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../component/Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  //const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
  };


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <a href='http://localhost:3000/' className='navbar-logo' onClick={closeMobileMenu}>
            HUST & NDT 
            <i class='fas fa-spa' />
          </a>
          {/* <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div> */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a href='https://deploy-web-so-sanh.vercel.app/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='https://deploy-web-so-sanh.vercel.app/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='https://deploy-web-so-sanh.vercel.app/products'
                className='nav-links'
                onClick={() => closeMobileMenu}
              >
                Products
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='https://deploy-web-so-sanh.vercel.app/fluctuations'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Fluctuations
              </a>
            </li>
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
