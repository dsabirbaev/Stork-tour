import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from "./router/index.jsx";
import { RouterProvider } from "react-router-dom";

import "primereact/resources/themes/lara-light-indigo/theme.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
     <RouterProvider router={router} />

  </React.StrictMode>
)
