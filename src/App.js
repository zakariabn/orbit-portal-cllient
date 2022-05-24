import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Login from "./components/auth/Login/Login";
import RequireAdmin from "./components/auth/RequireAdmin/RequireAdmin";
import RequireAuth from "./components/auth/RequireAuth/RequireAuth";
import SignUp from "./components/auth/SignUp/SignUp";
import Navigation from "./components/Header/Navigation/Navigation";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import ManageOrders from "./components/pages/Dashboard/ManageOrders/ManageOrders";
import ManageUser from "./components/pages/Dashboard/ManageUser/ManageUser";
import MyOrders from "./components/pages/Dashboard/MyOrders/MyOrders";
import Overview from "./components/pages/Dashboard/Overview/Overview";
import Profile from "./components/pages/Dashboard/Profile/Profile";
import UserReview from "./components/pages/Dashboard/UserReview/UserReview";
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
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }>
          <Route path="my-orders" element={<MyOrders />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="review" element={<UserReview />}></Route>
          <Route
            path="overview"
            element={
              <RequireAdmin>
                <Overview />
                <Overview />
              </RequireAdmin>
            }>
          </Route>

          <Route
            path="manage-users"
            element={
              <RequireAdmin>
                <ManageUser />
              </RequireAdmin>
            }>
          </Route>

          <Route
            path="manage-orders"
            element={
              <RequireAdmin>
                <ManageOrders />
              </RequireAdmin>
            }>
          </Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
