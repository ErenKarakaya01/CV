import React, { useState } from "react"
import {
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Navbar,
} from "reactstrap"
import { Link } from "react-router-dom"

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [state, setState] = useState(0)
  const [active, setActive] = useState(true)

  const texts = [
    "Don't Click!",
    "I said don't click.",
    "hey",
    "Stop!",
    "I'll ban you.",
    "You're annoying.",
    "-_-",
    "Ha Ha"
  ]

  const handleClick = (e) => {
    if (active === false) return

    setState(prev => ++prev)
    
    if (texts.length - 2 === state) {
      setActive(false)
    }
  }

  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">Portfolio</NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/skills">
                Skills
              </NavLink>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Projects
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem><NavLink href="/projects/chatapp">Sprinkai Chat</NavLink></DropdownItem>
                <DropdownItem><NavLink href="/projects/mofcelab">Mofce Lab</NavLink></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText id={active ? "active" : "disabled"} onClick={handleClick}>{texts[state]}</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationBar
