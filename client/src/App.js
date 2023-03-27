import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/pages/Account";
import Campaigns from "./components/pages/Campaigns";
import Headspace from "./components/pages/Headspace";
import Workshop from "./components/pages/Workshop";
import CssBaseline from '@mui/material/CssBaseline';
import '../src/assets/css/App.css';

export default function App(){
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Root />}>Outlet
          <Route path="login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/headspace" element={<Headspace />} />
          <Route path="/workshop" element={<Workshop />} />
        </Route>
      )
    );

return(
    <>
    <RouterProvider router={router}/>
    </>
)
}

const Root = () =>{
    return(
        <>
        {/* CssBaseline is just a css reset */}
        <CssBaseline />
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}