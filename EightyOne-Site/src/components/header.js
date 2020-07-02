import { Link } from "gatsby"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../scss/styles.scss"

import {DropDown} from "./navbar"


import "../scss/logo.scss"

import "../scss/navbar.scss"
import "../scss/burger.scss"

import "../scss/header.scss"



class Header extends React.Component {
  
  constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }

  handleClick() {   
    console.log(this.state)
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
                    <Link to= '/' style={{ textDecoration: 'none' }}>
                        <h2 class = "LogoP">EightyTwo</h2>
                     
                    </Link>
                   
                </div>
                
                <div class = "BurgerContainer">
                  
                    <button class = {this.state.isToggleOn ? 'hamburger hamburger--collapse BurgCenter' : 'hamburger hamburger--collapse is-active BurgCenter'}  type="button" onClick={this.handleClick}>
                        <span class="hamburger-box"> 
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                  
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
