import React from "react";
import silver from "../Images/silver.webp";

function More() {
  return (

    <div style={{border: '5px', borderRadius: '10px', backgroundColor: "white", width: '200px',padding: '20px 20px'}}>
      <img style={{width: '150px', height: '25vh',paddingBottom: '10px'}} src={silver} alt="" />
      <p style={{fontWeight: "bold"}}>NGN20,743.41</p>
      <p>Real steal watch</p>
      <p>Free shipping </p>
    </div>
  );
}

export default More;
