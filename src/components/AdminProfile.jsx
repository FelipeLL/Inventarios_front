import styles from "../styles/adminProfile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGear, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import img2 from "../images/img_2.jpg";
import ModalChangePassword from "./ModalChangePassword";
const AdminProfile = () => {
  return (
    <>
      <div className={styles["profile-content"]}>
        <div className={styles.title}>
          <FontAwesomeIcon
            className={styles["profile-icon"]}
            icon={faUserGear}
          />
          <span className={styles.text}>Administrar perfil</span>
        </div>

        <div className="row">
          <div className="col-12 col-md-12 col-lg-5">
            <div className={styles["profile-area"]}>
              <div className={styles.card}>
                <div className={styles.img1}></div>
                <div className={styles.img2}>
                  <img src={img2} alt="img2" />
                </div>
                <div className={styles["main-text"]}>
                  <h2>Person One</h2>
                  <div className="row">
                    <div className="col-4">
                      <h5>Dirección</h5>
                      <p className={`lead text-break`}>Diagonal 15</p>
                    </div>
                    <div className="col-4">
                      <h5>Teléfono</h5>
                      <p className={`lead`}>3206573239</p>
                    </div>
                    <div className="col-4">
                      <h5>Email</h5>
                      <p className={`lead text-break`}>proveedor@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-7">
            <div className={styles["profile-area"]}>
              <div className={styles.cardTwo}>
                <form className="row g-3">
                  <div className="col-md-5">
                    <label
                      htmlFor="validationServer01"
                      className={`form-label fw-bold ${styles.label}`}
                    >
                      Nombres
                    </label>
                    <input
                      type="text"
                      className={`form-control ${styles.input}`}
                      id="validationServer01"
                      required
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-5">
                    <label
                      htmlFor="validationServer02"
                      className={`form-label fw-bold ${styles.label}`}
                    >
                      Apellidos
                    </label>
                    <input
                      type="text"
                      className={`form-control ${styles.input}`}
                      id="validationServer02"
                      required
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-6">
                    <label
                      htmlFor="validationServer03"
                      className={`form-label fw-bold ${styles.label}`}
                    >
                      Dirección
                    </label>
                    <input
                      type="text"
                      className={`form-control  ${styles.input}`}
                      id="validationServer03"
                      aria-describedby="validationServer03Feedback"
                      required
                    />
                    <div
                      id="validationServer03Feedback"
                      className="invalid-feedback"
                    >
                      Please provide a valid city.
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="validationServer05"
                      className={`form-label fw-bold ${styles.label}`}
                    >
                      Teléfono
                    </label>
                    <input
                      type="text"
                      className={`form-control ${styles.input}`}
                      id="validationServer05"
                      aria-describedby="validationServer05Feedback"
                      required
                    />
                    <div
                      id="validationServer05Feedback"
                      className="invalid-feedback"
                    >
                      Please provide a valid zip.
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label
                      htmlFor="validationServerUsername"
                      className={`form-label fw-bold ${styles.label}`}
                    >
                      Correo electrónico
                    </label>
                    <div className="input-group has-validation">
                      <span
                        className={`input-group-text ${styles.input}`}
                        id="inputGroupPrepend3"
                      >
                        @
                      </span>
                      <input
                        type="text"
                        className={`form-control ${styles.input}`}
                        id="validationServerUsername"
                        aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                        required
                      />
                      <div
                        id="validationServerUsernameFeedback"
                        className="invalid-feedback"
                      >
                        Please choose a username.
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <button
                      className={`btn btn-primary ${styles.button}`}
                      type="submit"
                    >
                      Actualizar Información
                    </button>
                  </div>
                </form>

                <form action="" className={`row g-3 mt-4 ${styles.form}`}>
                  <div className="col-md-4 mb-5">
                    <label
                      htmlFor="validationServer01"
                      className={`form-label fw-bold ${styles.label}`}
                    >
                      CAMBIAR CONTRASEÑA
                    </label>
                  </div>
                  <div className="col-md-5">
                    <span
                      className={`btn btn-primary ${styles.buttonChangePassword}`}
                      type="submit"
                      data-bs-toggle="modal"
                      data-bs-target="#ModalChangePassword"
                    >
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <ModalChangePassword />
      </div>
    </>
  );
};

export default AdminProfile;
