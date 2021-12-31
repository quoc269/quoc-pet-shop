import React from "react"
import { graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
export const query = graphql`
query ($slug: String!) {
    contentfulHomePetShop(slug: {eq: $slug}) {
      title
      publishDate(formatString: "")
      dogDescription {
        raw
      }
      dogImages {
        gatsbyImageData
      }
    }
  }
`

const DogPost = props => {
  return (
    <Layout>
      <SEO title={props.data.contentfulHomePetShop.title} />    
      <div className="content">
        <h1>{props.data.contentfulHomePetShop.title}</h1>
        <p>
            <span className="meta">          
              Posted on {props.data.contentfulHomePetShop.publishDate}
            </span>
        </p>        
      <GatsbyImage image={getImage(props.data.contentfulHomePetShop.dogImages)} alt={getImage(props.data.contentfulHomePetShop.dogImages)} />
      {documentToReactComponents(JSON.parse(props.data.contentfulHomePetShop.dogDescription.raw))}
      </div>
    </Layout>
  )
}

export default DogPost