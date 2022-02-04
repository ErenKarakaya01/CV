import React, { useState } from "react"
import { Col } from "reactstrap"
import react from "../../../images/react.png"
import mofce from "../../../images/mofce.png"
import useWriteDelayed from "../../../hooks/useWriteDelayed"
import ReactTooltip from "react-tooltip"

const MofceLab = () => {
  const [writing, setWriting] = useState("")

  let article =
    "I made MofceLab company's website with one of my classmates. We made it in one month. It has a private admin panel to add news, photos, publications etc... Handled CRUD operations with MongoDB. It has nothing in it currently because the customer haven't added anything yet but believe me it works XD. It was my first paid gig so it has very much value in it for me."

  useWriteDelayed(writing, setWriting, article)

  return (
    <div className="project smallSize">
      <Col
        className="col-md-4 m-0"
        data-aos="flip-left"
        data-aos-duration="1200"
        id="left"
      >
        <a href="http://www.mofce.com" target="_blank">
          <div className="photoDiv">
            <img className="photo" src={mofce} alt="react" />
          </div>
        </a>
        <div className="links">
          <a href="http://www.mofce.com/" target="_blank">
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

export default MofceLab
