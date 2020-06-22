import React from "react"
import BlogCard from '../components/BlogCard'
import {Row, Col, Container} from 'react-bootstrap';
import ReactStyles from '../scss/Card.module.scss'; 

const NPerLine = 2

function BlogFrame(b){
    // extract the data
    const blogData = b.data
    const images = b.images
   

    // work out how many rows and columns we need
    const nBlogs = b.data.length
    const nRows = [...Array(Math.ceil(nBlogs/ NPerLine)).keys()]; 
    const nCols = [...Array(NPerLine).keys()]; 

    //method to make each row with n columns
    function MakeRow(data){
        const Columns = nCols.map((c, index) =>{return(<MakeColumn key = {index} row = {data.id} col = {c} /> ) })
        return(<Row className={ReactStyles.RowCard} >{Columns}</Row>)}

    function FrontImage(ImageId){
        
        const Find = ImageId.substring(0, ImageId.indexOf('/'))
        

        const regex = new RegExp(`^${Find}/`);
        const matchingImages = images.filter(function(x){
            return x.node.relativePath.match(regex) ;
          })
      
        
        if (matchingImages.length === 0){
            return (null)
        }
        else{
            return (
                matchingImages[0].node.childImageSharp.fluid
            )
        }
    

    }

    function MakeColumn(data){
        const id = data.row * NPerLine + data.col // work out which blog we want to calll
        if (id < nBlogs){
            const blogDetails = (blogData[id].node)
            const blogContent = blogDetails.frontmatter
            const idImage = (blogDetails.parent.relativePath) // get the associated image
            const BlogImage = FrontImage(idImage)
            
            console.log(b)        
            return(
                <Col md className={ReactStyles.ColCard}>
                    
                    <BlogCard pathSlug = {blogContent.path} titleSlug = {blogContent.title} blogimage = {BlogImage} blogID = {id}/>
                </Col>
            ) 
        }else{
        return(
            <Col md >
                
            </Col>

        )}
    }
    


    // make a new row for each needed
    const newRows = nRows.map((r, index) =>{return(<MakeRow key = {index} id = {r}/>)})

    //return(<Container fluid>/Container>)
    return(
        <Container fluid className={ReactStyles.BlogContainer}>
            
            {newRows}
        </Container>
    )
}




export default BlogFrame

