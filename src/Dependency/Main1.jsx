import React from "react";
import { RxHamburgerMenu } from "react-icons/Rx";
import item from "./item";
import { AiOutlineSafety } from "react-icons/Ai";
import { AiOutlineSkype } from "react-icons/Ai";
import { MdPersonPin } from "react-icons/Md";
// import july from "../Images/july.png";
import { FcLeave, FcNext } from "react-icons/Fc";
// import deal from '../Images/deal.webp'
import sup from '../Images/super.webp'
import Sales from './Sales'
import product from './product'
import { GiSpaceShuttle } from "react-icons/Gi";




function Main1() {
  const itemDiv = item.map((item) => (
    <div
      style={{
        marginBlock: "10px",
        height: " 5vh",
        fontSize: "13px",
        backgroundColor: "white",
        borderRadius: "10px",
      }}
      key={item.id}
    >
      {" "}
      {item.img}
      {item.text}{" "}
    </div> 

    
  ));

  const productDiv = product.map((product) => (<div style={{display: "flex"}}
  key={product.sold}> <Sales
   img= {product.img}
    price={product.price}
   sold= {product.sold} />
 </div>) )  

  return (
    <div className="main1" style={{ display: "flex" }}>
      <div className="sidebar">
        <p>
          {" "}
          <RxHamburgerMenu /> Categories{" "}
        </p>
        <div className="item"> {itemDiv} </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            width: "100%",
            borderRadius: "5px",
            backgroundColor: "white",
            height: "10vh",
            paddingTop: "15px",
            marginRight: "200px",
          }}
        >
          <div style={{ fontSize: "18px", display: "flex", marginRight: '50px', paddingLeft: '20px' }}>
            {" "}
            <AiOutlineSafety style={{ color: "red", fontSize: "2rem" }} />{" "}
            <p>Safe & reliable payments</p>{" "}
          </div>
          <div style={{ fontSize: "18px", display: "flex", gap: "10px", marginRight: '50px' }}>
            {" "}
            <AiOutlineSkype style={{ color: "red", fontSize: "2rem" }} />{" "}
            <p> Money back guarantee</p>
          </div>
          <div style={{ fontSize: "18px", display: "flex", gap: "10px" }}>
            {" "}
            <MdPersonPin style={{ color: "red", fontSize: "2rem" }} />{" "}
            <p>24/7 Customer Service</p>
          </div>
        </div>

        <div className="main2">
          <h4>Your fave shopping guide </h4>
          <p>Check out the latest new deal</p>
        </div>

        <div style={{display: "flex"}}>
          <div className="side2">
            <div style={{ color: "white", padding: " 20px 20px" }}>
              <div style={{ display: "flex" }}>
                {" "}
                <p style={{ marginRight: "auto" }}>
                  {" "}
                  <h4>Save more with codes </h4>{" "}
                </p>{" "}
                <p>
                  {" "}
                  <FcNext />{" "}
                </p>
              </div>
              <p style={{ fontSize: "13px" }}>Top selected items</p>
            </div>
            <div className="sideIn">
                <div style={{display: "flex", padding: '5px 5px'}}>
                    <p style={{marginRight: 'auto'}}>4727.81NGN</p>
                    <p>JULYOT6</p>
                </div>
              <p style={{ fontSize: '10px', color:"red"}}>With 39398.40NGN minimum spend</p>
            </div>
            <div className="sideIn"></div>
          </div>
<div className="rightbar">
          <div className="side3" style={{ display: "flex", gap: '10px'}}>
            <div className="deal"></div>
            <div className="side32">
                <p style={{padding: '20px', fontSize: '11px',fontWeight: "bold"}}>Welcome to AliExpress!</p>
                <div style={{display: "flex", gap: '20px'}}><p style={{marginLeft: '30px',}}><button style={{ padding: '5px 10px', backgroundColor: "red",color: "white", borderRadius: '20px'}}>Join</button></p>
                <p><button style={{ padding: '5px 10px', backgroundColor: "white",color: "red", borderRadius: '20px'}}>Sign in</button></p> </div>
            </div>
          </div>
          <div className="side4">
            <div style={{display: "flex", padding: '10px 10px'}} >
               <div style={{marginRight: 'auto'}}> <img style={{width: '400px', display: "flex"}} src={sup} alt="" />
                <p style={{fontSize: '13px'}}>Top products. Incredible prices</p>  </div>
                <p style={{fontSize: '13px', fontWeight: "bold"}}>View more</p>
            </div>
            <div style={{display: "flex", marginTop: '10px', padding: '20px 20px', justifyItems: "center", justifyContent: "space-between"}}> 
                   {productDiv} 
            </div>
          </div>
          </div>
        </div>


      </div>
    </div>
  );
}
export default Main1;
