import React from "react";
import More from "./More";
import More1 from './More1'

function Main3() {
  return (
    <div style={{backgroundColor: ' rgba(128, 128, 128, 0.082)'}}>
      <div style={{  marginLeft: "40%", padding: '30px' }}>
        ..................... More to love .....................{" "}
      </div>

      <div style={{display: "flex", gap: "20px", height:'50vh', marginLeft: '10px',marginBottom: '10px'}}>
        <More1 />
        <More />
        <More1 />
        <More />
        <More1 />
        <More />
      </div>

<div   style={{display: "flex", gap: "20px", height:'50vh', marginLeft: '10px'}}>
  <More />
  <More1 />
  <More />
  <More1 />
  <More />
  <More1 />
</div>

<div style={{display: "flex", gap: "20px", height:'50vh', marginLeft: '10px',marginTop: '10px',}}>
        <More1 />
        <More />
        <More1 />
        <More />
        <More1 />
        <More />
      </div>
      <div style={{display: "flex", gap: "20px", height:'50vh', marginLeft: '10px',marginBottom: '10px'}}></div>
    </div>
  );
}

export default Main3;
