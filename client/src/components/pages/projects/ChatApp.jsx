import React, { useState } from "react"
import { Col } from "reactstrap"
import react from "../../../images/react.png"
import useWriteDelayed from "../../../hooks/useWriteDelayed"
import ReactTooltip from "react-tooltip"
import { Link } from "react-router-dom"

const ChatApp = () => {
  const [writing, setWriting] = useState("")

  let article =
    "Sprinkai Chat is a realtime chat app made by me. I made Sprinkai Chat to learn backend and frontend technologies properly. I learned React, MongoDB, Node.js, Express.js, Socket.io etc... It was really fun. It has a login system, creating and joining rooms features. There is an 'Everyone' room when you first registered. Come and say hi!"

  useWriteDelayed(writing, setWriting, article)

  return (
    <div className="project smallSize">
      <Col
        className="col-md-4 m-0"
        data-aos="flip-left"
        data-aos-duration="1200"
        id="left"
      >
        <a href="https://sprinkaichat.herokuapp.com/">
          <div className="photoDiv">
            <img className="photo" src={react} alt="react" />
          </div>
        </a>
        <div className="links">
          <a href="https://github.com/ErenKarakaya01/RealtimeChatApp-MERN">
            <i data-tip data-for="githubRepo" className="bi bi-github" />
          </a>
          <a href="https://sprinkaichat.herokuapp.com/">
            <img
              data-tip
              data-for="website"
              className="image"
              src={react}
              alt="react"
            />
          </a>

          <ReactTooltip id="githubRepo" place="top" effect="solid">
            Github Repo
          </ReactTooltip>
          <ReactTooltip id="website" place="top" effect="solid">
            Website
          </ReactTooltip>
        </div>
      </Col>
      <Col className="col-md-8 m-0 m-0" className="right">
        <div className="writing">{writing}</div>
      </Col>
    </div>
  )
}

export default ChatApp
