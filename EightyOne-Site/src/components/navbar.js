
import React from 'react'
import {Link } from 'gatsby'
import "../scss/navbar.scss"
import R from '../scss/navbar.module.scss';


function NavLink(data){
    if (data.Type ==="Down"){
        console.log("down")
        return(
            <div class = "NavButtonDown">
                <Link to = {data.Link} className = {R.NavLink}> 
                    <div class = "NavCentreDown">{data.Text}</div>
                </Link>
            </div>
            
        )
    }else{
    return(
        <div class = "NavButton"> 
            <Link to = {data.Link} className = {R.NavLink}> 
                <div class = "NavEmptyHeight">
                    <div class = "NavButtonHeight">
                        <div class="NavEmptyHeight">
                            <p class = "NavCentre">{data.Text}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )}
}


function DropDown (props) {

        
        return(
            

                    <div class = {props.type === "Down" ? 'NavContainerDown' : 'NavContainer'} >  
                        <NavLink Link= '/tags/R' Text = "Projects" Type = {props.type} />
                        <NavLink Link= '/tags/Python' Text = "Tips" Type = {props.type}/>
                        <NavLink Link= '/tags/Excel' Text = "Tags" Type = {props.type} />
                        <NavLink Link= '/tags/PowerBI' Text = "About" Type = {props.type} />

                    </div>
                
            
        )
    }



export {DropDown}; 


