
import React, { useState } from 'react'
import {Link } from 'gatsby'
import "../scss/navbar.scss"
import R from '../scss/navbar.module.scss';
import "../scss/logo.scss"
import "../scss/hamburgers/hamburgers.scss"



class LogoAlt extends React.Component {
    
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
        
        console.log(this.state.isToggleOn)
      }

      
    
      render() {
        return (
            <div class = "LogoContainer">
                <div class = "LogoDiv"> 
                    <Link to= '/'>
                        <h1 class = "LogoP">EightyOne</h1>
                    </Link>
                </div>



                <button class = {this.state.isToggleOn ? 'hamburger hamburger--collapse' : 'hamburger hamburger--collapse is-active'}  type="button" onClick={this.handleClick}>
                    {/* {this.state.isToggleOn ? 'ON' : 'OFF'} */}
                    <span class="hamburger-box"> 
                        <span class="hamburger-inner"></span>
                    </span>
                </button>

                    
          




            </div>
        );
      }
    }

export default LogoAlt;






