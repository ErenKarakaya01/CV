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
    <div id="skills" className="smallSize">
      <Col className="col-sm-12 col-md-4 col-xs-12 m-0">
        <div data-aos="fade-down" data-aos-delay="50">
          <div className="img">
            <img src={html} alt="html" />
          </div>
          <div className="info">
            In 2017 I met programming with HTML. It was easy and made me love that science.
          </div>
        </div>
        <div data-aos="fade-right" data-aos-delay="200">
          <div className="img">
            <img src={nodejs} alt="nodejs" />
          </div>
          <div className="info">
            When I saw node.js I already knew javascript. Also, I knew a little bit backend philosophy thanks to python so node.js was really easy.
          </div>
        </div>
        <div data-aos="fade-up-right" data-aos-delay="350">
          <div className="img">
            <img src={mongodb} alt="mongodb" />
          </div>
          <div className="info">
            Before I learned MongoDB I had already experienced SQL. I think MongoDB is better than SQL because of its unrelational structure. 
          </div>
        </div>
        <div data-aos="fade-up-left" data-aos-delay="100">
          <div className="img">
            <img src={git} alt="git" />
          </div>
          <div className="info">
            Git is the best version control system by far. There is nothing much to say :D.
          </div>
        </div>
      </Col>
      <Col className="col-sm-12 col-md-4 col-xs-12 m-0">
        <div data-aos="fade-down-right" data-aos-delay="500">
          <div className="img">
            <img src={css} alt="css" />
          </div>
          <div className="info">
            Actually, I hate CSS. I can't stand any of that design tools. Even making this site was full of suffering for me.
          </div>
        </div>
        <div data-aos="fade-up-left" data-aos-delay="250">
          <div className="img">
            <img src={react} alt="react" />
          </div>
          <div className="info">
            At first, react seem to me a little bit complicated but as I go deeper, I saw its beauty. React really made my frontend life easier.
          </div>
        </div>
        <div data-aos="fade-down">
          <div className="img">
            <img src={python} alt="python" />
          </div>
          <div className="info">
            I started to learn python in 2019 on my roommate's recommendation. It was the first scripting language I learned. I owe python a lot.
          </div>
        </div>
        <div data-aos="fade-down-left" data-aos-delay="350">
          <div className="img">
            <img src={bootstrap} alt="bootstrap" />
          </div>
          <div className="info">
            To be honest, I don't like that much bootstrap but sometimes I use it like I used in this site's navbar.
          </div>
        </div>
      </Col>
      <Col className="col-sm-12 col-md-4 col-xs-12 m-0">
        <div data-aos="fade-left" data-aos-delay="100">
          <div className="img">
            <img src={js} alt="js" />
          </div>
          <div className="info">
            Javascript is currently my main scripting language. I met with it in 2021 and since it is a high level language I fell in love with it!
          </div>
        </div>
        <div data-aos="fade-right" data-aos-delay="250">
          <div className="img">
            <img src={socketio} alt="socketio" />
          </div>
          <div className="info">
            I learned socket.io during on my coding process of my chat app and it was mind blowing since I haven't had used web sockets before.
          </div>
        </div>
        <div data-aos="fade-up-right" data-aos-delay="450">
          <div className="img">
            <img src={sass} alt="sass" />
          </div>
          <div className="info">
            As I said before, I hate CSS but sass is not that bad. At the end, I can write much code in less time with sass.
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <div className="img">
            <img src={java} alt="java" />
          </div>
          <div className="info">
            My school teaching me Java but I don't like it. Although I don't enjoy java, I thought me OOP principles really good.
          </div>
        </div>
      </Col>
    </div>
  )
}

export default Skills
