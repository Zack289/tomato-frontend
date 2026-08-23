import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";

import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/protectedRoute";
import PublicRoute from "./components/publicRoute";
import SelectRole from "./pages/SelectRole";
import Navbar from "./components/Navbar";
import Account from "./pages/Account";
import Restaurant from "./pages/Restaurant";
import { useAppData } from "./context/AppContext";
import RestaurantPage from "./pages/RestaurantPage";
import Cart from "./pages/Cart";
import AddAddressPage from "./pages/Address";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/PaymentSuccess";
import OrderSuccess from "./pages/OrderSuccess";
import Orders from "./pages/Orders";
import OrderPage from "./pages/OrderPage";
import RiderDashboard from "./pages/RiderDashboard";
import Admin from "./pages/Admin";

const App = () => {
  const { user, loading } = useAppData();

  if (loading) {
    return (
      <h1 className="text-2xl font-bold text-red-500 text-center mt-56">
        Loading Page...
      </h1>
    );
  }

  if (user && user.role === "seller") {
    return (
      <>
        <Restaurant />
        <Toaster />
      </>
    );
  }

  if (user && user.role === "rider") {
    return (
      <>
        <RiderDashboard />
        <Toaster />
      </>
    );
  }

  if (user && user.role === "admin") {
    return (
      <>
        <Admin />
        <Toaster />
      </>
    );
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/payment-success/:paymentId"
              element={<PaymentSuccess />}
            />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/order/:id" element={<OrderPage />} />
            <Route path="/address" element={<AddAddressPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/restaurant/:id" element={<RestaurantPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/select-role" element={<SelectRole />} />
            <Route path="/account" element={<Account />} />
          </Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
};

export default App;
