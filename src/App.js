import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { publicRoute } from "./routes/publicRoutes";
import { privetRoutes } from "./routes/privetRoutes"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Footer from "./pages/Footer";
import PrivateRoute from "./authentication/PrivateRoute";
import AdminRoute from "./authentication/AdminRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddAdmin from "./pages/Dashboard/AddAdmin";
import AddFood from "./pages/Dashboard/AddFood";

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Navbar>
        <Routes>
          {
            publicRoute.map(({ path, Component }, index) =>
              <Route
                key={index}
                path={path}
                element={<Component />}
              />)
          }
          <Route element={<PrivateRoute />}>
            {
              privetRoutes.map(({ path, Component }, index) =>
                <Route
                  key={index}
                  path={path}
                  element={<Component />}
                />)
            }
          </Route>
          <Route element={<AdminRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="addFood" element={<AddFood />} />
              <Route path="addAdmin" element={<AddAdmin />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </Navbar>
    </>
  );
}

export default App;
