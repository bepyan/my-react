import React from "react";
import useInput from "hooks/useInput";

export default () => {
  const textHook = useInput("");

  return (
    <div style={{ textAlign: "center" }}>
      <input {...textHook} placeholder="your text" style={{ fontSize: "40px", textAlign: "center" }} />
      <br />
      <p style={{ color: "#262835", fontSize: "30px" }}>
        {textHook.value}
      </p>
    </div>
  );
};
