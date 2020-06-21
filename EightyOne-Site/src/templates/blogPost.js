import React from 'react'
import {graphql, Link} from 'gatsby'
// import Header from '../components/Header'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import GetImage from '../components/GetImage'

const Template = ({data, pageContext}) => {
    
    const {next, prev} = pageContext

    const {markdownRemark} = data
    const title = markdownRemark.frontmatter.title
    const html = markdownRemark.html
    return (
        <div>
            {/* Header creates the header from the Header.js*/}
            <p> placeholder</p>
        </div>
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