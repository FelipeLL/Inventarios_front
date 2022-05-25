import profile from "../images/profile_1.jpg";

const CardProfile = () => {
  return (
    <>
      <img
        src={profile}
        className="img-fluid  rounded-circle"
        alt="..."
        width="130"
      />

      <div className="card-body text-center">
        <h5 className="card-title">ROL</h5>
        <p className="card-text">Nombre Usuario</p>
      </div>
    </>
  );
};

export default CardProfile;
