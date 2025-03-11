import { Link, NavLink, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const handleLogout = useNavigate();

  const onLogout = () => {
    handleLogout("/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
      <Link className="navbar-brand" to="/">
        HeroesApp
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/marvel">
            Marvel
          </NavLink>

          <NavLink className="nav-item nav-link" to="/dc">
            DC
          </NavLink>

          <NavLink className="nav-item nav-link" to="/search">
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">Ángel Estarita</span>
          <button onClick={onLogout} className="nav-item nav-link btn">
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
