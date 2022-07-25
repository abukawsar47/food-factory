import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { publicRoute } from "./routes/publicRoutes";
import { privetRoutes } from "./routes/privetRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./pages/Footer";
import PrivateRoute from "./authentication/PrivateRoute";
import AdminRoute from "./authentication/AdminRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddEmployee from "./pages/Dashboard/AddEmployee";
import AddFood from "./pages/Dashboard/AddFood";
import MyOrders from "./pages/Dashboard/User/MyOrders";
import ManageOrders from "./pages/Dashboard/ManageOrders";
import AddReview from "./pages/Dashboard/User/AddReview";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar>
        <Routes>
          {publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
          <Route element={<PrivateRoute />}>
            {privetRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
          <Route element={<AdminRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="addFood" element={<AddFood />} />
              <Route path="addEmployee" element={<AddEmployee />} />
              <Route path="myOrders" element={<MyOrders />} />
              <Route path="manageOrders" element={<ManageOrders />} />
              <Route path="addReview" element={<AddReview />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </Navbar>
    </>
  );
}

export default App;
