import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
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
import CssBaseline from "@mui/material/CssBaseline";
import "../src/assets/css/App.css";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {

  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  const [open, setOpen] = React.useState(false);
  const [registerOpen, setRegisterOpen] = React.useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Root setOpen={setOpen} setRegisterOpen={setRegisterOpen} />}
      >
        <Route path="/account" element={<Account />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/headspace" element={<Headspace />} />
        <Route path="/workshop" element={<Workshop />} />
      </Route>
    )
  );

  return (
    <>
      <Login open={open} setOpen={setOpen} />
      <Register open={registerOpen} setOpen={setRegisterOpen} />
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </>
  );
}

const Root = ({ setOpen, setRegisterOpen }) => {
  return (
    <>
      {/* CssBaseline is just a css reset */}
      <CssBaseline />
      <Navbar setOpen={setOpen} setRegisterOpen={setRegisterOpen} />
      <Outlet />
      <Footer />
    </>
  );
};
