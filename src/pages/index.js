import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.css';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const IndexPage = () =>{ 
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
                gatsbyImageData (width: 400, height: 400)
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <div className="row">
      {data.allContentfulHomePetShop.edges.map(edge => {
          return (
            <div className="col">
              <h3> 
                  <Link to={`/index/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h3>
                <div className="meta">
                  <span>Posted on {edge.node.publishDate}</span>
                </div>               
                <GatsbyImage image={getImage(edge.node.dogImages.gatsbyImageData)} alt={getImage(edge.node.dogImages.gatsbyImageData)} />                         
                <div className="button">
                <Link to={`/index/${edge.node.slug}/`}>Read More</Link>
                </div>
            </div>
          )
      })}
      </div> 
    </Layout>
  )
}

export default IndexPage
