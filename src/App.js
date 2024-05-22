import React from "react";

// ROUTER
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// PAGES
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

// ROUTES
const router = createBrowserRouter([
  {
      path: "/",
      exact: true,
      element: <Page1 />,
  },
  {
    path: "/2",
    exact: true,
    element: <Page2 />,
},


]);



export default function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

