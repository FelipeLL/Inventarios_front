import React from "react";
import "../styles.css";
const Sidebar = () => {
  return (
    <>
      {/* div slidebar completo */}
      <div className="flex-shrink-0 p-3 ">
        <ul className="list-unstyled ps-0 ">
          {/* Productos */}
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#productos-collapse"
              aria-expanded="true"
            >
              Productos
            </button>
            <div className="collapse " id="productos-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="link-dark rounded">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Reports
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="border-top my-3"></li>
          {/* Pedidos */}
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#pedidos-collapse"
              aria-expanded="true"
            >
              Pedidos
            </button>
            <div className="collapse " id="pedidos-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="link-dark rounded">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Reports
                  </a>
                </li>
              </ul>
            </div>
          </li>
          {/* Ventas */}
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#ventas-collapse"
              aria-expanded="true"
            >
              Ventas
            </button>
            <div className="collapse " id="ventas-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="link-dark rounded">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Reports
                  </a>
                </li>
              </ul>
            </div>
          </li>
          {/* Compras */}
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#compras-collapse"
              aria-expanded="true"
            >
              Compras
            </button>
            <div className="collapse " id="compras-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="link-dark rounded">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Reports
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="border-top my-3"></li>
          {/* Clientes */}
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#clientes-collapse"
              aria-expanded="true"
            >
              Clientes
            </button>
            <div className="collapse" id="clientes-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="link-dark rounded">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Reports
                  </a>
                </li>
              </ul>
            </div>
          </li>
          {/* Proovedores */}
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#proveedores-collapse"
              aria-expanded="true"
            >
              Proveedores
            </button>
            <div className="collapse " id="proveedores-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="link-dark rounded">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Reports
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
