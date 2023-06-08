import { Link, NavLink } from "react-router-dom"

function Header() {
  const activeClass = (param) => {
    return param.isActive ? 'active' : ''
  }

 return (<nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
    <div className="container px-4 px-lg-5">
      <Link className="navbar-brand" to='/'>Start Bootstrap</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ms-auto py-4 py-lg-0">
          <li className="nav-item"><NavLink className={`nav-link px-lg-3 py-3 py-lg-4 ${activeClass}`} to='/'>Home</NavLink></li>
          <li className="nav-item"><NavLink className={`nav-link px-lg-3 py-3 py-lg-4 ${activeClass}`} to='/about'>About</NavLink></li>
          <li className="nav-item"><NavLink className={`nav-link px-lg-3 py-3 py-lg-4 ${activeClass}`} to='/post'>Sample Post</NavLink></li>
          <li className="nav-item"><NavLink className={`nav-link px-lg-3 py-3 py-lg-4 ${activeClass}`} to='/contact'>Contact</NavLink></li>
        </ul>
      </div>
    </div>
  </nav>)
}

export default Header