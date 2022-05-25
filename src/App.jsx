// import AdminModule from "./components/AdminModule";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "./context/UserProvider";
import Login from "./routes/Login";
// import Navbar from "./components/Navbar";
import Register from "./routes/Register";

const App = () => {
  const { online } = useContext(UserContext);
  if (online === false) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {/* <Navbar />
      <AdminModule /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      <Outlet />
    </div>
  );
};

export default App;
