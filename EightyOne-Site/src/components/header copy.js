import { Link } from "gatsby"
import PropTypes from "prop-types"
import React , { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../scss/styles.scss"
import styled from 'styled-components'
import NavbarWide from "./navbar"
import "../scss/logo.scss"
import LogoAlt from "./logoAlt"

// import "../scss/hamburgers/hamburgers.scss"
import "../scss/burger.scss"

const Header = () => {
  
  return(
    <header>
      <div class = "PrimaryContainerHeader">
        <div class = "LeftContainer"></div>
        <div class = "CenterContainer">
        <LogoAlt/>
        {/* <div class = "LogoContainer">
          <div class = "LogoDiv"> 
              <Link to= '/'>
                  <h1 class = "LogoP">EightyOne</h1>
              </Link>
          </div>
          <div class = "BurgerContainer">
            <Burger open={open} setOpen={setOpen} />
          </div>
        </div> */}
        




        <NavbarWide /> {/* Appears on wide view, disappears on small view */}

            
        </div>
        <div class = "RightContainer"></div>
      </div>
    </header>
  )
  }
export default Header
