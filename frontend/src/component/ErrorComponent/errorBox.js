import React from "react";

export default function ErrorBox({ message }) {
  return (
    <>
      <div>
        <div className="text-2xl text-center p-6  bg-red-600 text-whiteColor  rounded-md  ">
          <h1> هیچ {message} یافت نشد</h1>
        </div>
      </div>
    </>
  );
}
