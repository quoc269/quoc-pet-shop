import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.css';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import MenuBar from "../components/menu-bar";
import HomeDog from "./home-dog";
const IndexPage = () =>{
  return (    
    <Layout>
     <div>
        <HomeDog/>
     </div>
    </Layout>
  )
}

export default IndexPage