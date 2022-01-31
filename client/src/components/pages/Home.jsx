import React from "react"
import NavigationBar from "../NavigationBar"
import { Container, Row, Col } from "reactstrap"
import circle from "../../images/circle.png"

const Home = () => {
  return (
    <div id="home">
      <Col className="col-sm-12 col-md-6 m-0 mb-5">
        <img src={circle} alt="circle" />
      </Col>
    </div>
  )
}

export default Home
