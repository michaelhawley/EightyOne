
import React from 'react'
import {Link } from 'gatsby'
import "../scss/navbar.scss"
import R from '../scss/navbar.module.scss';


function NavLink(data){
    
    return(
        <div class = "NavButton"> 
            <Link to = {data.Link} className = {R.NavLink}> 
                <div class = "NavEmptyHeight">
                    <div class = "NavButtonHeight">
                        <p class = "NavCentre">{data.Text}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}


class Navbar extends React.Component {
    render() {
        // NavContainer - Span the page
        // Nav Button -  Control Width
        return(
        <div class = "NavContainer"> 
            <NavLink Link= '/tags/R' Text = "R Stats" />
            <NavLink Link= '/tags/R' Text = "Python" />
            <NavLink Link= '/tags/R' Text = "Excel" />
            <NavLink Link= '/tags/R' Text = "PowerBI" />
            <NavLink Link= '/tags/R' Text = "SQL" />
        </div>
        )
        
    }

}

export default Navbar;
