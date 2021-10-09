import React from "react"
import { Container, Row, Col } from "reactstrap"

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <Col md={12}>
              <div className="text-end ">
              © {new Date().getFullYear()} Alula Software Inc. Made with{" "}
                  <i className="mdi mdi-heart text-danger" /> in Las Vegas
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
