import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">
              <a href="/" className="logoLink">Looking👀</a>
              </span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Log In</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar