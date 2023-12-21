import Category from "./components/Category";
import DisplayAllCategory from "./components/DisplayAllCategory";
import Brands from "./components/Brands"
import DisplayAllBrands from "./components/DisplayAllBrands"
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import DisplayAllProductDetails from "./components/DisplayAllProductDetails";
import DisplayAllProducts from "./components/DisplayAllProducts"
function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route element={<Category/>} path="/category"/>
        <Route element={<DisplayAllCategory/>} path="/displayallcategory"/>
        <Route element={<Brands/>} path="/brands"/>
        <Route element={<Products/>} path="/products"/>
        <Route element={<DisplayAllProducts/>} path="/displayallproducts"/>
        <Route element={<DisplayAllBrands/>} path="/displayallbrands"/>
        <Route element={<ProductDetails/>} path="/productdetails"/>
        <Route element={<DisplayAllProductDetails/>} path="/displayallproductdetails"/>
      
      </Routes>
      </Router> 
     
      </div>
  );
}

export default App;
