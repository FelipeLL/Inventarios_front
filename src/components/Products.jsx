import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/products.module.css";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import imagen from "../images/leche.jpg";
import imagen2 from "../images/arrozz.png";
import ModalEditProduct from "./ModalEditProduct";
const Products = () => {
  return (
    <>
      <div className={styles["product-content"]}>
        <div className={styles.title}>
          <FontAwesomeIcon icon={faStore} className={styles["product-icon"]} />
          <span className={styles.text}>Productos</span>
        </div>

        <div className={styles.gallery}>
          <div className={styles.content}>
            <FontAwesomeIcon
              icon={faPenToSquare}
              className={styles["card-icon"]}
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            />
            <img src={imagen} alt="imagen #" />
            <h3>Shoes</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <h6>$200.00</h6>

            <button type="button" className={styles.buy}>
              Eliminar
            </button>
          </div>
          <div className={styles.content}>
            <FontAwesomeIcon
              icon={faPenToSquare}
              className={styles["card-icon"]}
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            />
            <img src={imagen2} alt="imagen #" />
            <h3>Shoes</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <h6>$200.00</h6>

            <button type="button" className={styles.buy}>
              Eliminar
            </button>
          </div>
          <div className={styles.content}>
            <FontAwesomeIcon
              icon={faPenToSquare}
              className={styles["card-icon"]}
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            />
            <img src={imagen} alt="imagen #" />
            <h3>Shoes</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <h6>$200.00</h6>

            <button type="button" className={styles.buy}>
              Eliminar
            </button>
          </div>
          <div className={styles.content}>
            <FontAwesomeIcon
              icon={faPenToSquare}
              className={styles["card-icon"]}
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            />
            <img src={imagen} alt="imagen #" />
            <h3>Shoes</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <h6>$200.00</h6>

            <button type="button" className={styles.buy}>
              Eliminar
            </button>
          </div>
        </div>
      </div>

      <ModalEditProduct />
    </>
  );
};

export default Products;
