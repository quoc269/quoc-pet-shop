import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Carousel } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
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
                gatsbyImageData (width: 400, height: 400)
              }
            }
          }
        }
      }
    `
  )
  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item interval={5000}>
            <StaticImage
              src="../images/D_banner_01.jpg"
              formats={["auto", "webp", "avif"]}
              alt="dog-landing-hero-lg.jpg"
              style={{ marginBottom: `1.45rem` }}
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <StaticImage
              src="../images/D_banner_02.jpg"
              formats={["auto", "webp", "avif"]}
              alt="dog-landing-hero-lg.jpg"
              style={{ marginBottom: `1.45rem` }}
            />
            <Carousel.Caption >
              {/* <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item >
          <Carousel.Item interval={10}>
            <StaticImage
              src="../images/D_baner_01.jpg"
              formats={["auto", "webp", "avif"]}
              alt="dog-landing-hero-lg.jpg"
              style={{ marginBottom: `1.45rem` }}
            />
            <Carousel.Caption>
             {/*  <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="bg-warning py-3"  >
        <h1 style={{ color: "white" }} >ABOUT US</h1>
        <div>
          <p>How pets help adults with Alzheimer’s disease or dementia
            As part of the disease, Alzheimer’s patients may exhibit a variety of behavioral problems, many related to an inability to deal with stress.

            Research at the University of California at Davis concluded that Alzheimer’s patients suffer less stress and have fewer anxious outbursts if there is a dog or cat in the home.
            Pets can provide a source of positive, nonverbal communication. The playful interaction and gentle touch from a well-trained, docile animal can help soothe an Alzheimer’s patient and decrease aggressive behavior—as can simply being exposed to bright aquariums or fish tanks.
            In many cases a patient’s problem behavior is a reaction to the stressed response of the primary caretaker. Pets can help ease the stress of caregivers. Cats or caged animals may be more suitable than dogs, which generally require more care and can add to the burden of someone who’s already looking after an Alzheimer’s patient.(https://www.helpguide.org/articles/mental-health/mood-boosting-power-of-dogs.htm)</p>
        </div>
      </div>
      <div className="bg-success py-3 my-3"  >
        <h1 style={{ color: "white" }} >OUR DOGS</h1>
      </div>
      <div className="row">
        {data.allContentfulHomePetShop.edges.map(edge => {
          return (
            <div className="col-sm-4">
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
    </div>
  )
}

export default HomeDog