import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { loader as rootLoader } from '@components/form/Form'


import './style.scss';
import App from './components/App';
import ResultsPage from "./pages/resultsPage";
import Quiz from "./pages/quizPage/quiz";
import { ErrorPage } from "./pages/errorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Quiz />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/results",
    element: <ResultsPage />,
    loader: rootLoader,
  }

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);
