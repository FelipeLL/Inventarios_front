import styles from "../styles/recover.module.css";

const Recover = () => {
  const searchEmail = () => {};

  return (
    <div className={styles.body}>
      <main className={styles.main}>
        <div className={styles["contenedor_todo"]}>
          <div className={styles["caja_atras"]}>
            <div className={styles["caja_atras_login"]}>
              <h3>Por favor digita el código</h3>
              <p>Se ha enviado un código a tu correo</p>
              <button id="btnInciarSesion"> Ejecutar Cambios</button>
            </div>

            <div className={styles["caja_atras_registro"]}>
              <h3> ¿Restablecer la contraseña de tu cuenta?</h3>
              <button id="btnRegistrarse" onClick={searchEmail}>
                {" "}
                Buscar{" "}
              </button>
            </div>
          </div>

          <div className={styles["contenedor_login-registro"]}>
            <form action="" className={styles["formulario_login"]}>
              <h2>Restablecer Contraseña</h2>
              <p>Ingresa tu correo electronico para buscar tu cuenta</p>
              <input type="text" placeholder="Correo Electronico" />
            </form>

            <form action="" className={styles["formulario_registro"]}>
              <h2>Código</h2>
              <input type="password" placeholder="123-456" />
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Recover;
