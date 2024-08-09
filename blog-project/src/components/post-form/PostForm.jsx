import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select } from "../index";
import { service } from "../../appwrite/conf";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm() {
    const {register, handleSubmit} = useForm({
      defaultValues:{
        title: ""
      }
    })
    const navigate = useNavigate()// not sure why i am using user.userdata
    const post = useSelector(state => state.user.userData)
  return <div>PostForm</div>;
}

export default PostForm;
