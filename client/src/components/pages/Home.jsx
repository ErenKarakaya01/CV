import React, { useState } from "react"
import { Col } from "reactstrap"
import circle from "../../images/circle.png"
import pp from "../../images/pp.jpg"
import useWriteDelayed from "../../hooks/useWriteDelayed"

const Home = () => {
  const [writing, setWriting] = useState("")

  let article =
    "erenaslkşdjglkşa?jsdkglş.aksşldijgjaskld,jglkşajskldjgklajsdkljgla asdlkjklgjaslkdjglkasdg"
  
  useWriteDelayed(writing, setWriting, article)

  return (
    <div id="home" className="smallSize">
      <Col className="col-md-4 m-0" id="left">
        <div id="pp" data-aos="fade-right" data-aos-duration="1000">
          <img id="circle" src={circle} alt="circle" />
          <img id="profilePhoto" src={pp} alt="pp" />
        </div>
      </Col>
      <Col className="col-md-8 m-0 m-0" id="right">
        <div id="writing">{writing}</div>
      </Col>
    </div>
  )
}

export default Home
