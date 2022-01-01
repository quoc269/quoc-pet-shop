import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import { StaticImage } from "gatsby-plugin-image"
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap"

const MenuBar = () => {
    return (
        < Navbar className="nav" expand="lg" style={{ backgroundColor: 663399 }}>
            <Container fluid >
                <Navbar.Brand href="/">
                    <StaticImage
                        src="../images/petshop-logo.png"
                        width={90}
                        quality={90}
                        formats={["auto", "webp", "avif"]}
                        alt="petshop-logo.png"
                        style={{ marginBottom: `1.45rem` }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/" style={{ color: "white" }}>HOME</Nav.Link>
                        <Nav.Link href="/" style={{ color: "white" }}>ABOUT</Nav.Link>
                        <Nav.Link href="/" style={{ color: "white" }}>SHOP</Nav.Link>
                        <Nav.Link href="/" style={{ color: "white" }}>BLOG</Nav.Link>
                        <Nav.Link href="/" style={{ color: "white" }}>CONTACT</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default MenuBar