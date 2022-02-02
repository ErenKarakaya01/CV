import React from "react"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a target="_blank" rel="noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href={"mailto"} target="_blank" rel="noreferrer">
          <i className="bi bi-github"></i>
        </a>
      </div>

      <address>
        ©{new Date().getFullYear()} All Rights Reserved.
      </address>
    </footer>
  )
}

export default Footer
