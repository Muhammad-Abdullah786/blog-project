import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { logIn } from "../feature/authSlice";
import Button from "./Button";

function Signup() {
  const { registor, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const nagivate = useNavigate();
  const [error, setError] = useState();

  const signup = async (data) => {
    setError("");
    try {
      const session = await authService.createAccount(data);
      if (session) {
        const userData = await authService.getCurrentUserAccount();
        if (userData) dispatch(logIn(userData));
      }
    } catch (error) {
      setError(error);
      console.log(`error occured in signup.jsx ${error}`);
    }
  };

  return (
    <>
      <div>Sign up</div>
      <Link to="/login">
        <p>Already have an account</p>
      </Link>
      {error && <p>Error is occuring in Sign up</p>}

      <form onSubmit={handleSubmit(signup)}>
        <Input
          label="Name"
          placeholder="Enter Full Name.."
          {...registor("name", {
            required: true,
            maxlength: 8,
          })}
        />
        <Input
          label="Email: "
          placeholder="Enter Full Email..."
          {...registor("email", {
            required: true,
            matchPatern: (value) =>
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ||
              "email is not fully validate",

            // maxlength: ,
          })}
        />
        <Input
          label="Password"
          placeholder="Enter Password...."
          {...registor("password", {
            required: true,
            maxlength: 8,
          })}
        />
        <Button type="submit" btnText={"helloe form sign up"}>
          Sign UP
        </Button>
      </form>
    </>
  );
}

export default Signup;
