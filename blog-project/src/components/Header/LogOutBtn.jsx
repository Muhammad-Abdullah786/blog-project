import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logOut } from "../../feature/authSlice";
function LogOutBtn() {
  const dispatch = useDispatch();

  const logOutHandler = () => {
    authService
      .logout()
      .then(() => dispatch(logOut()))
      .catch((error) =>
        console.log(`an error occured in logoutbtn .jsx ${error}`)
      );
  };
  return (
    <div>
      <button
        className=""
        // onClick={}
      >
        Logout
      </button>
    </div>
  );
}

export default LogOutBtn;
