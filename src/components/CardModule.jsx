import icon1 from "../images/bag-fill.svg";
import icon2 from "../images/caret-right.svg";

const CardModule = () => {
  return (
    <>
      {/* <div className="card">
    <img src={icon1} className="card-img-top" alt="" />
    <div className="card-body">
    <h3 className='card-title'>Compras</h3>
    <p className='card-text'>Nueva compra</p>
    </div>
    </div> */}

      <div className="container mt-5">
        <div className="card text-center">
          <div className="card-header bg-primary text-white">
            <div className="row align-items-center">
              <div className="col">
                <img src={icon1} alt="" />
              </div>
              <div className="col">
                <h3 className="display-3">08</h3>
                <h6>Task</h6>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <h5>
              <a href="#" className="lead text-decoration-none">
                View details
                <img src={icon2} alt="" />
              </a>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardModule;
