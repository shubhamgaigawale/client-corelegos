import React from 'react'

const Header = () => {
  return (
    <header>
  <nav className="navbar navbar-expand-lg navbar-light bg-white sticky" data-offset={500}>
    <div className="container">
      <a href="#" className="navbar-brand">Seo<span className="text-primary">Gram.</span></a>
      <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="navbar-collapse collapse" id="navbarContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about.html">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="service.html">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="blog.html">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

  )
}

export default Header
