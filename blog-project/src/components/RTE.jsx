import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
export default function RTE({ name, defaultValue = "", control, label }) {
  // these are the props which the user will give
  // although we can give too but if use give it it will be better

  return (
    <>
      <div>
        RTE
        {label && <label>{label}</label>}
        <Controller
          name={name || "untitled"}
          control={control}
          render={({ field: { onChange } }) => {
            <Editor
              initialValue={defaultValue}
              init={{
                initialValue: defaultValue,
                height: 500,
                menubar: true,
                plugins: [
                  "image",
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                  "anchor",
                ],
                toolbar:
                  "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
              onEditorChange={onChange} // meaning agar editor me jab bhi kuch change ho onCHnage starts working
            />;
          }}
        />
      </div>
      ;
    </>
  );
}
