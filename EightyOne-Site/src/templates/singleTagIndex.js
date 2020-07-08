import React from "react"
//import {Link} from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import BlogFrame from '../components/BlogFrame'

const SingleTagTemplate = ({data, pageContext}) => {
    
    const {edges, tagName} = pageContext
    // console.log(edges[0].frontmatter.thumbnail.childImageSharp.fluid)

    console.log({edges})
    return (

        <Layout>
        <div class = "PrimaryContainer">
          <div class = "LeftContainer"></div>
          <div class = "CenterContainer">
            <BlogFrame data = {edges} type = {"index"} />  

            {`${tagName}`}
            {/* <Img fluid={edges[0].frontmatter.thumbnail.childImageSharp.fluid} /> */}
             
            test
          </div>
          
          <div class = "RightContainer"></div>
           
        </div>
      </Layout>
        
    )
}

export default SingleTagTemplate





// <div>
// <div>
//     Posts about {`${tagName}`}

// </div>
// <div>
//     <ul>
//         {posts.map((post,index)=>
//         <li key={index}>
//             <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
//         </li>
//         )

//         }
//     </ul>
// </div>
// </div>