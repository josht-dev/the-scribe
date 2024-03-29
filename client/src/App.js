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
import { Box } from "@mui/system";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Account from "./components/pages/Account";
import Campaigns from "./components/pages/Campaigns";
import Headspace from "./components/pages/Headspace";
import Workshop from "./components/pages/Workshop";
import Contact from "./components/pages/Contact";
import Construction from "./components/pages/Construction"
import CssBaseline from "@mui/material/CssBaseline";
import "../src/assets/css/App.css";

const httpLink = createHttpLink({
 
  uri: "/graphql",
  //uri: "http://localhost:3001/graphql",
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

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <Root />
        }
      >
        <Route path="/account" element={<Account />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/construction" element={<Construction/>}/>
        <Route path="/headspace" element={<Headspace />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );

  return (
    <>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </>
  );
}

const Root = () => {
  return (
    <>
      <Box className="App" sx={{ minHeight: "100vh" }}>
        {/* CssBaseline is just a css reset */}
        <CssBaseline />
        <Navbar />
        <Outlet />
        <Footer />
      </Box>
    </>
  );
};
