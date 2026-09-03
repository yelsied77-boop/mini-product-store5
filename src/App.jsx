import { Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Products from "./Pages/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
      </Route>
    </Routes>
  );
}



export default App;