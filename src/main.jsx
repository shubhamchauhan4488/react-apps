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
import * as serviceWorkerRegistration from './../serviceWorkerRegistration.js';
import WebWorkerHome from './modules/webworker/WebWorkerHome.jsx';

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
        element: <Rating ratingLength={4} />,
      },
      {
        path: "webWorker",
        element: <WebWorkerHome />,
      },
    ]
  },
]);

const worker = new Worker('dataWorker.js');
const largeDataSet = [4, 6, 8];
worker.postMessage(largeDataSet);

worker.onmessage = function (event) {
  console.log('Processed data:', event.data);
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
serviceWorkerRegistration.register();
