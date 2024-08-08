import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logIn as featureAuthLogin } from "../feature/authSlice";
import { Button, Input } from "../components/index";
import { useDispatch } from "react-redux";
import useform from "react-hook-form";
import authService from "../appwrite/auth";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useform();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data); //it means jo user ne data diya hai us ko session medalo
      if (session) {
        // agar session true hai to user ka data get karo
        const userdata = authService.getCurrentUserAccount();
        if (userdata) dispatch(featureAuthLogin(userdata));
        navigate("/");
      }
    } catch (error) {
      console.log(`error occured in login.jsx component ${error}`);
    }
  };
  return (
    <>
      <h2>Sign in to you account</h2>
      <Link to="/signup">
        <div>don't have an account</div>
      </Link>

      {error && <span>error occured {error}</span>}

      <form onSubmit={handleSubmit(login)}>
        <Input
          label="Email :"
          type="email"
          placeholder="Enter Your Email..."
          {...register("email", {
            required: true,
            validate: {
              matchpatern: (value) =>
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                  value
                ) || "email must be valid",
            },
          })}
        ></Input>

        <Input
        label = "Password: "
        type = "password"
        placeholder = "enter your password....."
        {...register("password" ,{
            required : true,
            maxlen

        })}

        >
        </Input>
      </form>
    </>
  );
}

export default Login;
