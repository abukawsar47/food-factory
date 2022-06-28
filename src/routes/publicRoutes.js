import Home from "../pages/Home/Home";
import About from "../pages/About";
import Foods from "../pages/AllFoods";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

export const publicRoute = [
    { path: "/", name: "Home", Component: Home },
    { path: "/about", name: "About", Component: About },
    { path: "/foods", name: "foods", Component: Foods },
    { path: "/contact", name: "Contact", Component: Contact },
    { path: "/login", name: "Login", Component: Login },
    { path: "*", name: "NotFound", Component: NotFound },
];