import React from "react"
import R from '../scss/footer.module.scss';
import "../scss/basics.scss"

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const m = new Date().getMonth()
const month = months[m]

const WebFooter = () => (
    
    <div class = "PrimaryContainerHeader">
        <div class = "LeftContainer"></div>
        <div class = "CenterContainer">
            <footer className={R.footer}>
                Built with <a href="https://www.gatsbyjs.org">Gatsby</a>.  
                Last updated  {month}, {new Date().getFullYear()}. 
            </footer>
            
        </div>
        <div class = "RightContainer"></div>
    </div>
    

  
  )

  export default WebFooter
