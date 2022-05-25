import logo from "../images/inventario-disponible.png";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container-fluid ">
          <a className="navbar-brand">
            <img
              src={logo}
              alt="Logo"
              width="33"
              height="25"
              className="d-inline-block align-text-top"
            />
            Inventario
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mt-2 ms-3">
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Quienes somos
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Acerca de
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
