import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Login from "./components/auth/Login/Login";
import RequireAuth from "./components/auth/RequireAuth/RequireAuth";
import SignUp from "./components/auth/SignUp/SignUp";
import Navigation from "./components/Header/Navigation/Navigation";
import Home from "./components/pages/Home/Home";
import Order from "./components/pages/Order/Order";
import Products from "./components/pages/Products/Products";

function App() {
  return (
    <div className="relative flex flex-col items-center">
      <Navigation></Navigation>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route
          path="/order/:id"
          element={
            <RequireAuth>
              <Order />
            </RequireAuth>
          }></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
