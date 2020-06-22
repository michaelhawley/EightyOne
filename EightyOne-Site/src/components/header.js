import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../scss/styles.scss"

import Navbar from "./navbar"
import Logo from "./logo"

const Header = () => (
  <header>
    <div class = "PrimaryContainer">
      <div class = "LeftContainer"></div>
      <div class = "CenterContainer">
      <Logo />
      <Navbar /> 

        
          
      </div>
      <div class = "RightContainer"></div>
       
    </div>
    
    
    
  </header>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
