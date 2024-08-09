import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select } from "../index";
import { service } from "../../appwrite/conf";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm() {
    const {} = useForm()
    const navigate = useNavigate()
  return <div>PostForm</div>;
}

export default PostForm;
