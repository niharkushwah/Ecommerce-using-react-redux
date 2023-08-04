import "./App.css";
// import { useState, useEffect } from "react";
// import Product from "./components/product";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import DashBoard from "./components/dashboard";
import Cart from "./components/cart";
import RootLayout from "./components/rootlayout";

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<DashBoard/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
