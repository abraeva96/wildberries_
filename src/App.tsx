import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./router/Products/Products";
import ProductsId from "./router/ProductsId/ProductsId";
import NotFound from "./router/404/NotFound";

import About from "./router/About";
import Contact from "./router/Contact/Contact";
import HomeLayout from "./router/HomeLayout/HomeLayout";
import Basket from "./router/Basket/Basket";






const App = () => {
  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Products />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/:id" element={<ProductsId />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
