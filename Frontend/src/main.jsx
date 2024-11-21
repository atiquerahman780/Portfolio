
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Header from "./Components/Header.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contacts",
    element: <Header />,
  },
],
{
future: {
  v7_relativeSplatPath: true,
  v7_fetcherPersist: true,
  v7_normalizeFormMethod: true,
  v7_partialHydration: true,
  v7_skipActionStatusRevalidation: true,
  v7_skipActionErrorRevalidation: true,
},},
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider future={{
    v7_startTransition: true,
  }} router={router} />
  </StrictMode>
)

