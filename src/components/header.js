import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
    <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div>
          <nav>
            <ul style={{ display: "flex", flex: 1 }}>              
              <li
                  key={siteTitle.title}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link to="/"
                      style={{
                        color: `white`,
                        textDecoration: `none`,
                      }}
                  >
                    <StaticImage
                      src="../images/petshop-logo.png"
                      width={90}
                      quality={90}
                      formats={["auto", "webp", "avif"]}
                      alt="A Gatsby astronaut"
                      style={{ marginBottom: `1.45rem` }}
                    />
                  </Link>
                </li>
                <li
                  key={siteTitle.title}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link to="/"
                      style={{
                        color: `white`,
                        textDecoration: `none`,
                      }}
                  >
                    HOME
                  </Link>
                </li>
                <li
                  key={siteTitle.title}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link to="/"
                    style={{
                      color: `white`,
                      textDecoration: `none`,
                    }}
                  >
                   SHOPPING
                  </Link>
                </li>
                <li
                  key={siteTitle.title}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link to="/"
                    style={{
                      color: `white`,
                      textDecoration: `none`,
                    }}
                  >
                   BLOG
                  </Link>
                </li>
                <li
                  key={siteTitle.title}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link to="/"
                    style={{
                      color: `white`,
                      textDecoration: `none`,
                    }}
                  >
                   ABOUT
                  </Link>
                </li>
                <li
                  key={siteTitle.title}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link to="/"
                    style={{
                      color: `white`,
                      textDecoration: `none`,
                    }}
                  >
                   CONTACT
                  </Link>
                </li>                             
            </ul>
          </nav>
        </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  logo: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
  logo:``
}

export default Header
