import React from "react"
import { Col } from "reactstrap"
import html from "../../images/html.png"
import css from "../../images/css.png"
import js from "../../images/js.png"
import bootstrap from "../../images/bootstrap.png"
import git from "../../images/git.png"
import java from "../../images/java.png"
import mongodb from "../../images/mongodb.png"
import nodejs from "../../images/nodejs.png"
import python from "../../images/python.png"
import react from "../../images/react.png"
import sass from "../../images/sass.png"
import socketio from "../../images/socketio.png"

const Skills = () => {
  return (
    <div id="skills">
      <Col className="col-sm-12 col-md-4 col-xs-12 m-0">
        <div data-aos="fade-down" data-aos-delay="50">
          <div className="img">
            <img src={html} alt="htmlcss" />
          </div>
          <div className="info">
            gasd
          </div>
        </div>
        <div data-aos="fade-right" data-aos-delay="200">
          <div className="img">
            <img src={nodejs} alt="nodejs" />
          </div>
          <div className="info">
            gasd
          </div>
        </div>
        <div data-aos="fade-up-right" data-aos-delay="350">
          <div className="img">
            <img src={mongodb} alt="mongodb" />
          </div>
          <div className="info">
            gasd
          </div>
        </div>
        <div data-aos="fade-up-left" data-aos-delay="100">
          <div className="img">
            <img src={git} alt="git" />
          </div>
          <div className="info">
            gasd
          </div>
        </div>
      </Col>
      <Col className="col-sm-12 col-md-4 col-xs-12 m-0">
        <div data-aos="fade-down-right" data-aos-delay="500">
          <div className="img">
            <img src={css} alt="css" />
          </div>
          <div className="info">
            gasd
          </div>
        </div>
        <div data-aos="fade-up-left" data-aos-delay="250">
          <div className="img">
            <img src={react} alt="react" />
          </div>
          <div className="info">
            gasd
          </div>
        </div>
        <div data-aos="fade-down">
          <div className="img">
            <img src={python} alt="python" />
          </div>
          <div className="info">
            gasd
          </div>
        </div>
        <div data-aos="fade-down-left" data-aos-delay="350">
          <div className="img">
            <img src={bootstrap} alt="bootstrap" />
          </div>
          <div className="info">
            gasd
          </div>
        </div>
      </Col>
      <Col className="col-sm-12 col-md-4 col-xs-12 m-0">
        <div data-aos="fade-left" data-aos-delay="100">
          <div className="img">
            <img src={js} alt="js" />
          </div>
          <div className="info">
            gasd
          </div>
        </div>
        <div data-aos="fade-right" data-aos-delay="250">
          <div className="img">
            <img src={socketio} alt="socketio" />
          </div>
          <div className="info">
            gasd
          </div>
        </div>
        <div data-aos="fade-up-right" data-aos-delay="450">
          <div className="img">
            <img src={sass} alt="sass" />
          </div>
          <div className="info">
            gasd
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <div className="img">
            <img src={java} alt="java" />
          </div>
          <div className="info">
            gasd
          </div>
        </div>
      </Col>
    </div>
  )
}

export default Skills
