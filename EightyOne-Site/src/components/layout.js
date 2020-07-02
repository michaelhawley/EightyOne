/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import WebFooter from "./footer"


const Expand = () => {
  return (<div class = "Expand"> </div>)
}

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <div class = "Wrap">
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
  
        <Header />
        <main><body>{children} </body></main>
        <Expand/>
        <WebFooter/>     
      </div> 
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
