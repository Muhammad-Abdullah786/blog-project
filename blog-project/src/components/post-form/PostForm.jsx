import React, { useCallback, useEffect } from "react";
import { useForm, watch } from "react-hook-form";
import { Button, Input, Select } from "../index";
import { service } from "../../appwrite/conf";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm() {
  const { register, handleSubmit, watch, setValue, getValues, control } =
    useForm({
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

  // now slugtransformation
  const slugTransformer = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s+/g, "-");
    }
    return "";
  }, []);

  useEffect(() => {
    let subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue(
          "slug",
          slugTransformer(value.title, {
            shouldValidate: true, //dont know what is this
          })
        );
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [slugTransformer, watch, navigate, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
