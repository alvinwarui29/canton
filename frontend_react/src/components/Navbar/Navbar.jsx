import './Navbar.scss'
import React from 'react'
import {images} from '../../constants';
const Navbar = () => {
  return (
    <nav>
      <div>
      <img src={images.logo} alt="Logo" />
      </div>
      <ul>
        {['home','about','contact','work','skills']}
      </ul>
    </nav>
  )
}

export default Navbar