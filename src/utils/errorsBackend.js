export const errorsBackend = (error) => {
    switch (error) {
        case "El correo ya existe en la base de datos":
            return "El correo ingresado ya se encuentra registrado";
        case "El Email y/o contraseña son incorrectos":
            return "El Email y/o contraseña son incorrectos";
        case "Cuenta no verificada":
            return "La cuenta no se encuentra verificada, revisa tu correo electrónico";
        case "La contraseña NO coincide":
            return "La contraseña actual es incorrecta";
        default:
            return "Ocurrio un error en el server";
    }
}