import React from "react";
import {FaRobot} from 'react-icons/Fa'
import {AiFillApple} from 'react-icons/Ai'
import {TiBusinessCard} from 'react-icons/Ti'

function Main5() {
  return (
    <div style={{display: "flex", padding:' 20px 40px', backgroundColor: ' rgba(128, 128, 128, 0.082)'}}>
      <section style={{ marginRight: '80px'}}>
        <div>
        <h4>Help</h4>
        <p style={{padding: '20px 0px', fontSize: '13px'}}>Help Center, Disputes & Reports, Buyer Protection, Report IPR infringement, Regulated Information, Integrity Compliance</p>
        </div>
        <div>
            <h4>Browse by Category</h4>
            <p style={{padding: '20px 0px', fontSize: '13px'}}>All Popular, Product, Promotion, Low Price, Great Value, Reviews, Blog, Seller Portal, BLACK FRIDAY, AliExpress Assistant</p>
        </div>
        <div style={{}}>
            <button style={{padding: '5px 10px', backgroundColor: "greenyellow", color: "white", fontWeight: "bolder", gap: '20px', marginRight: '20px'}}><FaRobot/> Google play</button>
            <button style={{padding: '5px 10px', backgroundColor: "grey", color: "white", fontWeight: "bolder", marginRight: '20px'}}><AiFillApple/> App Store</button>
            <button style={{padding: '5px 10px', backgroundColor: "black", color: "white", fontWeight: "bolder"}}><TiBusinessCard/>AppGallery</button>
        </div>
      </section>

      <section>
        <div>
            <h4>AliExpress Multi-Languahe Sites</h4>
            <p style={{padding: '20px 0px', fontSize: '13px'}}>Russian, Portuguese, Spanish, French, German, Italian, Dutch, Turkish, Japanese, Korean, Thai, Vietnamese, Arabic, Hebrew, Polish</p>
        </div>
        <div>
            <h4>Alibaba Group</h4>
            <p style={{padding: '20px 0px', fontSize: '13px'}}>
Alibaba Group Website, AliExpress, Alimama, Alipay, Fliggy, Alibaba Cloud, Alibaba International, AliTelecom, DingTalk, Juhuasuan, Taobao Marketplace, Tmall, Taobao Global, AliOS, 1688</p>
        </div>
      </section>
    </div>
  );
}

export default Main5;
