import React from 'react'
import {graphql, Link} from 'gatsby'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../scss/styles.scss"
import "../scss/blog.scss"



const Template = ({data, pageContext}) => {
    
    const {next, prev} = pageContext

    const {markdownRemark} = data
    const title = markdownRemark.frontmatter.title
    const html = markdownRemark.html
    return (
        

            <Layout>
                <div class = "PrimaryContainer">
                <div class = "LeftContainer"></div>
                <div class = "CenterContainer_Blog">
                
                    <h1>{title}</h1>
                    <div className = 'blogpost'
                        dangerouslySetInnerHTML={{__html: html}}

                    />
                    {prev && <Link to={prev.frontmatter.path}>
                        Previous
                    </Link>
                    }
                    
                    {next && <Link to={next.frontmatter.path}>
                        Next
                    </Link>
                    
                    }


                </div>
                <div class = "RightContainer"></div>
                
                </div>
            </Layout>

        
    )
}




export const query = graphql`
    query($pathSlug: String!) { 
        markdownRemark(frontmatter: { path: {eq: $pathSlug}}){
        html
        frontmatter {
            title
        }
    }
}

`

export default Template