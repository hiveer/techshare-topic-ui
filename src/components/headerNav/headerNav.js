import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Align APAC</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link" to="/active-topics">Active Topics</Link>
          <Link className="nav-link" to="/archived-topics">Archived Topics</Link>
        </div>
      </div>
    </nav>
  );
}

export default HeaderNav;
