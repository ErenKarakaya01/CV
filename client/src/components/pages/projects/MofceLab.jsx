import React, { useState } from "react"
import { Col } from "reactstrap"
import react from "../../../images/react.png"
import useWriteDelayed from "../../../hooks/useWriteDelayed"
import ReactTooltip from "react-tooltip"
import { Link } from "react-router-dom"

const MofceLab = () => {
  const [writing, setWriting] = useState("")

  let article =
    "erenaslkşdjglkşa?jsdkglş.aksşldijgjaskld,jglkşajskldjgklajsdkljgla asdlkjklgjaslkdjglkasdg"

  useWriteDelayed(writing, setWriting, article)

  return (
    <div className="project smallSize">
      <Col
        className="col-md-4 m-0"
        data-aos="flip-left"
        data-aos-duration="1200"
        id="left"
      >
        <Link to="sitelink">
          <div className="photoDiv">
            <img className="photo" src={react} alt="react" />
          </div>
        </Link>
        <div className="links">
          <Link to="repolink">
            <i data-tip data-for="githubRepo" className="bi bi-github" />
          </Link>
          <Link to="sitelink">
            <img
              data-tip
              data-for="website"
              className="image"
              src={react}
              alt="react"
            />
          </Link>

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

export default MofceLab
