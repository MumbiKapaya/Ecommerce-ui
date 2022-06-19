import Home from "./Pages/Home";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
const App = () => {
  return <div>
    <Router>
    <Routes>
        <Route index element={<Login />} />
        <Route path ="/products" element={<ProductList />}>
        </Route>
        <Route path="/products/:category" element={<ProductList />}>
        </Route>
        <Route path="/product/:id" element={<Product />}>
        </Route>
        <Route path="/cart" element={<Cart />}>
        </Route>
        <Route path="/Home" element={<Home />}>
        </Route>
        <Route path="/Register" element={<Register/>}>
        </Route>
        <Route path= "/Checkout" element = {<Checkout />}></Route>
    </Routes>
  </Router>,
  </div>;
};

export default App;