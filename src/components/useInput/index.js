import React from "react";
import useInput from "hooks/useInput";

export default () => {
  const textHook = useInput("");

  return (
    <div style={{ textAlign: "center" }}>
      <input {...textHook} placeholder="what your name" />
      <br />
      <p>{textHook.value}</p>
    </div>
  );
};
