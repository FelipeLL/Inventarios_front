import styles from "../styles/admin.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faThumbsUp,
  faGrip,
  faClock,
  faIdBadge,
  faPersonCirclePlus,
  faSquarePen,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const axiosData = async () => {
      const URI = "http://localhost:5000/logs";
      const res = await axios.get(URI);
      setData(res.data);
    };
    axiosData();
  }, []);

  useEffect(() => {
    console.log(data);
  });

  const changeBackground = (e) => {
    e.target.style.background = "#00abd1";
  };

  const resetBackground = (e) => {
    e.target.style.background = "#0dd3ff";
  };

  const changeBackground2 = (e) => {
    e.target.style.background = "#e18e04";
  };

  const resetBackground2 = (e) => {
    e.target.style.background = "#fbb034";
  };

  const changeBackground3 = (e) => {
    e.target.style.background = "#585a5f";
  };

  const resetBackground3 = (e) => {
    e.target.style.background = "#6a6c72";
  };

  const changeBackground4 = (e) => {
    e.target.style.background = "#ff4d3d";
  };

  const resetBackground4 = (e) => {
    e.target.style.background = "#ff6c5f";
  };

  return (
    <div className={styles["dash-content"]}>
      <div className={styles.overview}>
        <div className={styles.title}>
          <FontAwesomeIcon icon={faGrip} className={styles["dashboard-icon"]} />
          <span className={styles.text}>Dashboard</span>
        </div>

        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div
              className={`${styles.box} `}
              onMouseEnter={changeBackground}
              onMouseLeave={resetBackground}
            >
              <span className={styles.textSpan}>Agregar </span>

              <FontAwesomeIcon icon={faPlus} className={styles["box-icon"]} />
              <span className={styles.number}>nuevo producto</span>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div
              className={`${styles.box2} `}
              onMouseEnter={changeBackground2}
              onMouseLeave={resetBackground2}
            >
              <span className={styles.textSpan}>Visualizar </span>

              <FontAwesomeIcon icon={faEye} className={styles["box-icon"]} />
              <span className={styles.number}>ver ventas</span>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div
              className={`${styles.box3} `}
              onMouseEnter={changeBackground3}
              onMouseLeave={resetBackground3}
            >
              <span className={styles.textSpan}>Agregar</span>

              <FontAwesomeIcon
                icon={faPersonCirclePlus}
                className={styles["box-icon"]}
              />
              <span className={styles.number}>nuevo proveedor</span>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div
              className={`${styles.box4} `}
              onMouseEnter={changeBackground4}
              onMouseLeave={resetBackground4}
            >
              <span className={styles.textSpan}>Editar</span>

              <FontAwesomeIcon
                icon={faSquarePen}
                className={styles["box-icon"]}
              />
              <span className={styles.number}>actualizar producto</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.title2}>
        <FontAwesomeIcon icon={faClock} className={styles["dashboard-icon2"]} />
        <span className={styles.text}>Actividad Reciente</span>
      </div>
      <div className="row ms-1">
        <div className={`col-5 ${styles.log}`}>
          <div className="row">
            <div className="col-12 text-center fw-bold fs-5 mb-3">
              Infracciones
            </div>
            <div className="col-5 fw-bold">
              <p>Correo electrónico</p>
            </div>
            <div className="col-4 fw-bold">
              <p>Fecha</p>
            </div>
            <div className="col-3 fw-bold">
              <p>Hora</p>
            </div>
          </div>
          {data.map((log) => (
            <div className="row">
              <div className="col-5">
                <p>{log.correo}</p>
              </div>

              <div className="col-4">
                <p>{log.createdAt}</p>
              </div>
              <div className="col-3">
                <p>{log.fecha}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={`col-5 ${styles["pedidos"]} ms-5`}>
          <div className="row ">
            <div className="col-12 text-center fw-bold fs-5 mb-3">Pedidos</div>
            <div className="col-2 fw-bold">
              <p className="ms-3">ID</p>
            </div>
            <div className="col-3 fw-bold">
              <p>Usuario</p>
            </div>
            <div className="col-2 fw-bold">
              <p>Monto</p>
            </div>
            <div className="col-2 fw-bold ">
              <p>Fecha</p>
            </div>
            <div className="col-3 fw-bold">
              <p className="ms-4">Estado</p>
            </div>
          </div>
          <div className="row   ">
            <div className="col-2 ">
              <p className="ms-3">24</p>
            </div>

            <div className="col-3">
              <p>Daniel Moreno</p>
            </div>
            <div className="col-2">
              <p>$57.500</p>
            </div>
            <div className="col-2">
              <p>2022-01-19</p>
            </div>
            <div className="col-3">
              <p className="badge bg-dark ms-4">Pagado</p>
            </div>
          </div>
          <div className="row   ">
            <div className="col-2 ">
              <p className="ms-3">15</p>
            </div>

            <div className="col-3">
              <p>Steven Gonzalez</p>
            </div>
            <div className="col-2">
              <p>$23.250</p>
            </div>
            <div className="col-2">
              <p>2022-03-13</p>
            </div>
            <div className="col-3">
              <p className="badge bg-warning text-dark ms-4">Pendiente</p>
            </div>
          </div>
          <div className="row   ">
            <div className="col-2 ">
              <p className="ms-3">31</p>
            </div>

            <div className="col-3">
              <p>Luisa Castro</p>
            </div>
            <div className="col-2">
              <p>$7.800</p>
            </div>
            <div className="col-2">
              <p>2022-02-12</p>
            </div>
            <div className="col-3">
              <p className="badge bg-dark ms-4">Pagado</p>
            </div>
          </div>
          <div className="row   ">
            <div className="col-2 ">
              <p className="ms-3">26</p>
            </div>

            <div className="col-3">
              <p>Carlos Torres</p>
            </div>
            <div className="col-2">
              <p>$10.000</p>
            </div>
            <div className="col-2">
              <p>2022-02-19</p>
            </div>
            <div className="col-3">
              <p className="badge bg-dark ms-4">Pagado</p>
            </div>
          </div>
          <div className="row   ">
            <div className="col-2 ">
              <p className="ms-3">12</p>
            </div>

            <div className="col-3">
              <p>Esteban Santos</p>
            </div>
            <div className="col-2">
              <p>$13.150</p>
            </div>
            <div className="col-2">
              <p>2022-04-11</p>
            </div>
            <div className="col-3">
              <p className="badge bg-warning text-dark ms-4">Pendiente</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
