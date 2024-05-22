import React from "react";

// ROUTER
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// PAGES
import MainPage from "./pages/MainPage";


// ROUTES
const router = createBrowserRouter([
  {
      path: "/",
      exact: true,
      element: <MainPage />,
  },
]);



export default function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

