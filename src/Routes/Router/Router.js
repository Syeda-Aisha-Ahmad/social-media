import About from "../../Pages/About/About";
import Media from "../../Pages/Media/Media";

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
    }
])

export default router;