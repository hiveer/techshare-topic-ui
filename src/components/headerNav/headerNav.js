import { NavLink } from "react-router-dom";
import './headerNav.scss'

const HeaderNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light topics__nav--navbar">
      <NavLink className="navbar-brand" to="/active-topics">Align APAC</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/active-topics">Active Topics</NavLink>
          <NavLink className="nav-link" to="/archived-topics">Archived Topics</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default HeaderNav;
