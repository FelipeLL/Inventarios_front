import logo from "../images/logoinv2.png";
import styles from "../styles/admin.module.css";
import profile from "../images/profile_1.jpg";
import axios from "axios";
import { faDolly } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBagShopping,
  faBoxesPacking,
  faVault,
  faRightFromBracket,
  faBars,
  faMagnifyingGlass,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

const Admin = () => {
  const [siderOn, setSiderOn] = useState(false);
  const cerrar = async () => {
    const URI = "http://localhost:5000/auth/logout";
    await axios.get(URI);
  };

  return (
    <div className={styles.body}>
      <nav className={siderOn ? `${styles.nav} ${styles.close}` : styles.nav}>
        <div className={styles["logo-name"]}>
          <div className={styles["logo-image"]}>
            <FontAwesomeIcon
              icon={faDolly}
              style={{ fontSize: "25px", color: "#1a1a1a" }}
            />
          </div>

          <span className={styles["logo_name"]}>Inventario</span>
        </div>

        <div className={styles["menu-items"]}>
          <ul className={styles["nav-links"]}>
            <li>
              <Link to="/adminmodule">
                <FontAwesomeIcon icon={faHouse} className={styles.icons} />
                <span className={styles["link-name"]}>Dashboard</span>
              </Link>
            </li>
            <li className="">
              <Link to="/adminModule/products">
                <FontAwesomeIcon
                  icon={faBagShopping}
                  className={styles.icons}
                />
                <span className={`${styles["link-name"]}`}>Productos</span>
              </Link>
            </li>
            <li>
              <Link to="/adminModule/suppliers">
                <FontAwesomeIcon
                  icon={faBoxesPacking}
                  className={styles.icons}
                />
                <span className={styles["link-name"]}>Proveedores</span>
              </Link>
            </li>
            <li>
              <Link to="">
                <FontAwesomeIcon icon={faVault} className={styles.icons} />
                <span className={styles["link-name"]}>Ventas</span>
              </Link>
            </li>
            <li>
              <Link to="/adminModule/adminProfile">
                <FontAwesomeIcon icon={faGear} className={styles.icons} />
                <span className={styles["link-name"]}>Administrar perfil</span>
              </Link>
            </li>
          </ul>
          <ul className={styles["logout-mod"]}>
            <li>
              <a href="">
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  className={styles.icons}
                />
                <span className={styles["link-name"]} onClick={cerrar}>
                  Logout
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section className={styles.dashboard}>
        <div className={styles.top}>
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => {
              setSiderOn(!siderOn);
            }}
            className={styles["sidebar-toggle"]}
          />
          <div className={styles["search-box"]}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={styles["search-icon"]}
            />
            <input type="text" placeholder="Search here..." />
          </div>
          <img src={profile} alt="perfil image" />
        </div>
        <Outlet />
      </section>
    </div>
  );
};

export default Admin;
