import { useState, useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
function App() {
  const [load, setLoad] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getUserAccount()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.error("Failed to fetch user account in app.jsx", error);
        dispatch(logout());
      })

      .finally(setLoad(false));
  });
  return !load ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>{/* TODO: <Outlet /> */}</main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
