import styles from "../styles/login.module.css";
import logo from "../images/logo-final_opt.svg";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDolly } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../context/UserProvider";
import { useForm } from "react-hook-form";
import { formValidate } from "../utils/formValidate";
import FormError from "../components/FormError";
import { errorsBackend } from "../utils/errorsBackend";
import FormErrorBackend from "../components/FormErrorBackend";
axios.defaults.withCredentials = true;

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
    clearErrors,
  } = useForm();

  const { required } = formValidate();

  const URI = "http://localhost:5000/auth";

  // Guarda el email y la password del usuario que intenta logearse
  const [user, setUser] = useState(initialState);
  const [admin, setAdmin] = useState();
  const { online, setOnline } = useContext(UserContext);

  const { email, password } = user;
  const navigate = useNavigate();
  useEffect(() => {
    provideAccess();
  }, [online]);

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const res = await axios.post(URI, data);
      setOnline(res.data.isOnline);
      setAdmin(res.data.isAdmin);
    } catch (error) {
      console.log(error.response.data.message);
      setError("backend", {
        message: errorsBackend(error.response.data.message),
      });

      setTimeout(() => {
        clearErrors("backend");
      }, 2500);
    }
  };

  //Enviar formulario
  /*  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      console.log("Complete todos los campos");
      return;
    }
    //Se envia la URI con el email y la contraseña que el usuario digito en el formulario
    const res = await axios.post(URI, user);
    setOnline(res.data.isOnline);
    setAdmin(res.data.isAdmin);

    
  }; */

  const provideAccess = () => {
    if (online) {
      !admin ? navigate("/adminmodule") : navigate("/register");
      console.log("usuario online");
    } else {
      console.log("usuario offline");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((old) => ({
      ...old,
      [name]: value,
    }));
  };

  return (
    <div className={styles.body}>
      {/* <!--g-o quitamos scroll lateral--> */}
      <div className="row g-0">
        {/* <!--TODA LA SECCION DEL CARROUSEL--> */}
        <div className="col-lg-7 d-none d-lg-block">
          {/* <!--d lg block para que se muestra a partir de dispositivos medianos--> */}

          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              {/* <!--IMAGEN 1--> */}
              <div
                className={`carousel-item min-vh-100 active  ${styles["img-1"]}`}
                data-bs-interval="3000"
              >
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="font-weight-bold">
                    Descubre algo sorprendete
                  </h5>
                  <a href="#" className="text-muted text-decoration-none">
                    {" "}
                    <i className="fa-light fa-location-check"></i>Descarga
                    nuestra app
                  </a>
                </div>
              </div>
              {/* <!--IMAGEN 2--> */}
              <div
                className={`${styles["img-2"]} carousel-item min-vh-100`}
                data-bs-interval="3000"
              >
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="font-weight-bold">
                    Descubre algo sorprendete
                  </h5>
                  <a href="#" className="text-muted text-decoration-none">
                    Descarga nuestra app
                  </a>
                </div>
              </div>
              {/* <!--IMAGEN 3--> */}
              <div
                className={`${styles["img-3"]} carousel-item min-vh-100`}
                data-bs-interval="3000"
              >
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="font-weight-bold">
                    Descubre algo sorprendete
                  </h5>
                  <a href="#" className="text-muted text-decoration-none">
                    {" "}
                    <i className="fa-light fa-location-check"></i>Descarga
                    nuestra app
                  </a>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="col-lg-5 d-flex flex-column align-items-end min-vh-100">
          {/* <!--acomoda texto d-flex flex-column--> */}

          {/* <!-- formulario (contendra el lago del login) --> */}

          <div className="px-lg-5 pt-lg-4 pb-lg-3 p-4 w-100 mb-auto">
            {/* <!--añadir pading al div del logo para hacerlo responsive--> */}
            <FontAwesomeIcon icon={faDolly} style={{ fontSize: "30px" }} />
          </div>

          <div className="px-lg-5 py-lg-4 p-4 w-100 align-self-center ">
            {/* <!--añadir pading al div del logo para hacerlo responsive alinea igual al logo--> */}
            <h1 className="font-weight-bold mb-4 text-dark">
              Bienvenido de vuelta
            </h1>

            {errors.backend && <FormErrorBackend error={errors.backend} />}

            {/* <!--Formulario de ingreso--> */}

            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="exampleInputEmail1" className="fs-5 text-dark">
                Correo electronico
              </label>

              <div className={styles["input-box"]}>
                <input
                  className={styles.input}
                  type="text"
                  id="exampleInputEmail1"
                  placeholder="Ingresa tu correo electrónico"
                  name="email"
                  {...register("email", {
                    required,
                  })}
                />
                {errors.email && <FormError error={errors.email} />}
              </div>
              <label htmlFor="exampleInputEmail2" className="fs-5 text-dark">
                Contraseña
              </label>
              <div className={styles["input-box"]}>
                <input
                  className={styles.input}
                  type="password"
                  id="exampleInputEmail2"
                  placeholder="Ingresa tu contraseña"
                  name="password"
                  {...register("password", {
                    required,
                  })}
                />
                {errors.password && <FormError error={errors.password} />}
              </div>
              <Link
                to="/recover"
                id="emailHelp"
                className="form-text  text-decoration-none"
              >
                ¿Has olvidado tu contraseña?
              </Link>

              <div className={styles["input-box"]}>
                <button className={styles.button}>Iniciar Sesión</button>
              </div>
            </form>
          </div>

          <div className="text-center px-lg-5 pt-lg-3 pb-lg-4 p-4 w-100 mt-auto">
            {/* <!--seccion crear CUENTA-->     <!--text-black cambio de color y font-weight-bold para que no tenga movimiento--> */}
            <p className="d-inline-block mb-0 ">
              ¿Todavia no tienes una cuenta?
            </p>
            <Link to="/register" className={styles["text-a"]}>
              {" "}
              Crea una ahora
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
