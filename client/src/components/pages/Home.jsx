import React, { useState, useEffect } from "react"
import NavigationBar from "../NavigationBar"
import { Container, Row, Col } from "reactstrap"
import circle from "../../images/circle.png"
import pp from "../../images/pp.jpg"

const Home = () => {
  const [writing, setWriting] = useState("")
  const [index, setIndex] = useState(0)

  let article =
    "erenaslkşdjglkşajsdkglşaksşldijgjaskldjglkşajskldjgklajsdkljgla asdlkjklgjaslkdjglkasdg"
  useEffect(() => {
    setTimeout(() => {
      setIndex(prev => prev + 1)
      setWriting((prev) => {
        return prev + article.charAt(index)
      })
    }, 500)
  }, [writing])

  /* /[.,:!?]/.test(string.charAt(0)) */

  return (
    <div id="home">
      <Col className="col-sm-12 col-md-4 col-xs-12 m-0">
        <div id="pp">
          <img id="circle" src={circle} alt="circle" />
          <img id="profilePhoto" src={pp} alt="pp" />
        </div>
      </Col>
      <Col className="col-sm-12 col-md-8 m-0 col-xs-12 m-0">{writing}</Col>
    </div>
  )
}

export default Home
