import React from "react";
import airpod from '../Images/airpro.webp'
function More1() {
  return (
    <div className="more1" style={{border: '5px', borderRadius: '10px', backgroundColor: "white", width: '200px', padding: '20px 20px'}}>
        <img style={{width: '150px', height: '25vh',paddingBottom: '10px'}} src={airpod} alt="" />
      <p style={{fontWeight: "bold"}}>NGN8,743.41</p>
      <p>airpod pro</p>
      <p>Free shipping </p>
    </div>
  );
} 
 

export default More1;
