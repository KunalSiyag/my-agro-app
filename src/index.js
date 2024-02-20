import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './Pages/About';
import App from './App';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Patient from './Pages/Patient';
const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "patient",
        element: <Patient />
      },
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);

