import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>VTM Slate</h1>
        </div>
        <div className="navbar-menu">
          <a href="#home" className="navbar-item">Home</a>
          <a href="#about" className="navbar-item">About</a>
          <a href="#contact" className="navbar-item">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
