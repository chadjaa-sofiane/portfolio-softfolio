import useObserver from "@lib/hooks/useObserver";
import React from "react";

function Exposition() {
  const [refdiv, apear]: any = useObserver({
    options: {
      threshold: 0.25,
    },
  });
  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <div
        ref={refdiv}
        style={{
          width: "100%",
          height: "40em",
          backgroundColor: apear ? "blue" : "red",
        }}
      ></div>
    </>
  );
}

export default Exposition;
