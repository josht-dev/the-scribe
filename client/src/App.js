import React from "react"
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

export default function App(){
    const router = createBrowserRouter(
      createRoutesFromElements(
        <ApolloProvider client={client}>
          <Route path="/" element={<Root />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="account" element={<Account />} />
            <Route path="campaigns" element={<Campaigns />} />
            <Route path="headspace" element={<Headspace />} />
            <Route path="workshop" element={<Workshop />} />
          </Route>
        </ApolloProvider>
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
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}