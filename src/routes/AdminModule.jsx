import CardModule from "../components/CardModule";
import CardProfile from "../components/CardProfile";
import Sidebar from "../components/Sidebar";
import CardProduct from "../components/CardProduct";
import { UserContext } from "../context/UserProvider";
import { useContext } from "react";
const AdminModule = () => {
  const { online } = useContext(UserContext);
  return (
    <>
      <div className="row ">
        <div className="col-3 col-lg-2 ">
          <div className="row my-2 ms-2 ">
            <div className="col-12 mt-2 text-center">
              <CardProfile />
              <ul className="list-unstyled">
                <li className="border-bottom"></li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <Sidebar />
            </div>
          </div>
        </div>

        <div className="col-9 col-lg-10 ">
          <div className="row ms-2">
            <div className="col-12 col-md-6 col-lg-3  my-3 ">
              <CardProduct />

              {/* <CardModule /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminModule;
