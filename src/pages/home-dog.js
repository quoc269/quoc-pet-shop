import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HomeDog = () => {
  const data = useStaticQuery(
    graphql`
    {
        allContentfulHomePetShop(sort: {fields: publishDate, order: ASC}) {
          edges {
            node {       
              id
              slug
              publishDate(formatString: "")
              title
              dogDescription {
                raw
              }
              dogImages {
                gatsbyImageData
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SEO title="Blog" />
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
      <ul className="posts">
        {data.allContentfulHomePetShop.edges.map(edge => {
          return (
            <li className="post" key={edge.node.id}>
              <h2>
                <Link to={`/index/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>
              <div className="meta">
                <span>Posted on {edge.node.publishDate}</span>
              </div>               
              <GatsbyImage image={getImage(edge.node.dogImages.gatsbyImageData)} alt={getImage(edge.node.dogImages.gatsbyImageData)} />                         
              <div className="button">
                <Link to={`/index/${edge.node.slug}/`}>Read More</Link>
              </div>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default HomeDog