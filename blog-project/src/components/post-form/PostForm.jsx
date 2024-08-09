import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select } from "../index";
import { service } from "../../appwrite/conf";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: "",
    },
  });
  const navigate = useNavigate(); // not sure why i am using user.userdata
  const post = useSelector((state) => state.user.userData);

  // now there are two thing if post exist update it and if not create new post

  const onSubmit = async (data) => {
    if (post) {
      (await data.image[0]) ? service.uploadFile(data.image[0]) : null;
      // new image has been uploaded but we have to delete the old image too
      if (file) {
        service.deleteFile(post.featuredImage);
      }
      // now deletion is done we have to update the post if user updated it
      const updatePost = await service.updateDocument(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (updatePost) navigate(`/post/${post.$id}`);
    } else {
      // first upload image
      let file = await service.uploadFile(data.image[0]);
      if (file) {
        // if file true now create document
        let doc = await service.createDocument({
          ...data,
          featuredImage: file.$id,
          userId: userData.$id,
        });
        if (doc) {
          navigate(`/post/${doc.$id}`);
        }
      }
    }
  };
  return <div>PostForm</div>;
}

export default PostForm;
