import About from "../../Pages/About/About";
import Login from "../../Pages/Login/Login";
import Media from "../../Pages/Media/Media";
import Signup from "../../Pages/Signup/Signup";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../../Pages/Home/Home/Home");
const { default: Main } = require("../Main/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/about',
                element: <About></About>
            },

            {
                path: '/media',
                element: <Media></Media>
            },

        ]
    },
    {
        path: '/signin',
        element: <Login></Login>
    },
    {
        path: '/signup',
        element: <Signup></Signup>
    },
])

export default router;