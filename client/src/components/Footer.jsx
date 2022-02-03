import React from "react"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/eren-karakaya-b1a034206/" target="_blank" rel="noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/ErenKarakaya01" target="_blank" rel="noreferrer">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://twitter.com/sprinkai0" target="_blank" rel="noreferrer">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="mailto:erenkarakaya93@gmail.com" target="_blank" rel="noreferrer">
          <i className="bi bi-envelope"></i>
        </a>
      </div>

      <address>
        ©{new Date().getFullYear()} All Rights Reserved.
      </address>
    </footer>
  )
}

export default Footer
