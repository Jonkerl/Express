import React from "react";


function Sales(props) {
  const { img, price, sold } = props;
  return (
    <div >
      <div>
        <div >
          <img style={{width: '100px', marginLeft: '20px', height: '15vh', }} src={img} alt="" />
        </div>
        <div style={{fontWeight: "bold", marginBottom: '5px'}}>{price}</div>
        <div>{sold}</div>
      </div>
    </div>
  );
}

export default Sales;
