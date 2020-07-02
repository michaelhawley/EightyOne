import React from "react"
import { Link} from 'gatsby'
import Card from 'react-bootstrap/Card';
import Img from "gatsby-image"
import ReactStyles from '../scss/Card.module.scss'; 
import '../scss/card.scss'; 



function ImgCatch(image){
    
    if(image.image){
        
        return (
            
                <div class = "CardImage" >


                    <Link to = {image.link}> <Img fluid={image.image} className = {ReactStyles.ImgTest} /></Link>
                </div>
            
        )}
    else{
        return(
            <div>no image</div>
        )
    }
}


function BlogCard(d) {

    return (
        

            
           
            <Card fluid className = {ReactStyles.BlogCard}>
                     <ImgCatch image = {d.blogimage} link = {d.pathSlug} />
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