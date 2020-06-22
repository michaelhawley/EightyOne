
import React from 'react'
import {Link } from 'gatsby'
import "../scss/navbar.scss"
import R from '../scss/navbar.module.scss';
import "../scss/logo.scss"

function Logo(){
    
    return(
        <div class = "LogoDiv"> 
            <Link to= '/'>
                <h1 class = "LogoP">EightyOne</h1>
            </Link>
        </div>
    )
}

export default Logo;