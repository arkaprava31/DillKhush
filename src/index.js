import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import Privacy from './pages/privacy/Privacy';
import
{
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/privacy",
            element: <Privacy />,
        },
    ]
);

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={ router } />
    </React.StrictMode>
    , document.getElementById( "root" )
);
