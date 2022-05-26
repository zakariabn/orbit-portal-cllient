import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Login from "./components/auth/Login/Login";
import RequireAdmin from "./components/auth/RequireAdmin/RequireAdmin";
import RequireAuth from "./components/auth/RequireAuth/RequireAuth";
import SignUp from "./components/auth/SignUp/SignUp";
import Navigation from "./components/Header/Navigation/Navigation";
import AddProduct from "./components/pages/Dashboard/AddProduct/AddProduct";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import ManageOrders from "./components/pages/Dashboard/ManageOrders/ManageOrders";
import ManageProduct from "./components/pages/Dashboard/ManageProduct/ManageProduct";
import ManageUser from "./components/pages/Dashboard/ManageUser/ManageUser";
import MyOrders from "./components/pages/Dashboard/MyOrders/MyOrders";
import Overview from "./components/pages/Dashboard/Overview/Overview";
import Profile from "./components/pages/Dashboard/Profile/Profile";
import UserReview from "./components/pages/Dashboard/UserReview/UserReview";
import Home from "./components/pages/Home/Home";
import NewsBlog from "./components/pages/NewsBlog/NewsBlog";
import ReadBlogNews from "./components/pages/NewsBlog/ReadBlogNews";
import Order from "./components/pages/Order/Order";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Products from "./components/pages/Products/Products";
import PageNotFound from "./components/sheared/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="relative flex flex-col items-center">
      <Navigation></Navigation>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/news-blog" element={<NewsBlog/>}></Route>
        <Route path="/news-blog/read/:id" element={<ReadBlogNews/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
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

          <Route
            path="manage-products"
            element={
              <RequireAdmin>
                <ManageProduct />
              </RequireAdmin>
            }>
          </Route>

          <Route
            path="add-product"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }>
          </Route>

        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/sign-up" element={<SignUp></SignUp>}></Route>

        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
