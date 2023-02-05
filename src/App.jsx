import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import SearchResult from "./Pages/SearchResult";
import CartPage from "./Pages/CartPage";
import ProductListPage from "./Pages/ProductListPage";
import { Route, Routes  } from "react-router-dom";
import ProductDeatilPage from './Pages/ProductDeatilPage';
import { redirect } from "react-router-dom";
import Success from "./Pages/Success";
import { useSelector } from 'react-redux';

function App() {

  

   const user = useSelector(state => state.user.userdata)

  return (
    <div className="App">
      <Navbar />

      {/* <LoginPage/> */}
      {/* <SignupPage/> */}
      {/* <Home/> */}
      {/* <SearchResult/> */}
      {/* <CartPage/> */}
      {/* <ProductListPage /> */}

      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/login" element={user? <Home/> :<LoginPage />} />
        <Route path="/signup" element={user?  <Home/>: <SignupPage />} />
        <Route path="/cart" element={ user?<CartPage/>:<LoginPage/>} />
        <Route path="/categories/:id" element={<ProductListPage/>} />
        <Route path="/product/:id" element={<ProductDeatilPage/>} />
        <Route path="/success" element={<Success/>} />



        <Route path="/search" element={<SearchResult/>} />


      </Routes>

      <Footer />
    </div>
  );
}

export default App;
