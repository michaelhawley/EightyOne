import React from "react"
import { Link} from 'gatsby'
import Card from 'react-bootstrap/Card';
import Img from "gatsby-image"
import ReactStyles from '../scss/card2.module.scss'; 
import '../scss/card.scss'; 



function BlogCard(d) {

    return (
        

            
           
            <Card fluid className = {ReactStyles.BlogCard}>
                     
                    <div class = "CardText">
                        <Card.Title className = {ReactStyles.CardTitle}>  
                            <Link to ={d.pathSlug} className = {ReactStyles.CardLink}> {d.titleSlug}  </Link>
                        </Card.Title>
                    </div>
                
            </Card>
            
        
    )
}
//eq: "gatsby-icon"



export default BlogCard