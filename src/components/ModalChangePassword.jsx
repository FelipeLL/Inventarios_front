import styles from "../styles/adminProfile.module.css";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { formValidate } from "../utils/formValidate";
import FormError from "../components/FormError";
import FormErrorBackend from "../components/FormErrorBackend";
import { errorsBackend } from "../utils/errorsBackend";
const ModalChangePassword = () => {
  const URI = "http://localhost:5000/users/changePassword";
  const [passwords, setPasswords] = useState({});

  const {
    required,
    minLength,
    validateTrim,
    validateEquals2,
    patternPassword,
  } = formValidate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
    clearErrors,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post(URI, data);
    } catch (error) {
      console.log(error.response.data.message);
      setError("backend", {
        message: errorsBackend(error.response.data.message),
      });
      setTimeout(() => {
        clearErrors("backend");
      }, 3000);
    }
  };
  /* const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(URI, passwords);
  }; */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords((old) => ({
      ...old,
      [name]: value,
    }));
  };

  return (
    <div
      className="modal fade "
      id="ModalChangePassword"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="LabelChangePassword"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="LabelChangePassword">
              Cambiar contraseña
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              {errors.backend && <FormErrorBackend error={errors.backend} />}
              <div className="col-md-10">
                <label
                  htmlFor="validationServer100"
                  className={`form-label fw-bold ${styles.label}`}
                >
                  Contraseña actual
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  // onChange={handleChange}
                  className={`form-control ${styles.input}`}
                  id="validationServer101"
                  aria-describedby="validationServer05Feedback"
                  {...register("currentPassword", {
                    required,
                  })}
                />
                {errors.currentPassword && (
                  <FormError error={errors.currentPassword} />
                )}
              </div>
              <div className={`col-md-10 `}>
                <label
                  htmlFor="validationServer102"
                  className={`form-label fw-bold ${styles.label} `}
                >
                  Nueva contraseña
                </label>
                <input
                  type="password"
                  name="newPassword"
                  // onChange={handleChange}
                  className={`form-control ${styles.input}`}
                  id="validationServer103"
                  aria-describedby="validationServer05Feedback"
                  {...register("newPassword", {
                    minLength,
                    validate: validateTrim,
                    pattern: patternPassword,
                  })}
                />
                {errors.newPassword && <FormError error={errors.newPassword} />}
              </div>
              <div className="col-md-10">
                <label
                  htmlFor="validationServer104"
                  className={`form-label fw-bold ${styles.label}`}
                >
                  Confirmar contraseña
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  // onChange={handleChange}
                  className={`form-control ${styles.input}`}
                  id="validationServer105"
                  aria-describedby="validationServer05Feedback"
                  {...register("confirmPassword", {
                    validate: validateEquals2(getValues),
                  })}
                />
                {errors.confirmPassword && (
                  <FormError error={errors.confirmPassword} />
                )}
              </div>
              <button
                type="submit"
                className={`btn btn-primary w-50 ${styles.buttonChangePassword}`}
              >
                Aceptar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalChangePassword;
