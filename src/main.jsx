import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './ErrorPage.jsx';
import { Counter } from './modules/counter/counter.jsx';
import { ImdbHome } from './modules/imdb/ImdbHome.jsx';
import { Rating } from './modules/rating/rating.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "imdb",
        element: <ImdbHome />,
      },
      {
        path: "rating",
        element: <Rating ratingLength={4}/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
