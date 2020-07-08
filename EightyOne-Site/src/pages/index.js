import React from "react"

import Layout from "../components/layout"

import "../scss/styles.scss"

import BlogFrame from '../components/BlogFrame'

import 'bootstrap/dist/css/bootstrap.min.css';
import FlexFrame from "../components/FlexFrame";




const IndexPage = ({data}) => { 
  
  console.log(data)

  const {edges} = data.BlogPosts
  console.log({edges})

  const post = edges.map((e) => {
    return e.node
  });
  console.log({post})

  return(
  <Layout>
    <div class = "PrimaryContainer">
      <div class = "LeftContainer"></div>
      <div class = "CenterContainer">
        {/* <FlexFrame data = {edges} images = {images} />   */}
        <BlogFrame data = {post} type = {"index"} />  
      </div>
      <div class = "RightContainer"></div>
       
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

          
          frontmatter {
            title
            excerpt
            path
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  src
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }  
      }      
    }
  }
  
`



export default IndexPage
