import React from "react";
import { AiOutlineSkype } from "react-icons/Ai";
import { LuBus } from "react-icons/Lu";
import { TiBusinessCard } from "react-icons/Ti";
import { AiOutlineSafety } from "react-icons/Ai";
import { MdPersonPin } from "react-icons/Md";
import { FaRobot } from "react-icons/Fa";
import { AiFillApple } from "react-icons/Ai";
import { AiFillFacebook } from "react-icons/Ai";
import { FaTwitter } from "react-icons/Fa";
import { BsInstagram } from "react-icons/Bs";
import { BsWhatsapp } from "react-icons/Bs";
function Main4() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          padding: "20px 20px",
          margin: "40px 40px",
          height: "25vh",
        }}
      >
        <section >
          <p style={{paddingBottom: '10px', fontSize: '30px', marginLeft: "70px"}}>
            <AiOutlineSkype />
          </p >
          <h4 style={{paddingBottom: '10px', marginLeft: '40px'}}>Great value</h4>
          <p style={{fontSize: '13px', padding: '10px '}}>We offer competitive prices on over 100 million items.</p>
        </section>
        <hr style={{height: '13vh', marginTop: '60px'}} />
        <section>
          <p style={{paddingBottom: '10px', fontSize: '30px', marginLeft: "100px"}}>
            <LuBus />
          </p>
          <h4 style={{paddingBottom: '10px',marginLeft: '40px'}}>Worldwide shopping</h4>
          <p style={{fontSize: '13px', padding: '10px '}}>
            We ship to over 200 countries and regions, and our site comes in 12
            languages.
          </p>
        </section>
        <hr style={{height: '13vh', marginTop: '60px'}} />
        <section>
          <p style={{paddingBottom: '10px', fontSize: '30px', marginLeft: "80px"}}>
            <TiBusinessCard />
          </p>
          <h4 style={{paddingBottom: '10px',marginLeft: '30px',}}>Safe payments</h4>
          <p style={{fontSize: '13px', padding: '10px '}}>Pay with the world’s most popular and secure payment methods.</p>
        </section>
        <hr style={{height: '13vh', marginTop: '60px'}} />
        <section>
          <p style={{paddingBottom: '10px', fontSize: '30px', marginLeft: "70px"}}>
            <AiOutlineSafety />
          </p>
          <h4 style={{paddingBottom: '10px', marginLeft: 'px',}}>Shop with confidence</h4>
          <p style={{fontSize: '13px', padding: '10px '}}>
            Our Buyer Protection policy covers your entire purchase journey.
          </p>
        </section>
        <hr style={{height: '13vh', marginTop: '60px'}} />
        <section>
          <p style={{paddingBottom: '10px', fontSize: '30px', marginLeft: "60px"}}>
            <MdPersonPin />
          </p>
          <h4 style={{paddingBottom: '10px', marginLeft: '40px'}}>Help center</h4>
          <p style={{fontSize: '13px', padding: '15px'}}>Round-the-clock assistance for a smooth shopping experience.</p>
        </section>
        <hr style={{height: '13vh', marginTop: '60px'}} />
        <section>
          <p style={{ display: "flex", paddingBottom: '10px', fontSize: '30px', marginLeft: "80px" }}>
            <FaRobot /> <AiFillApple />
          </p>
          <h4 style={{paddingBottom: '10px', marginLeft: '70px'}}>Shop better</h4>
          <p style={{fontSize: '13px', padding: '20px'}}>
            Download the app for mobile-only features such as image search and
            discount games.
          </p>
        </section>
      </div>
      <hr />
      <div style={{display: 'flex', height: '40vh', padding: '40px 40px',gap: '40px'}}>
        <section style={{marginRight: 'auto'}}>
          <h4 style={{paddingBottom: '20px'}}>Stay connected</h4>
          <p style={{  fontSize: '20px'}}>
            <AiFillFacebook style={{marginRight: '10px'}} />
            <FaTwitter style={{marginRight: '10px'}} />
            <BsInstagram style={{marginRight: '10px'}} />
            <BsWhatsapp />
          </p>
        </section>
        <section>
          <h4 style={{paddingBottom: '10px'}}>Shopping with us </h4>
          
          <div style={{fontSize: '13px'}}>  <p>Making payments </p>
          <br/>
            <p>Delivery options</p>
            <br/>
             <p>Buyer Protection</p> </div>
        </section>
        <section>
  <h4 style={{paddingBottom: '10px'}}>Customer service</h4>
  <div style={{fontSize: '13px'}}>
  <p>
Help Center</p>
<br/>
<p>Transaction Services </p>
<br/>
<p>Agreement for non-EU/UK Consumers</p>
<br/>
<p>Terms and Conditions for EU/EEA/UK </p> 
<br/>
<p> Consumers(Transactions)</p>
<br/>
<p>Take our feedback survey</p>
</div>
        </section>
        <section>
            <h4 style={{paddingBottom: '10px'}}>Collaborate with us </h4>
            <div style={{fontSize: '13px'}}>
            <p>
Partnerships</p>
<br/>
<p>Affiliate program</p>
<br/>
<p>DS Center</p></div>
        </section>
      </div>
    </div>
  );
}

export default Main4;
