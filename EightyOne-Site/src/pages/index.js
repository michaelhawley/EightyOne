import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../scss/styles.scss"

import BlogFrame from '../components/BlogFrame'

import 'bootstrap/dist/css/bootstrap.min.css';

function Testing (a,b) {
  console.log(a)
  return (
    <div>abc</div>
  )
}


const IndexPage = ({data}) => { 
  
  
  const {edges} = data.BlogPosts
  const images = data.TitleImages.edges



  return(
  <Layout>
    <div class = "PrimaryContainer">
      <div class = "LeftContainer">a</div>
      <div class = "CenterContainer">
        <BlogFrame data = {edges} images = {images} />  
      </div>
      <div class = "RightContainer">b</div>
       
    </div>
  </Layout>
)
}




export const query = graphql`
  query HomepageQuery {
    BlogPosts: allMarkdownRemark(
      sort: {order: DESC, fields:[frontmatter___date]}    )
    {  
      edges {
        node {
          parent {
        	... on File {
            relativePath
        	}
      		}
          
          frontmatter {
            title
            path
            image
          }
        }  
      }      
    }

    TitleImages: allFile(
      filter: {
        sourceInstanceName: {eq: "blogPosts"}
        name: {regex: "/^.itle/"} 
      }
      
      )
  {
    edges {
      node {
      relativePath
      childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
            
          }
        }
      }
    }
  }

    BackupImage: allFile(filter: {
        sourceInstanceName: {eq: "images"}
        name: {regex: "/^.ackup/"}
      })
    {
      edges {
        node {
        childImageSharp {
            fluid(maxWidth: 300, quality: 50) {
          originalName
            }
          }
        }
      }
    }

    
  }
  
`



export default IndexPage
