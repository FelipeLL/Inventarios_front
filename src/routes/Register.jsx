import axios from "axios";
import styles from "../styles/register.module.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { errorsBackend } from "../utils/errorsBackend";
import FormError from "../components/FormError";
import { formValidate } from "../utils/formValidate";
import FormInput from "../components/FormInput";
import FormErrorBackend from "../components/FormErrorBackend";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import Barra from "../components/Barra";
const URI = "http://localhost:5000/users/register";

const Register = () => {
  const initialState = {
    nombre: "",
    apellido: "",
    telefono: "",
    correo: "",
    password: "",
    confirmPassword: "",
  };
  const [pass, setPass] = useState("");

  // const [register, setRegister] = useState(initialState);
  //navigate es para mandarlo a una ruta especificada
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [spacingPassword, setSpacingPassword] = useState(false);
  /* const { nombre, apellido, telefono, correo, password, confirmPassword } =
    register; */

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
    clearErrors,
  } = useForm();

  const {
    required,
    patternEmail,
    minLength,
    validateTrim,
    validateEquals,
    patternPassword,
  } = formValidate();

  const changeTypeInput = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      console.log(data);

      const res = await axios.post(URI, data);
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

  /*    const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !nombre.trim() ||
      !apellido.trim() ||
      !telefono.trim() ||
      !correo.trim() ||
      !password.trim()
    ) {
      // e.target[0].focus();
      console.log("Complete todos los campos");

      return;
    }
    //enviando los datos al backend
    
  }; */

  /* const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister((old) => ({
      ...old,
      [name]: value,
    }));
  }; */

  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <h2 className={styles["titulo-h2"]}>Registrarse</h2>

        {errors.backend && <FormErrorBackend error={errors.backend} />}

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles["input-box"]}>
            <input
              className={styles.input}
              type="text"
              placeholder="Nombre"
              name="nombre"
              {...register("nombre", {
                required,
              })}
              /* onChange={handleChange}
              value={nombre} */
            />
            {errors.nombre && <FormError error={errors.nombre} />}
          </div>
          <div className={styles["input-box"]}>
            <input
              className={styles.input}
              type="text"
              placeholder="Apellido"
              name="apellido"
              {...register("apellido", {
                required,
              })}
              /* onChange={handleChange}
              value={apellido} */
            />
            {errors.apellido && <FormError error={errors.apellido} />}
          </div>
          <div className={styles["input-box"]}>
            <input
              className={styles.input}
              type="text"
              placeholder="Teléfono"
              name="telefono"
              {...register("telefono", {
                required,
              })}
              /* onChange={handleChange}
              value={telefono} */
            />
            {errors.telefono && <FormError error={errors.telefono} />}
          </div>
          <div className={styles["input-box"]}>
            <FormInput
              className={styles.input}
              type="text"
              placeholder="Correo electrónico"
              {...register("correo", {
                required,
                pattern: patternEmail,
              })}
            ></FormInput>

            {errors.correo && <FormError error={errors.correo} />}
          </div>
          <div className={`${styles["input-box-2"]}`}>
            <input
              className={styles.input}
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              name="password"
              {...register("password", {
                minLength,
                validate: validateTrim,
                pattern: patternPassword,
              })}
              onChange={(e) => setPass(e.target.value)}
              /* onChange={handleChange}
              value={password} */
            />
            <FontAwesomeIcon
              icon={faEyeSlash}
              className={styles["icon-pass"]}
              onClick={changeTypeInput}
            />

            {errors.password && <FormError error={errors.password} />}
          </div>
          <Barra pass={pass} />
          <div className={styles["input-box"]}>
            <input
              className={styles.input}
              type="password"
              placeholder="Confirmar contraseña"
              name="confirmPassword"
              {...register("confirmPassword", {
                validate: validateEquals(getValues),
              })}
              /* onChange={handleChange}
              value={confirmPassword} */
            />
            {errors.confirmPassword && (
              <FormError error={errors.confirmPassword} />
            )}
          </div>

          <div className={styles["input-box"]}>
            <button className={styles.button}>Registrarse</button>
          </div>
        </form>
        <p className="d-inline-block mb-0 ">¿Ya tienes una cuenta?</p>
        <Link to="/" className={styles["text-a"]}>
          {" "}
          Inicia sesión
        </Link>
      </div>
    </div>
  );
};

export default Register;
