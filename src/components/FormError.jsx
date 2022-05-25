import styles from "../styles/formError.module.css";

const FormError = ({ error }) => {
  return (
    <>
      <p className={`${styles.parrafo}`}>{error.message}</p>
    </>
  );
};

export default FormError;
