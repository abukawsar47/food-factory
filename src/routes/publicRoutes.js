import Home from "../pages/Home/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import SignUP from "../pages/SignUP";
import FoodDetails from "../pages/Home/modal/FoodDetails";
import Foods from "../pages/Home/Foods";

export const publicRoute = [
    { path: "/", name: "Home", Component: Home },
    { path: "/about", name: "About", Component: About },
    { path: "/foods", name: "Foods", Component: Foods },
    { path: "/foods:id", name: "Foods ID", Component: FoodDetails },
    { path: "/contact", name: "Contact", Component: Contact },
    { path: "/login", name: "Login", Component: Login },
    { path: "/signup", name: "SignUP", Component: SignUP },
    { path: "*", name: "NotFound", Component: NotFound },
];