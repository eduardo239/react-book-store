import React from 'react';
const Navbar = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-sm-6'>
          <div className='nav-logo'>
            <h1>Logo</h1>
          </div>
        </div>
        <nav className='col-12 col-sm-6'>
          <ul className='nav-links'>
            <li>
              <a href='/'>home</a>
            </li>
            <li>
              <a href='/'>news</a>
            </li>
            <li>
              <a href='/'>books</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
