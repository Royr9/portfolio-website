import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import { createBrowserRouter ,Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Root from './pages/Root';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
     <Route path='/' element={<Home/>}/>
    </Route>
  )
)

function App() {
  return (  <RouterProvider router={router} /> );
}

export default App;