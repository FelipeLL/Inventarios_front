import React from "react";
import zxcvbn from "zxcvbn";

const Barra = ({ pass }) => {
  const testResult = zxcvbn(pass);
  const num = (testResult.score * 100) / 4;

  const createPassLabel = () => {
    switch (testResult.score) {
      case 0:
        return "Muy débil";
      case 1:
        return "Débil";
      case 2:
        return "Regular";
      case 3:
        return "Buena";
      case 4:
        return "Fuerte";
      default:
        return "";
    }
  };

  const progressColor = () => {
    switch (testResult.score) {
      case 0:
        return "#828282";
      case 1:
        return "#EA1111";
      case 2:
        return "#FFAD00";
      case 3:
        return "#9bc158";
      case 4:
        return "#00b500";
      default:
        return "none";
    }
  };

  const changePasswordColor = () => ({
    width: `${num}%`,
    background: progressColor(),
    height: "13px",
  });

  return (
    <>
      <div className="progress" style={{ height: "13px" }}>
        <div className="progress-bar" style={changePasswordColor()}></div>
      </div>
      <p style={{ color: progressColor(), fontSize: "15px", marginTop: "2px" }}>
        {createPassLabel()}
      </p>
    </>
  );
};

export default Barra;
