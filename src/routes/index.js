import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import ErrorPage from "../components/ErrorPage";
import Read from "../components/Read";
import Update from "../components/Update";
import Create from "../components/Create";

const RouterData = () => {
    const strictRoute = createBrowserRouter(
        [
            {
                path: '/',
                element: <Home />,
                errorElement: <ErrorPage />
            },
            {
                path: '/read/:id',
                element: <Read />,
            },
            {
                path: '/update/:id',
                element: <Update />,
            },
            {
                path: '/create',
                element: <Create />,
            }
        ]
    )
    return strictRoute;
}
export default RouterData;