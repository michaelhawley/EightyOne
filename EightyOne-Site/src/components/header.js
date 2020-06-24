import { Link } from "gatsby"
import PropTypes from "prop-types"
import React , { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../scss/styles.scss"
import styled from 'styled-components'
import NavbarWide , {DropDown} from "./navbar"
import "../scss/logo.scss"
import LogoAlt from "./logoAlt"
import "../scss/navbar.scss"
import "../scss/burger.scss"

class Header extends React.Component {
  
  constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
      this.a = `hamburger hamburger--collapse is-active`
    }

  handleClick() {   
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }))
  }
  render() {
    return(
      <header>
        
        <div class = "PrimaryContainerHeader">
          
          <div class = "LeftContainer"></div>
          <div class = "CenterContainer">
            <div class = "zBoost">
              <div class = "LogoContainer">
                <div class = "LogoDiv"> 
                    <Link to= '/'>
                        <h1 class = "LogoP">EightyOne</h1>
                    </Link>
                </div>
                
                <div class = "BurgerContainer">
                  <div class = "BurgerCentre">
                    <button class = {this.state.isToggleOn ? 'hamburger hamburger--collapse' : 'hamburger hamburger--collapse is-active'}  type="button" onClick={this.handleClick}>
                        {/* {this.state.isToggleOn ? 'ON' : 'OFF'} */}
                        <span class="hamburger-box"> 
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                  </div>
                </div>
              </div>
              <DropDown type = {"Across"}/> {/* Appears on wide view, disappears on small view */}
            </div>

            <div class="DropDisapear">
              <div class = {this.state.isToggleOn ? 'DropContainerUp' : 'DropContainerDown'}>
                <DropDown type = {"Down"} />
              </div>
            </div>
            
            
            

                
            </div>
            <div class = "RightContainer"></div>
          </div>
        </header>
      );
    }}
export default Header
