import React from 'react';
import '../sass/new.css';
import { useState } from 'react';

const Nav = () => {
    const[searchTerm,setSearchTerm] = useState('')
  return (
    <div>
    <ul className='navbar'>
        <input value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for mobiles"/>
        <a>Mobile</a>
        <a>Laptop</a>
        <a>Accessories</a>
        <a>Cart</a>
    </ul>
    </div>
  )
}

export default Nav