import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='logo-container'>
          <a href='/add'><h1 className='logo' >Movies App</h1></a>
        </div>
        <ul className='nav-links'>
          <li>
            <Link className='navitem' to='/watchlist'>Watch List</Link>
          </li>
          <li>
            <Link className='navitem' to='/watched'>Seen It</Link>
          </li>
          <li>
            <Link className='navitem' to='/add'>+ Add</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
