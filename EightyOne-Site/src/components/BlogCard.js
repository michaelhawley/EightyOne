import React from "react"
import {graphql, useStaticQuery, Link} from 'gatsby'
import Card from 'react-bootstrap/Card';
import Img from "gatsby-image"
import ReactStyles from '../scss/Card.module.scss'; 
import '../scss/card.scss'; 



function ImgCatch(image){
    
    if(image.image){
        
        return (
            <div class = "CardImage" >
                {/* <Img fluid={image.image} style={{ margin: '1rem', maxHeight: '100%' }}
                imgStyle={{ objectFit: 'contain' }} /> */}
                <Img fluid={image.image} className = {ReactStyles.ImgTest} />
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
        
        
            
           
            <Card className = {ReactStyles.Card}>
                    <ImgCatch image = {d.blogimage}/>
                    <div class = "CardText">
                        <Card.Title className = {ReactStyles.CardTitle}>  
                            <Link to ={d.pathSlug} className = {ReactStyles.CardLink}> {d.titleSlug} </Link> 
                        </Card.Title>
                    </div>
                
            </Card>
            
        
    )
}
//eq: "gatsby-icon"



export default BlogCard