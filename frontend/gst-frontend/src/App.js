import "./App.css";
import CreateCategory from "./screens/CreateCategory";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateProduct from "./screens/CreateProduct";
import CreateSale from "./screens/CreateSale";
import Home from "./screens/Home";

//remove the gst rate from the add product

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-category" element={<CreateCategory />} />
          <Route path="/create-product" element={<CreateProduct />} />
          {/* <Route path="/create-gst" element={<CreateGST/>} /> */}
          <Route path="/create-sale" element={<CreateSale/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
