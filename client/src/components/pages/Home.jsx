import React, { useState } from "react"
import { Col } from "reactstrap"
import circle from "../../images/circle.png"
import pp from "../../images/pp.jpg"
import useWriteDelayed from "../../hooks/useWriteDelayed"

const Home = () => {
  const [writing, setWriting] = useState("")

  let article =
    "Hi. My name is Eren Karakaya. I was born in 2001 in Turkey. I like playing basketball and volleyball. My favorite singer is Ed Sheeran. I'm a computer engineering student 2nd grade. I met with programming in 2017 with HTML and CSS. In fact, I don't like to design something. I love solving algorithm problems so I'm a fullstack web developer but I'm comfortable with backend. My main tools are MongoDB, Express.js, Node.js and React."

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
