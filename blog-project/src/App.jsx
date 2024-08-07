import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { logIn, logOut } from "./feature/authSlice";
import { Header, Footer } from "./components/index";
import { Outlet } from "react-router-dom";
function App() {
  // first show loading screen before showing data
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch(); // to bring current user or data

  useEffect(() => {
    authService
      .getCurrentUserAccount()
      .then((userData) => {
        if (userData) {
          dispatch(logIn(userData));
        } else {
          dispatch(logOut());
          console.log(`loging out`);
        }
      })
      .catch((error) => {
        console.log(`an error occured in useEffect app.jsx ${error}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return loading ? (
    <div className="flex items-center justify-center h-screen bg-gray-100 animate-pulse">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500">
        <Header></Header>
        <main>{/* <Outlet></Outlet> */}</main>
        <Footer></Footer>
      </div>
    </div>
  ) : null;
}

export default App;
