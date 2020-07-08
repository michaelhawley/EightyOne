import React from "react"
import BlogCard from '../components/BlogCard copy'
import {Row, Col, Container} from 'react-bootstrap';
import ReactStyles from '../scss/card2.module.scss'; 
import "../scss/card2.scss"


const NPerLine = 2

function FlexFrame(b){

    // extract the data
    const blogData = b.data
    const images = b.images
    
    function CreateCard(b){
        console.log(b)
        const blogContent = b.node.frontmatter
        console.log(blogContent)
        
        return(
            
            <BlogCard pathSlug = {blogContent.path} titleSlug = {blogContent.title}/>
        )
    }

    const Posts = blogData.map((blog) => {
            return(CreateCard(blog))
    })
    
    return(

        <div class = "BlogFrameContain2">
            <div class = "BlogFrameContain">
                <div class = "colorDiv"></div>
                {/* {Posts} */}
            </div>
        </div>
                

    )
}




export default FlexFrame

