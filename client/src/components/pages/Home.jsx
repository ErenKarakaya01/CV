import React from "react"
import NavigationBar from "../NavigationBar"
import { Container, Row, Col } from "reactstrap"
import circle from "../../images/circle.png"

const Home = () => {
  return (
    <Container>
      <Row>
        <Col className=".col-sm-12 .col-md-6">
          <img src={circle} alt="circle" />
        </Col>
      </Row>
    </Container>
  )
}

export default Home
