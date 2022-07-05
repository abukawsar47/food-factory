import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom"
import { publicRoute } from "./routes/publicRoutes"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Footer from "./pages/Footer";
import AllFoods from "./pages/AllFoods"
import PrivateRoute from "./authentication/PrivateRoute";

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
          {/*  <Route path="/all-foods" element={
            <PrivateRoute>
              <AllFoods />
            </PrivateRoute>
          } /> */}
          <Route element={<PrivateRoute />}>
            <Route path="/all-foods" element={<AllFoods />} />
          </Route>
        </Routes>
        <Footer />
      </Navbar>
    </>
  );
}

export default App;
