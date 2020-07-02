import React from "react"
//import {Link} from "gatsby"
import Layout from "../components/layout"



const SingleTagTemplate = ({data, pageContext}) => {
    console.log(pageContext)
    const {posts, tagName} = pageContext
    console.log(posts)
    return (

        <Layout>
        <div class = "PrimaryContainer">
          <div class = "LeftContainer"></div>
          <div class = "CenterContainer">
            {`${tagName}`}
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