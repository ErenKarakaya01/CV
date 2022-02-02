import React, { useState, useEffect } from "react"
import NavigationBar from "../NavigationBar"
import { Container, Row, Col } from "reactstrap"
import circle from "../../images/circle.png"
import pp from "../../images/pp.jpg"
import useWriteDelayed from "../../hooks/useWriteDelayed"

const Home = () => {
  const [writing, setWriting] = useState("")

  let article =
    "erenaslkşdjglkşa?jsdkglş.aksşldijgjaskld,jglkşajskldjgklajsdkljgla asdlkjklgjaslkdjglkasdg"
  
  useWriteDelayed(writing, setWriting, article)

  return (
    <div id="home">
      <Col className="col-sm-12 col-md-4 col-xs-12 m-0">
        <div id="pp" data-aos="fade-right" data-aos-duration="1000">
          <img id="circle" src={circle} alt="circle" />
          <img id="profilePhoto" src={pp} alt="pp" />
        </div>
      </Col>
      <Col className="col-sm-12 col-md-8 m-0 col-xs-12 m-0" id="right">
        <div id="writing">{writing}</div>
      </Col>
    </div>
  )
}

export default Home
