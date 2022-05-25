import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/suppliers.module.css";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

import img2 from "../images/img_2.jpg";
const Suppliers = () => {
  return (
    <>
      <div className={styles["supplier-content"]}>
        <div className={styles.title}>
          <FontAwesomeIcon
            icon={faAddressBook}
            className={styles["supplier-icon"]}
          />
          <span className={styles.text}>Proveedores</span>
        </div>
      </div>

      <div className={styles["profile-area"]}>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className={styles.card}>
              <FontAwesomeIcon
                icon={faPenToSquare}
                className={styles["card-icon"]}
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              />
              <div className={styles.img1}></div>
              <div className={styles.img2}>
                <img src={img2} alt="img2" />
              </div>
              <div className={styles["main-text"]}>
                <h2>Person One</h2>
                <div className="row">
                  <div className="col-4">
                    <h6>Dirección</h6>
                    <p className={`lead text-break`}>Diagonal 15</p>
                  </div>
                  <div className="col-4">
                    <h6>Teléfono</h6>
                    <p className={`lead`}>3206573239</p>
                  </div>
                  <div className="col-4">
                    <h6>Email</h6>
                    <p className={`lead text-break`}>proveedor@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Suppliers;
